import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Dimensions, Platform, StyleSheet, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { ChevronLeftIcon } from 'react-native-heroicons/outline';
import { AntDesign } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import Cast from './Cast';
import MovieList from './MovieList';
import { fetchMovieCredits, fetchMovieDetails, fetchSimilarMovies, image500 } from '../../../../api/moviedb';
import Loading from '../Loading';

const { width, height } = Dimensions.get('window');
const ios = Platform.OS === 'ios';
const topMargin = ios ? 0 : 20;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#141414',
  },
  safeArea: {
    position: 'absolute',
    zIndex: 20,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: topMargin,
  },
  leftIconContainer: {
    backgroundColor: '#eab308',
    borderRadius: 9999,
    padding: width * 0.02,
  },
});

export default function MovieScreen({ route }) {
  const { item } = route.params;

  const [isFavourite, toggleFavourite] = useState(false);
  const [cast, setCast] = useState([]);
  const [similarMovies, setSimilarMovies] = useState([]);
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const navigation = useNavigation();

  useEffect(() => {
    setIsLoading(true);
    getMovieDetails(item.id);
    getMovieCredits(item.id);
    getSimilarMoves(item.id);
  }, [item]);


  const getMovieDetails = async id => {
    const data = await fetchMovieDetails(id);
    if (data) setMovie(data);
    setIsLoading(false);
  };

  const getMovieCredits = async id => {   
      const data = await fetchMovieCredits(id);
      if(data && data.cast)setCast(data.cast);
      setIsLoading(false);
  };

  const getSimilarMoves = async id => {
    const data = await fetchSimilarMovies(id);
    if (data && data.results) setSimilarMovies(data.results);
    setIsLoading(false);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={{ width: '100%' }}>
        <SafeAreaView style={styles.safeArea}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.leftIconContainer}>
            <ChevronLeftIcon size={width * 0.04} strokeWidth={2.5} color="white" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => toggleFavourite(!isFavourite)}>
            <AntDesign name="heart" size={width * 0.06} color={isFavourite ? "#eab308" : "white"} />
          </TouchableOpacity>
        </SafeAreaView>
        {isLoading ? (
          <Loading />
        ) : (
          <View>
            <Image
              source={{ uri: image500(movie.poster_path) }}
              style={{ width: width, height: height * 0.55 }}
            />
            <LinearGradient
              colors={['transparent', 'rgba(23,23,23,0.8)', 'rgba(23,23,23,1)']}
              style={{ width: width, height: height * 0.55, position: 'absolute', bottom: 0 }}
              start={{ x: 0.5, y: 0 }}
              end={{ x: 0.5, y: 1 }}
            />
          </View>
        )
        }
      </View>

      {/* Movie Details */}
      <View style={{ marginTop: -(height * 0.09) }} className="space-y-3">
        <Text className="text-white text-center text-3xl font-bold tracking-wider">
          {movie.title}
        </Text>

        {/* Status, release, runtime */}
        <Text className="text-neutral-400 font-semibold text-base text-center">
          {movie?.status} . {movie?.release_date?.split('-')[0]} . {movie?.runtime} Mins
        </Text>

        {/* genres */}
        <View className="flex-row justify-center mx-4 space-x-2">
          {movie?.genres?.map((genre, index) => {
            let showDot = index + 1 != movie.genres.length;
            return (
              <Text key={index} className="text-neutral-400 font-semibold text-base text-center">
                {genre?.name} {showDot ? "." : null}
              </Text>
            );
          })}
        </View>

        {/* description */}
        <Text className="text-neutral-400 mx-4 tracking-wide">
          {movie?.overview}
        </Text>
      </View>

      {/* Cast */}
     
      <Cast cast={cast} />

      {/* Similar movie */}
      <MovieList title="Similar Movies" hideSeeAll={true} data={similarMovies} />
    </ScrollView>
  );
}

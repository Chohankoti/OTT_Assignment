import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Dimensions, Platform, StyleSheet, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { ChevronLeftIcon } from 'react-native-heroicons/outline';
import { AntDesign } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import Cast from './Cast';
import MovieList from './MovieList';

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
  const [cast, setCast] = useState([1, 2, 3, 4, 5]);
  const [similarMovies, setSimilarMovies] = useState([1, 2, 3, 4, 5]);

  const navigation = useNavigation();
  console.log("MovieScreen page: ", route.params);

  useEffect(() => {
    // Do something with item if needed
  }, [item]);

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
        <View>
          <Image
            source={require('../../../../assets/icon.png')}
            style={{ width: width, height: height * 0.55 }}
          />
          <LinearGradient
            colors={['transparent', 'rgba(23,23,23,0.8)', 'rgba(23,23,23,1)']}
            style={{ width: width, height: height * 0.55, position: 'absolute', bottom: 0 }}
            start={{ x: 0.5, y: 0 }}
            end={{ x: 0.5, y: 1 }}
          />
        </View>
      </View>

      {/* Movie Details */}
      <View style={{ marginTop: -(height * 0.09) }} className="space-y-3">
        <Text className="text-white text-center text-3xl font-bold tracking-wider">
          KGF
        </Text>

        {/* Status, release, runtime */}
        <Text className="text-neutral-400 font-semibold text-base text-center">
          Released . 2023 . 170 Mins
        </Text>

        {/* generes */}
        <View className="flex-row justify-center mx-4 space-x-2">
          <Text className="text-neutral-400 font-semibold text-base text-center">
            Action .
          </Text>
          <Text className="text-neutral-400 font-semibold text-base text-center">
            Thrill .
          </Text>
          <Text className="text-neutral-400 font-semibold text-base text-center">
            Comedy.
          </Text>
        </View>

        {/* description */}
        <Text className="text-neutral-400 mx-4 tracking-wide">
          In the film, Rocky, a high-ranking mercenary, working for a prominent gold mafia in Bombay, seeks power and wealth in order to fulfill his mother's promise. Due to his high fame, the leaders of the gold mafia where he works hire him to assassinate Garuda, the son of the founder of Kolar Gold Fields.
        </Text>
      </View>

      {/* Cast */}
      <Cast cast={cast} />

      {/* Similar movie */}

      <MovieList title="Similar Movies" hideSeeAll={true} data={similarMovies} />


    </ScrollView>
  );
}

import { View, Text, Platform, ScrollView, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign } from '@expo/vector-icons';
import TrendingMovies from './Movies/TrendingMovies';
import MovieList from './Movies/MovieList';
import { useNavigation } from '@react-navigation/native';
import { fetchTopRatedMovies, fetchTrendingMovies, fetchUpcomingMovies } from '../../../api/moviedb';
import Loading from './Loading';

const ios = Platform.OS === 'ios';

export default function Movies() {
  const [trending, setTrending] = useState([]);
  const [upComing, setUpcoming] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [isLoading, setIsLoading] = useState(false); 
  
  useEffect(()=>{
    getTrendingMovies();
    getUpcomingMovies();
    getTopRatedMovies();
  },[]);

  const getTrendingMovies = async() =>{
    const data = await fetchTrendingMovies();
    if(data && data.results)setTrending(data.results);
  }

  const getUpcomingMovies = async() =>{
    const data = await fetchUpcomingMovies();
    if(data && data.results)setUpcoming(data.results);
  }

  const getTopRatedMovies = async() =>{
    const data = await fetchTopRatedMovies();
    if(data && data.results)setTopRated(data.results);
  }


  return (
    <View className="flex-1 bg-neutral-800">
      <SafeAreaView className={ios ? '-mb-2' : 'mb-3'}>        
        <View className="flex-row justify-between items-center mx-4 mt-3">
          <Text className="text-white text-3xl font-bold items-center flex-1 text-center">
            <Text style={{ color: "#eab308" }}>M</Text>ovies
          </Text>
          <TouchableOpacity>
            <AntDesign name="search1" size={30} color="white" />
          </TouchableOpacity>
        </View>
      </SafeAreaView>

      {isLoading?(
        <Loading/>
      ):(
        <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 10 }}
      >
        {/* Trending Movies carousel */}
        { trending.length>0 && <TrendingMovies data={trending} />}

        {/* Upcoming movies row */}
        <MovieList title="UpComming" data={upComing} />

        {/* Top movies row */}
        <MovieList title="Top Rated" data={topRated} />
      </ScrollView>
      )}
        

      
    </View>
  );
}

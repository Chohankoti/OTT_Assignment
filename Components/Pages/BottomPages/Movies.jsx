import { View, Text, Platform } from 'react-native';
import React, {useState} from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { MagnifyingGlassIcon } from 'react-native-heroicons/outline';
import {Styles} from '../../theme/index';
import TrendingMovies from './Movies/TrendingMovies';
import MovieList from './Movies/MovieList';

const ios = Platform.OS === 'ios';

export default function Movies() {
  const [trending, setTrending] = useState([1,2,3]);
  const [upComing, setUpcoming] = useState([1,2,3]);
  const [topRated, setTopRated] = useState([1,2,3]);
  return (
    <View className="flex-1 bg-neutral-800">
      <SafeAreaView className={ios ? '-mb-2' : 'mb-3'}>
        <View className="flex-row justify-between items-center mx-4 mt-3">
          <Text className="text-white text-3xl font-bold items-center flex-1 text-center">
            <Text style={{color:"#eab308"}}>M</Text>ovies
          </Text>
          <TouchableOpacity>
            <MagnifyingGlassIcon size={30} strokeWidth={2} color="white" />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 10}}
      >
        {/* Trending Movies carousel */}
        <TrendingMovies data={trending}/>
   
        {/* Upcoming movies row */}
        <MovieList title="UpComming" data={upComing}/>

        {/* Top movies row */}
        <MovieList title="Top Rated" data={topRated}/>
      </ScrollView>
    </View>
  );
}

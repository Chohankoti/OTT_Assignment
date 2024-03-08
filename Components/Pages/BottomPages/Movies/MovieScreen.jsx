import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Dimensions, Platform, StyleSheet, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { ChevronLeftIcon } from 'react-native-heroicons/outline';
import { AntDesign } from '@expo/vector-icons';
import { LinearGradient } from 'react-native-svg';

const { width, height } = Dimensions.get('window');
const ios = Platform.OS === 'ios';
const topMargin = ios ? 0 : 20;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141414',
    paddingBottom: 20,
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
          <TouchableOpacity onPress={()=> toggleFavourite(!isFavourite)}>
            <AntDesign name="heart" size={width * 0.06} color={isFavourite?"#eab308":"white"} /> 
          </TouchableOpacity>
        </SafeAreaView>
        <View>
            <Image
                source={require('../../../../assets/icon.png')}
                style={{width:width,height:height*0.55}}
            />
            <LinearGradient 
                color={['transparent','rgba(23,23,23,0.8)','rgba(23,23,23,1)']}
                style={{width:width,height:height*0.40}}
                start={{x:0.5,y:0}}
                end={{x:0.5,y:1}}
                className="absolute bottom-8"
            />
        </View>
      </View>

      {/* Movie Details */}
      <View style={{marginTop: -(height*0.09)}} className="space-y-3">
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
      </View>
    </ScrollView>
  );
}

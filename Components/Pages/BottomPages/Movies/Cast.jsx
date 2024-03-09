import { View, Text, ScrollView, Image } from 'react-native';
import React from 'react';

export default function Cast({ cast }) {
  let personname = "Yash";
  let charactername = "Rocky";
  return (
    <View className="my-6">
      <Text className="text-white text-lg mx-4 mb-5">Cast</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15 }}
      >
        {
          cast && cast.map((person, index) => (
            <View className="mr-4 items-center" key={index}>
             <View className="overflow-hidden rounded-full h-20 w-20 items-center border border-neutral-500">
                <Image className="rounded-2xl h-24 w-20" source={require('../../../../assets/icon.png')}/>
             </View>             

              <Text className="text-white text-xs mt-1">
                {
                  charactername.length > 10 ? charactername.slice(0, 10) + '...' : charactername
                }
              </Text>
              <Text className="text-neutral-400 text-xs mt-1">
                {
                  personname.length > 10 ? personname.slice(0, 10) + '...' : personname
                }
              </Text>
            </View>
          ))
        }
      </ScrollView>
    </View>
  )
}

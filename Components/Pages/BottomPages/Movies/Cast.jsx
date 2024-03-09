import { View, Text, ScrollView, Image } from 'react-native';
import React from 'react';
import { image185 } from '../../../../api/moviedb';

export default function Cast({ cast }) {


  return (
    <View className="my-6">
      <Text className="text-white text-lg mx-4 mb-5">Top Cast</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15 }}
      >
        {cast && cast.length > 0 ? (
          cast.map((person, index) => (
            <View className="mr-4 items-center" key={index}>
              <View className="overflow-hidden rounded-full h-20 w-20 items-center border border-neutral-500">
                <Image className="rounded-2xl h-24 w-20" source={{ uri: image185(person?.profile_path)}} />
              </View>

              <Text className="text-white text-xs mt-1">
                {person.character && person.character.length > 0 ? (
                  person.character.length > 10 ? person.character.slice(0, 10) + '...' : person.character
                ) : (
                  <Text>Character Name</Text>
                )}
              </Text>
              <Text className="text-neutral-400 text-xs mt-1">
                {person.original_name && person.original_name.length > 0 ? (
                  person.original_name.length > 10 ? person.original_name.slice(0, 10) + '...' : person.original_name
                ) : (
                  <Text>Original Name</Text>
                )}
              </Text>
            </View>
          ))
        ) : (
          <Text className="text-white text-xs mt-1">Currently Not Available</Text>
        )}
      </ScrollView>
    </View>
  )
}

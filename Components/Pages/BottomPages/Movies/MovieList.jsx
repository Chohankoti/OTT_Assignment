import { View, Text, Image, Dimensions, ScrollView, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { image185 } from '../../../../api/moviedb';

var { width, height } = Dimensions.get('window');
export default function MovieList({ title, data, hideSeeAll }) {
    const navigation = useNavigation();
    

    const handleSearchPress = () => {
      navigation.navigate('Search');
    };

    return (
        <View className="mb-8 space-y-4">
            <View className="mx-4 flex-row justify-between items-center">
                <Text className="text-white text-xl">{title}</Text>
                {
                    !hideSeeAll && (
                        <TouchableOpacity onPress={handleSearchPress}>
                            <Text style={{ color: "#eab308" }} className="text-lg">See All</Text>
                        </TouchableOpacity>
                    )
                }
            </View>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: 15 }}
            >
                {data.map((item, index) => (
                    <TouchableWithoutFeedback
                        key={index}
                        onPress={() => navigation.navigate('Movie',  { item: item } )}
                    >
                        <View className="space-y-1 mr-4">
                            <Image
                                source={{uri: image185(item.poster_path)}}
                                className="rounded-3xl"
                                style={{ width: width * 0.33, height: height * 0.22 }}
                            />
                            <Text className="text-neutral-300 ml-1">
                                {item.title.length > 14 ? item.title.slice(0, 14) + '...' : item.title}
                            </Text>
                        </View>
                    </TouchableWithoutFeedback>
                ))}
            </ScrollView>
        </View>
    )
}

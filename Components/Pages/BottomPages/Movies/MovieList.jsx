import { View, Text, Image, Dimensions, ScrollView, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import React from 'react'
import { useNavigation } from '@react-navigation/native'

var { width, height } = Dimensions.get('window');
export default function MovieList({ title, data, hideSeeAll }) {
    const navigation = useNavigation();
    const moviename = "KGF";
    

    const handleSearchPress = () => {
      console.log("Search button pressed");
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
                        onPress={() => navigation.navigate('Movie',  item )} // Pass item directly as a prop
                    >
                        <View className="space-y-1 mr-4">
                            <Image
                                source={require('../../../../assets/icon.png')}
                                className="rounded-3xl"
                                style={{ width: width * 0.33, height: height * 0.22 }}
                            />
                            <Text className="text-neutral-300 ml-1">
                                {moviename.length > 14 ? moviename.slice(0, 14) + '...' : moviename}
                            </Text>
                        </View>
                    </TouchableWithoutFeedback>
                ))}
            </ScrollView>
        </View>
    )
}

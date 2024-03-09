import { View, Text, Dimensions, TouchableOpacity, TouchableWithoutFeedback, Image, ScrollView, TextInput } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

export default function MovieSearch() {
    const navigation = useNavigation();
    const [results, setResults] = useState([]);

    const moviename = "KGF";

    return (
        <SafeAreaView className="bg-neutral-800 flex-1">
            <View className="mx-4 mb-3 flex-row justify-between items-center border border-neutral-500 rounded-full">
                <TextInput
                    placeholder='Search Movie'
                    placeholderTextColor={'lightgray'}
                    className="pb-1 pl-6 flex-1 text-base font-semibold text-while tracking-wider"
                />
                <TouchableOpacity
                    onPress={() => navigation.navigate('Movies')}
                    className="rounded-full p-3 m-1 bg-neutral-500"
                >
                    <MaterialIcons name="cancel" size={24} color="white" />
                </TouchableOpacity>
            </View>
            {
                results.length > 0 ? (
                    <ScrollView
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{ paddingHorizontal: 15 }}
                        className="space-y-3"
                    >
                        <Text className="text-white font-semibold ml-1">Results ({results.length})</Text>
                        <View className="flex-row justify-between flex-wrap">
                            {
                                results.map((item, index) => (
                                    <TouchableWithoutFeedback
                                        key={index}
                                        onPress={() => navigation.push("Movie", item)}
                                    >
                                        <View className="space-y-2 mb-4">
                                            <Image className="rounded-3xl"
                                                source={require('../../../../assets/icon.png')}
                                                style={{ width: width * 0.44, height: height * 0.3 }}
                                            />
                                            <Text className="text-neutral-300 ml-1">
                                                {
                                                    moviename.length > 22 ? moviename.slice(0, 22) + '...' : moviename
                                                }
                                            </Text>
                                        </View>
                                    </TouchableWithoutFeedback>
                                ))
                            }

                        </View>
                    </ScrollView>
                ) : (
                    <View className="flex-row justify-center items-center">
                        <Image source={require('../../../../assets/search.png')}
                        className="h-96 w-96"
                        />
                    </View>
                )
            }

        </SafeAreaView>
    )
}
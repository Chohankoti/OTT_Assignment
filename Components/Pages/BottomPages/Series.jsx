import { View, Text, Platform, ScrollView, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign } from '@expo/vector-icons';
import MovieList from './Movies/MovieList';
import Loading from './Loading';

export default function Series() {
  const [isLoading, setIsLoading] = useState(false);
  const [trending, setTrending] = useState([]);
  const [upComing, setUpcoming] = useState([
    {
      "adult": false,
      "backdrop_path": "/h0y3OzHzG4yNvn8u3Za6ByH8lrQ.jpg",
      "genre_ids": [
          18,
          10766
      ],
      "id": 45789,
      "origin_country": [
          "DE"
      ],
      "original_language": "de",
      "original_name": "Sturm der Liebe",
      "overview": "These are the stories of relationships taking place in the fictional five-star hotel Fürstenhof, located in Feldkirchen-Westerham near Rosenheim with the plot revolving around members of the family room area, the hotel owners, and employees.",
      "popularity": 2817.621,
      "poster_path": "/9oZjOh3Va3FsiLGouhSogFsBX9G.jpg",
      "first_air_date": "2005-09-26",
      "name": "Sturm der Liebe",
      "vote_average": 7.25,
      "vote_count": 14
  },
  {
      "adult": false,
      "backdrop_path": "/eWF3oRyL4QWaidN9F4uvM7cBJUV.jpg",
      "genre_ids": [
          10766
      ],
      "id": 206559,
      "origin_country": [
          "ZA"
      ],
      "original_language": "af",
      "original_name": "Binnelanders",
      "overview": "A South African Afrikaans soap opera. It is set in and around the fictional private hospital, Binneland Kliniek, in Pretoria, and the storyline follows the trials, trauma and tribulations of the staff and patients of the hospital.",
      "popularity": 2320.919,
      "poster_path": "/v9nGSRx5lFz6KEgfmgHJMSgaARC.jpg",
      "first_air_date": "2005-10-13",
      "name": "Binnelanders",
      "vote_average": 6.063,
      "vote_count": 40
  },
  {
      "adult": false,
      "backdrop_path": "/9TXcHOeCsM8W3ZKKIKjdYUsRSeq.jpg",
      "genre_ids": [
          80,
          18
      ],
      "id": 72879,
      "origin_country": [
          "FR"
      ],
      "original_language": "fr",
      "original_name": "Demain nous appartient",
      "overview": "The story revolves around the people of Sète, France. Their lives are punctuated by family rivalries, romance and scenes from daily life, but also by plots involving police investigations, secrets and betrayals.",
      "popularity": 2068.91,
      "poster_path": "/3uU5uJzOX7xe7mn7YKpBM9oiEZO.jpg",
      "first_air_date": "2017-07-17",
      "name": "Tomorrow Is Ours",
      "vote_average": 6.125,
      "vote_count": 55
  },
  {
      "adult": false,
      "backdrop_path": "/qZ7CdO7rkH0KyCxvZBoP4Mm2cQL.jpg",
      "genre_ids": [
          10767,
          99
      ],
      "id": 132544,
      "origin_country": [
          "KR"
      ],
      "original_language": "ko",
      "original_name": "위대한 수업, 그레이트 마인즈",
      "overview": "",
      "popularity": 1943.756,
      "poster_path": "/lj46PSaBziqCqbGXlmnXN325biA.jpg",
      "first_air_date": "2021-08-30",
      "name": "Great Minds",
      "vote_average": 5.333,
      "vote_count": 12
  },
  {
      "adult": false,
      "backdrop_path": "/kaiKuIEc8c0nhDVYcjWYJGD7eDC.jpg",
      "genre_ids": [
          10764
      ],
      "id": 75685,
      "origin_country": [
          "CZ"
      ],
      "original_language": "cs",
      "original_name": "Prostřeno!",
      "overview": "The knives (and forks) are out as a group of strangers compete for the title of ultimate dinner party host. And the money on the table adds spice to the proceedings...",
      "popularity": 1883.023,
      "poster_path": "/lh8GGzReYg4uoIjpveARaPgd4ZY.jpg",
      "first_air_date": "2010-03-01",
      "name": "Prostřeno!",
      "vote_average": 6.2,
      "vote_count": 5
  },
      ]);
      setUpcoming([
        {
          "adult": false,
          "backdrop_path": "/h0y3OzHzG4yNvn8u3Za6ByH8lrQ.jpg",
          "genre_ids": [
              18,
              10766
          ],
          "id": 45789,
          "origin_country": [
              "DE"
          ],
          "original_language": "de",
          "original_name": "Sturm der Liebe",
          "overview": "These are the stories of relationships taking place in the fictional five-star hotel Fürstenhof, located in Feldkirchen-Westerham near Rosenheim with the plot revolving around members of the family room area, the hotel owners, and employees.",
          "popularity": 2817.621,
          "poster_path": "/9oZjOh3Va3FsiLGouhSogFsBX9G.jpg",
          "first_air_date": "2005-09-26",
          "name": "Sturm der Liebe",
          "vote_average": 7.25,
          "vote_count": 14
      },
      {
          "adult": false,
          "backdrop_path": "/eWF3oRyL4QWaidN9F4uvM7cBJUV.jpg",
          "genre_ids": [
              10766
          ],
          "id": 206559,
          "origin_country": [
              "ZA"
          ],
          "original_language": "af",
          "original_name": "Binnelanders",
          "overview": "A South African Afrikaans soap opera. It is set in and around the fictional private hospital, Binneland Kliniek, in Pretoria, and the storyline follows the trials, trauma and tribulations of the staff and patients of the hospital.",
          "popularity": 2320.919,
          "poster_path": "/v9nGSRx5lFz6KEgfmgHJMSgaARC.jpg",
          "first_air_date": "2005-10-13",
          "name": "Binnelanders",
          "vote_average": 6.063,
          "vote_count": 40
      },
      {
          "adult": false,
          "backdrop_path": "/9TXcHOeCsM8W3ZKKIKjdYUsRSeq.jpg",
          "genre_ids": [
              80,
              18
          ],
          "id": 72879,
          "origin_country": [
              "FR"
          ],
          "original_language": "fr",
          "original_name": "Demain nous appartient",
          "overview": "The story revolves around the people of Sète, France. Their lives are punctuated by family rivalries, romance and scenes from daily life, but also by plots involving police investigations, secrets and betrayals.",
          "popularity": 2068.91,
          "poster_path": "/3uU5uJzOX7xe7mn7YKpBM9oiEZO.jpg",
          "first_air_date": "2017-07-17",
          "name": "Tomorrow Is Ours",
          "vote_average": 6.125,
          "vote_count": 55
      },
      {
          "adult": false,
          "backdrop_path": "/qZ7CdO7rkH0KyCxvZBoP4Mm2cQL.jpg",
          "genre_ids": [
              10767,
              99
          ],
          "id": 132544,
          "origin_country": [
              "KR"
          ],
          "original_language": "ko",
          "original_name": "위대한 수업, 그레이트 마인즈",
          "overview": "",
          "popularity": 1943.756,
          "poster_path": "/lj46PSaBziqCqbGXlmnXN325biA.jpg",
          "first_air_date": "2021-08-30",
          "name": "Great Minds",
          "vote_average": 5.333,
          "vote_count": 12
      },
      {
          "adult": false,
          "backdrop_path": "/kaiKuIEc8c0nhDVYcjWYJGD7eDC.jpg",
          "genre_ids": [
              10764
          ],
          "id": 75685,
          "origin_country": [
              "CZ"
          ],
          "original_language": "cs",
          "original_name": "Prostřeno!",
          "overview": "The knives (and forks) are out as a group of strangers compete for the title of ultimate dinner party host. And the money on the table adds spice to the proceedings...",
          "popularity": 1883.023,
          "poster_path": "/lh8GGzReYg4uoIjpveARaPgd4ZY.jpg",
          "first_air_date": "2010-03-01",
          "name": "Prostřeno!",
          "vote_average": 6.2,
          "vote_count": 5
      },
      {
          "adult": false,
          "backdrop_path": "/rj3jBAZwPiOgkwAy1205MAgLahj.jpg",
          "genre_ids": [
              10766
          ],
          "id": 81329,
          "origin_country": [
              "FR"
          ],
          "original_language": "fr",
          "original_name": "Un si grand soleil",
          "overview": "Claire is surprised when she gets arrested for the murder of her childhood friend after she returns to Montpellier.",
          "popularity": 1873.366,
          "poster_path": "/t6jVlbPMtZOJoAOfeoR4yQmnjXM.jpg",
          "first_air_date": "2018-08-27",
          "name": "Chronicles of the Sun",
          "vote_average": 7.329,
          "vote_count": 70
      },
      ]);
      setTopRated([
        {
          "adult": false,
          "backdrop_path": "/h0y3OzHzG4yNvn8u3Za6ByH8lrQ.jpg",
          "genre_ids": [
              18,
              10766
          ],
          "id": 45789,
          "origin_country": [
              "DE"
          ],
          "original_language": "de",
          "original_name": "Sturm der Liebe",
          "overview": "These are the stories of relationships taking place in the fictional five-star hotel Fürstenhof, located in Feldkirchen-Westerham near Rosenheim with the plot revolving around members of the family room area, the hotel owners, and employees.",
          "popularity": 2817.621,
          "poster_path": "/9oZjOh3Va3FsiLGouhSogFsBX9G.jpg",
          "first_air_date": "2005-09-26",
          "name": "Sturm der Liebe",
          "vote_average": 7.25,
          "vote_count": 14
      },
      {
          "adult": false,
          "backdrop_path": "/xl1wGwaPZInJo1JAnpKqnFozWBE.jpg",
          "genre_ids": [
              35,
              10767
          ],
          "id": 59941,
          "origin_country": [
              "US"
          ],
          "original_language": "en",
          "original_name": "The Tonight Show Starring Jimmy Fallon",
          "overview": "After Jay Leno's second retirement from the program, Jimmy Fallon stepped in as his permanent replacement. After 42 years in Los Angeles the program was brought back to New York.",
          "popularity": 3523.283,
          "poster_path": "/g4amxJvtpnY79J77xeamnAEUO8r.jpg",
          "first_air_date": "2014-02-17",
          "name": "The Tonight Show Starring Jimmy Fallon",
          "vote_average": 5.886,
          "vote_count": 294
      },
      {
          "adult": false,
          "backdrop_path": "/eWF3oRyL4QWaidN9F4uvM7cBJUV.jpg",
          "genre_ids": [
              10766
          ],
          "id": 206559,
          "origin_country": [
              "ZA"
          ],
          "original_language": "af",
          "original_name": "Binnelanders",
          "overview": "A South African Afrikaans soap opera. It is set in and around the fictional private hospital, Binneland Kliniek, in Pretoria, and the storyline follows the trials, trauma and tribulations of the staff and patients of the hospital.",
          "popularity": 2320.919,
          "poster_path": "/v9nGSRx5lFz6KEgfmgHJMSgaARC.jpg",
          "first_air_date": "2005-10-13",
          "name": "Binnelanders",
          "vote_average": 6.063,
          "vote_count": 40
      },
      {
          "adult": false,
          "backdrop_path": "/9TXcHOeCsM8W3ZKKIKjdYUsRSeq.jpg",
          "genre_ids": [
              80,
              18
          ],
          "id": 72879,
          "origin_country": [
              "FR"
          ],
          "original_language": "fr",
          "original_name": "Demain nous appartient",
          "overview": "The story revolves around the people of Sète, France. Their lives are punctuated by family rivalries, romance and scenes from daily life, but also by plots involving police investigations, secrets and betrayals.",
          "popularity": 2068.91,
          "poster_path": "/3uU5uJzOX7xe7mn7YKpBM9oiEZO.jpg",
          "first_air_date": "2017-07-17",
          "name": "Tomorrow Is Ours",
          "vote_average": 6.125,
          "vote_count": 55
      },
      {
          "adult": false,
          "backdrop_path": "/qZ7CdO7rkH0KyCxvZBoP4Mm2cQL.jpg",
          "genre_ids": [
              10767,
              99
          ],
          "id": 132544,
          "origin_country": [
              "KR"
          ],
          "original_language": "ko",
          "original_name": "위대한 수업, 그레이트 마인즈",
          "overview": "",
          "popularity": 1943.756,
          "poster_path": "/lj46PSaBziqCqbGXlmnXN325biA.jpg",
          "first_air_date": "2021-08-30",
          "name": "Great Minds",
          "vote_average": 5.333,
          "vote_count": 12
      },
      {
          "adult": false,
          "backdrop_path": "/kaiKuIEc8c0nhDVYcjWYJGD7eDC.jpg",
          "genre_ids": [
              10764
          ],
          "id": 75685,
          "origin_country": [
              "CZ"
          ],
          "original_language": "cs",
          "original_name": "Prostřeno!",
          "overview": "The knives (and forks) are out as a group of strangers compete for the title of ultimate dinner party host. And the money on the table adds spice to the proceedings...",
          "popularity": 1883.023,
          "poster_path": "/lh8GGzReYg4uoIjpveARaPgd4ZY.jpg",
          "first_air_date": "2010-03-01",
          "name": "Prostřeno!",
          "vote_average": 6.2,
          "vote_count": 5
      },
      ]);
      setIsLoading(false);
    }, 1000); // Adjust timeout as needed
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: '#000' }}>
      <SafeAreaView style={{ marginBottom: Platform.OS === 'ios' ? -2 : 3 }}>        
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 4, marginTop: 3 }}>
          <Text style={{ color: 'white', fontSize: 24, fontWeight: 'bold', textAlign: 'center' }}>
            <Text style={{ color: '#eab308' }}>S</Text>eries
          </Text>
          <TouchableOpacity>
            <AntDesign name="search1" size={30} color="white" />
          </TouchableOpacity>
        </View>
      </SafeAreaView>

      {isLoading ? (
        <Loading />
      ) : (
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 10 }}
        >
          {/* Upcoming series */}
          <MovieList title="Airing Today" data={upComing} />

          {/* Trending series */}
          <MovieList title="Trending Now" data={trending} />

          {/* Top-rated series */}
          <MovieList title="Top Rated" data={topRated} />

          {/* Add more series lists here */}

        </ScrollView>
      )}
    </View>
  );
}

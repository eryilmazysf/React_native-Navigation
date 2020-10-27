import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {SafeAreaView, View, Text, FlatList} from 'react-native';
import {RestaurantItem, SearchBar} from '../components';

let originalList = [];

const RestaurantList = (props) => {
  const [restaurantList, setRestaurantList] = useState([]);
  const {selectedCity} = props.route.params; // we get paramaters from CityList

  const fetchRestaurants = () => {
    axios
      .get('http://opentable.herokuapp.com/api/restaurants', {
        params: {
          // restaurants zorunlu olarak parametre girisi istemektedir
          city: selectedCity,
        },
      })
      .then((response) => {
        console.log(response);
        setRestaurantList(response.data.restaurants); //response icinde data ve data icinde restaurants erisim sagladik
        originalList = [...response.data.restaurants];
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchRestaurants();
  }, []);

  const renderRestaurants = ({item}) => {
    return (
      <RestaurantItem
        restaurant={item}
        onSelect={
          () => props.navigation.navigate('Details', {selectedRestaurant: item}) // detail sayfasina git giderken secili olan item da gotur
        }
      />
    );
  };

  function searchRestaurant(search) {
    const filteredRestaurants = originalList.filter((restaurant) => {
      const text = search.toUpperCase();
      const restaurantName = restaurant.name.toUpperCase();

      return restaurantName.indexOf(text) > -1;
    });

    setRestaurantList(filteredRestaurants);
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
        <View>
          <Text style={{margin: 5, fontWeight: 'bold', fontSize: 30}}>
            {selectedCity} Restaurants
          </Text>
          <SearchBar
            placeholder="Search a restaurant..."
            onSearch={(value) => searchRestaurant(value)}
          />
        </View>
        <FlatList
          keyExtractor={(_, index) => index.toString()}
          data={restaurantList}
          renderItem={renderRestaurants}
        />
      </View>
    </SafeAreaView>
  );
};

export {RestaurantList};
// 1.program çalışır
// 2. usestate dolar
// 3.usestate originallisti doldurur
// 4. filter işlemi original list üzerinden yapılır ve usestate kaydedilir
// 5. original list sadece program yeniden çalıştığında dolar

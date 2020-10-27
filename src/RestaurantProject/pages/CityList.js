import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  ActivityIndicator,
} from 'react-native';

import {CityItem, SearchBar} from '../components';

let originalList = [];

const CityList = (props) => {
  const [cityList, setCityList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // const [originalList, setOriginalList] = useState([]);

  // ASYNC-AWAIT
  const fetchCityData = async () => {
    setIsLoading(true);
    //{data}=response.data
    const {data} = await axios.get(
      'https://opentable.herokuapp.com/api/cities',
    ); // obje icinde data oldugu icin {data} yaptik
    console.log(data);
    setCityList(data.cities);
    // setOriginalList(data.cities);
    originalList = [...data.cities]; //kopyalama yapmak icin ... kullaniriz
    setIsLoading(false);
  };

  //when loading page  verileri ekrana basmasi icin
  useEffect(() => {
    fetchCityData();
  }, []);

  const renderCities = ({item}) => {
    return (
      <CityItem
        cityName={item}
        onSelect={() =>
          props.navigation.navigate('Restaurants', {selectedCity: item})
        }
      />
    );
  };

  // to put line each among items
  const renderSeparator = () => (
    <View style={{borderWidth: 1, borderColor: '#212121'}} />
  );
  function searchCity(search) {
    const filteredCity = originalList.filter((city) => {
      const text = search.toUpperCase();
      const cityName = city.toUpperCase();

      return cityName.indexOf(text) > -1;
    });
    setCityList(filteredCity);
  }
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
        {isLoading ? (
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <ActivityIndicator size="large" color="#263238" />
          </View>
        ) : (
          <View>
            <SearchBar
              placeholder="search a city"
              onSearch={(value) => searchCity(value)}
            />
            <FlatList
              keyExtractor={(_, index) => index.toString()}
              data={cityList}
              renderItem={renderCities}
              ItemSeparatorComponent={renderSeparator} //item aralarina cizgi vermek icin
            />
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export {CityList};

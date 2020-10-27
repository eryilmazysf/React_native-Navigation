import React from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';

const RestaurantItem = (props) => {
  // money
  let money = '';
  for (var i = 0; i < props.restaurant.price; i++) {
    money += '💰';
  }
  return (
    <TouchableOpacity style={styles.container} onPress={props.onSelect}>
      <Image style={styles.image} source={{uri: props.restaurant.image_url}} />
      <View
        style={{
          flex: 2,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text style={styles.name}>{props.restaurant.name}</Text>
        <Text style={{fontSize: 30}}>{money}</Text>
      </View>
    </TouchableOpacity>
  );
};
export {RestaurantItem};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#bdbdbd',
    padding: 10,
    margin: 5,
    borderRadius: 5,
  },
  image: {
    height: Dimensions.get('window').height / 3,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    flex: 1,
    padding: 10,
  },
});

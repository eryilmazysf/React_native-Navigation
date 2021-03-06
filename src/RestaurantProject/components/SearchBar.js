import React from 'react';
import {Dimensions, StyleSheet, TextInput, View} from 'react-native';

const SearchBar = (props) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={{fontSize: 20, fontWeight: 'bold', padding: 10, color: 'black'}}
        placeholder={props.placeholder}
        onChangeText={(value) => props.onSearch(value)}
      />
    </View>
  );
};
export {SearchBar};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e0e0e0',
    margin: 5,
    padding: 5,
    borderRadius: 5,
    alignItems: 'center',
  },
});

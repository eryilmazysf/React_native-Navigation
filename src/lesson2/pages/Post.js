import React from 'react';
import {SafeAreaView, View, Text, Image, Dimensions} from 'react-native';

const Post = (props) => {
  const postData = props.route.params.selectedPost; //sayfalar arasi props tasimi yapmak icin

  return (
    <SafeAreaView>
      <Text style={{fontSize: 30, color: 'green'}}>{postData.userName}</Text>
      <Image
        source={{uri: postData.img}}
        style={{height: Dimensions.get('window').height / 2}}
      />
      <Text>{postData.description}</Text>
    </SafeAreaView>
  );
};
export {Post};

import React from 'react';
import {
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  View,
  TouchableWithoutFeedback,
  Alert,
} from 'react-native';

const PostCard = (props) => {
  return (
    <TouchableOpacity>
      {/* when we click items,they make blink thanks to touchable opacity to prevent this blink we use without feedback */}
      <TouchableWithoutFeedback onPress={() => props.onSelect()}>
        <View>
          <Image style={styles.image} source={{uri: props.post.img}} />

          <View style={styles.footerContainer}>
            <Text style={styles.title}>{props.post.userName}</Text>
            <Text numberOfLines={2}>{props.post.description}</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </TouchableOpacity>
  );
};
export default PostCard;

const styles = StyleSheet.create({
  image: {
    height: Dimensions.get('window').height / 3,
  },
  footerContainer: {
    padding: 5,
    margin: 5,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },
});

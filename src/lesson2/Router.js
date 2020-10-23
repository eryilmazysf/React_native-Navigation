import * as React from 'react';
import {Text, SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Main, Post, Friends} from './pages';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// const First = () => {
//   return (
//     <SafeAreaView>
//       <Text>First</Text>
//     </SafeAreaView>
//   );
// };

// const Second = () => {
//   return (
//     <SafeAreaView>
//       <Text>Second</Text>
//     </SafeAreaView>
//   );
// };

function MainComponent() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#ffeb3b',
        },
        headerTintColor: '#1b5e20',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 25,
        },
      }}
      initialRouteName="MainPage">
      <Stack.Screen name="MainPage" component={Main} />
      <Stack.Screen name="PostPage" component={Post} />
    </Stack.Navigator>
  );
}

function Router() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="MainComponentPage"
        tabBarOptions={{
          activeTintColor: 'red',
        }}>
        <Tab.Screen
          name="MainComponentPage"
          component={MainComponent}
          options={{title: 'Home'}}
        />
        <Tab.Screen
          name="FriendsPage"
          component={Friends}
          options={{title: 'Friends'}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
export default Router;

/*
        + Tab Navigator
            + MainComponent
                - Main
                - Post
            + Friends            
*/

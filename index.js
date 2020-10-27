/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import Router from './src/RestaurantProject/Router';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Router);

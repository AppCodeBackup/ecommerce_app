import React, { Component } from 'react';
import {
	StyleSheet,
	Image,
	Text,
	TouchableOpacity,
	View,
	BackHandler
} from 'react-native';

import { StackNavigator, navigation, DrawerNavigator } from 'react-navigation';
import Entypo from 'react-native-vector-icons/Entypo';
import NavigationDrawer from '../utils/components/NavigationDrawer';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';


const Home = ({navigation}) => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <TouchableOpacity onPress = {() => navigation.navigate('Products') }><Text>Home Screen</Text></TouchableOpacity>
  </View>
);

const Products = ({ navigation }) => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <TouchableOpacity onPress = {() => navigation.navigate('Category') }><Text>Profile Screen</Text></TouchableOpacity>
  </View>
);

const Categorys = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Profile Screen</Text>
  </View>
);
const Cart = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Profile Screen</Text>
  </View>
);
const Account = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Profile Screen</Text>
  </View>
);
const Order = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Profile Screen</Text>
  </View>
);

// const Drawerstack = DrawerNavigator({
//   Shop : { screen: Products },
//   Category : { screen: Categorys },
//   Cart : { screen: Cart },
//   Account : { screen: Account },
//   Order : { screen: Order },
// },{
//   contentComponent: NavigationDrawer,
// })

// const Index = StackNavigator({
//   Home : { screen: Home },
//   drawerstack: { screen: Drawerstack },

// },
//  {
//     headerMode: 'none'
// });

/*const HomeScreen = ({ navigation }) => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Home Screen</Text>
    <Button
      onPress={() => navigation.navigate('Details')}
      title="Go to details"
    />
  </View>
);

const DetailsScreen = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Details Screen</Text>
  </View>
);

const ProfileScreen = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Profile Screen</Text>
  </View>
);
*/
const RootDrawer = DrawerNavigator({
  Categorys: {
    screen: Categorys,
  },
  Products: {
    screen: Products,
  },
},
  {
  contentComponent: NavigationDrawer,
});

const RootNavigator = StackNavigator({
  Home: {
    screen: Home,
  },
 drawerstack: { screen: RootDrawer },
},
 {
    headerMode: 'none'
});

export default RootNavigator;
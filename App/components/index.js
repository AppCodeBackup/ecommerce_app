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

import Home from './home';
import Validation from './basichome';
import Products from './products';
import ViewProduct from './viewproduct';
import TabView from './tabView';
import Cart from './cart';
import CategorizedProduct from './categorizedproduct';
import Login from './login';
import RegistrationFirst from './registrationfirst';
import RegistrationSecond from './registrationsecond';
import RegistrationThird from './registrationthird';
import Category from './categorys';
import MyAccount from './myaccount';
import MyOrder from './myorder';
import OrderConfirm from './orderconfirm';
import MyOrdersView from './myordersview';
import Search from './search';
import EditBasicDetails from './editbasicdetails';
import EditBillingDetails from './editbillingdetails';
import EditShippingDetails from './editshippingdetails';
import PlaceOrder from './placeorder';


const RootDrawer = DrawerNavigator({
  home: {screen: Home,},
  products: {screen: Products,},
  categorys: {screen: Category,},
  cart: { screen: Cart,},
  myaccount: {screen: MyAccount,},
  myorder: {screen: MyOrder,},
  login: {screen: Login,},
  categorizedproducts: {screen: CategorizedProduct,},
 
},
  {
  contentComponent: NavigationDrawer,
});

const RootNavigator = StackNavigator({
  validate: {screen: Validation,},
  viewproduct: {screen: ViewProduct,},
  editbasicdetails: {screen: EditBasicDetails,},
  editbillingdetails: {screen: EditBillingDetails,},
  editshippingdetails: {screen: EditShippingDetails,},
  registrationfirst: { screen: RegistrationFirst,},
  registrationsecond:{ screen: RegistrationSecond,},
  registrationthird: {screen: RegistrationThird,},
  myordersview: {screen: MyOrdersView,},
  orderconfirm: {screen: OrderConfirm,},
  search: {screen: Search,},
  placeorder: {screen: PlaceOrder,},
  drawerstack: { screen: RootDrawer },
},
 {
    headerMode: 'none'
});

export default RootNavigator;

import React, { Component } from 'react';
import {
  AppRegistry,
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  children,
  AsyncStorage,
  Platform
} from 'react-native';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { navigation } from 'react-navigation';
import Css from '../../Css/main';
/*import Url from '../WooCommerce/config2';
import Api from '../WooCommerce/Api';
*/
export default class NavigationDrawer extends Component{

  state = {
    userData: '',
  }

  componentWillMount(){
    AsyncStorage.getItem('CustomerDetails').then((value) => {
      var tmp = JSON.parse(value);
      console.log('User data in Navigation drawer:- '+JSON.stringify(tmp))
      if(tmp != null){
        console.log('User data in Navigation drawer:- '+JSON.stringify(tmp))
        this.setState({
          userData: tmp
        })
      }
    }).done();
}

  _name(){
    if(this.state.userData != null){
      return(
        <View>
          <Text style = {Css.drawer_user_name}>Hello, {this.state.userData.username}</Text>
        </View>
      )
    }else{
      return(
        <View>
          <Text style = {Css.drawer_user_name}>Hello</Text>
        </View>
      )
    }
  }

  logOut(){
    AsyncStorage.removeItem("cart");
    AsyncStorage.removeItem("CustomerDetails");
    AsyncStorage.removeItem("billing_firstname");
    AsyncStorage.removeItem("billing_lastname");
    AsyncStorage.removeItem("billing_address");
    AsyncStorage.removeItem("billing_email");
    AsyncStorage.removeItem("billing_phonenum");
    AsyncStorage.removeItem("billing_city");
    AsyncStorage.removeItem("billing_state");
    AsyncStorage.removeItem("billing_pincode");
    AsyncStorage.removeItem("billing_country");
    AsyncStorage.removeItem("username");
    AsyncStorage.removeItem("firstname");
    AsyncStorage.removeItem("lastname");
    AsyncStorage.removeItem("email");
    AsyncStorage.removeItem("password");
    this.props.navigation.navigate('validate');
  }

  _backButton(){
    if(Platform.OS == 'ios'){
      return(
          <TouchableOpacity onPress={() => this.props.navigation.navigate('DrawerToggle')}><Ionicons name="md-arrow-back" size={20} style={Css.header_icon_color, Css.drawer_back_icon} /></TouchableOpacity> 
        );
    }
  }

  _loginbtn(){
    console.log('User data in Navigation drawer for LogOut:- '+JSON.stringify(this.state.userData))
    if(this.state.userData != ""){
      console.log('Logout')
      return(
        <View>
          <TouchableOpacity onPress = {() => this.logOut()}>
            <View style={Css.drawer_menu_container}>
              <View style={Css.drawer_menu_icon_container}>
                  <FontAwesome name ="sign-out" size ={14} style={Css.drawer_menu_icon_style} />
              </View>
              <View style ={Css.drawer_menu_text_container}>
                  <Text style = {Css.drawer_menu_text_style}>Logout</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      );
    }else{
      console.log('Login')
      return(
        <View>
          <TouchableOpacity onPress = {() => this.props.navigation.navigate('login')}>
            <View style={Css.drawer_menu_container}>
              <View style={Css.drawer_menu_icon_container}>
                <FontAwesome name ="sign-in" size ={14} style={Css.drawer_menu_icon_style} />
              </View>
              <View style ={Css.drawer_menu_text_container}>
                <Text style = {Css.drawer_menu_text_style}>Login</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      );
    }
  }

   render(){
    return(
    <View style={Css.drawer_main_container}>
        <View style = {Css.drawer_main_user_name_container}>
          {this._backButton()}
          {this._name()}
        </View>
        <TouchableOpacity onPress = {() => {
            if(this.state.userData != null){
              this.props.navigation.navigate('home', {userData:{Customer: this.state.userData}});
            }else{
            this.props.navigation.navigate('home');
            }
          }
        }>
        <View style={Css.drawer_menu_container}>
          <View style={Css.drawer_menu_icon_container}>
            <FontAwesome name ="home" size ={18} style={Css.drawer_menu_icon_style} />
          </View>
          <View style ={Css.drawer_menu_text_container}>
            <Text style = {Css.drawer_menu_text_style}>Home</Text>
          </View>
        </View>
        </TouchableOpacity>
        <TouchableOpacity onPress = {() => {
          if(this.state.userData != null){
            this.props.navigation.navigate('products', {userData:{Customer:this.state.userData.Customer}});
          }else{
            this.props.navigation.navigate('products');
          }
        }}>
        <View style={Css.drawer_menu_container}>
          <View style={Css.drawer_menu_icon_container}>
            <FontAwesome name ="shopping-basket" size ={14} style={Css.drawer_menu_icon_style} />
          </View>
          <View style ={Css.drawer_menu_text_container}>
            <Text style = {Css.drawer_menu_text_style}>shop</Text>
          </View>
        </View>
        </TouchableOpacity>
        <TouchableOpacity onPress = {() => {
          if(this.state.userData != null){
            this.props.navigation.navigate('categorys', {userData:{Customer:this.state.userData}});
          }else{
            this.props.navigation.navigate('categorys');
          }
        }}>
        <View style={Css.drawer_menu_container}>
          <View style={Css.drawer_menu_icon_container}>
            <FontAwesome name ="heart" size ={14} style={Css.drawer_menu_icon_style} />
          </View>
          <View style ={Css.drawer_menu_text_container}>
            <Text style = {Css.drawer_menu_text_style}>Category</Text>
          </View>
        </View>
        </TouchableOpacity>
        <TouchableOpacity onPress = {() => {
          if(this.state.userData != null){
            this.props.navigation.navigate('cart', {userData:{Customer:this.state.userData}});
          }else{
            this.props.navigation.navigate('cart');
          }
        }}>
        <View style={Css.drawer_menu_container}>
          <View style={Css.drawer_menu_icon_container}>
            <FontAwesome name ="opencart" size ={14} style={Css.drawer_menu_icon_style} />
          </View>
          <View style ={Css.drawer_menu_text_container}>
            <Text style = {Css.drawer_menu_text_style}>Cart</Text>
          </View>
        </View>
        </TouchableOpacity>
        {this.state.userData!='' && <TouchableOpacity onPress = {() => {
                  if(this.state.userData != null){
                    this.props.navigation.navigate('myaccount', {userData:{Customer:this.state.userData}});
                  }else{
                    this.props.navigation.navigate('myaccount');
                  }
                }}>
                <View style={Css.drawer_menu_container}>
                  <View style={Css.drawer_menu_icon_container}>
                    <FontAwesome name ="user" size ={16} style={Css.drawer_menu_icon_style} />
                  </View>
                  <View style ={Css.drawer_menu_text_container}>
                    <Text style = {Css.drawer_menu_text_style}>My Account</Text>
                  </View>
                </View>
                </TouchableOpacity>
              }
        {this.state.userData!='' &&<TouchableOpacity onPress = {() => {
                  if(this.state.userData != null){
                    this.props.navigation.navigate('myorder', {userData:{Customer:this.state.userData}});
                  }else{
                    this.props.navigation.navigate('myorder');
                  }
                }}>
                <View style={Css.drawer_menu_container}>
                  <View style={Css.drawer_menu_icon_container}>
                    <FontAwesome name ="upload" size ={14} style={Css.drawer_menu_icon_style} />
                  </View>
                  <View style ={Css.drawer_menu_text_container}>
                    <Text style = {Css.drawer_menu_text_style}>My Orders</Text>
                  </View>
                </View>
                </TouchableOpacity>}
          {this._loginbtn()}
      </View>
      )}
}
      
import React, { Component } from 'react';
import {
	View,
	Text,
	StatusBar,
	TouchableOpacity,
  StyleSheet,
  TouchableHighlight,
  Image,
  ImageBackground,
	ScrollView,
	TextInput,
	ListView,
	AsyncStorage,
} from 'react-native';

import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ImageSlider from 'react-native-image-slider';
import { responsiveHeight, responsiveWidth} from 'react-native-responsive-dimensions';
import Api from '../utils/WooCommerce/Api';
import Css,{companyname} from '../Css/main';
import * as Progress from 'react-native-progress';
import Item from './item';
import TabView from './tabView';
import { StackNavigator, navigation, DrawerNavigator } from 'react-navigation';

export default class RegistrationFirst extends Component {
  constructor(props) {
    super(props);
    this.state ={
      UserName:'',
      FirstName:'',
      LastName:'',
      Email:'',
      Password:'',
      ConfPassword:'',
    };

  }

  render(){
    return(
      <View style ={Css.container}>
        <View style={Css.header_main}>
          <View style = {Css.header_menu_view}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('login')}>
              <Ionicons name="md-arrow-back" size={25} style={Css.header_icon_color}/>
            </TouchableOpacity>
          </View>
          <View style = {Css.registration_header_main_text_view}>
            <Text style = {Css.header_main_Heading_Text} >{companyname}</Text>
          </View>
        </View>
        <View style ={Css.registrationpage_main_container}>
          <View style={Css.registrationpage_heading_container}>
            <Text style ={Css.registrationpage_heading_Text}>Basic Details</Text>
          </View>
          <View style ={Css.registrationpage_input_field_container}>
          <TextInput
            style={Css.registrationpage_input_field_style}
            underlineColorAndroid='transparent'
            placeholder="Username"
            placeholderStyle = {{fontFamily:'Montserrat-Regular'}}
            placeholderTextColor = "#212121"
            returnKeyLabel = {"next"}
            onChangeText={(username) => this.setState({UserName:username})}
          />
          </View>
          <View style ={Css.registrationpage_input_field_container}>
          <TextInput
            style={Css.registrationpage_input_field_style}
            underlineColorAndroid='transparent'
            placeholder="First Name"
            placeholderStyle = {{fontFamily:'Montserrat-Regular'}}
            placeholderTextColor = "#212121"
            returnKeyLabel = {"next"}
            onChangeText={(firstname) => this.setState({FirstName:firstname})}
          />
          </View>
          <View style ={Css.registrationpage_input_field_container}>
          <TextInput
            style={Css.registrationpage_input_field_style}
            underlineColorAndroid='transparent'
            placeholder="Last Name"
            placeholderStyle = {{fontFamily:'Montserrat-Regular'}}
            placeholderTextColor = "#212121"
            returnKeyLabel = {"next"}
            onChangeText={(lastname) => this.setState({LastName:lastname})}
          />
          </View>
          <View style ={Css.registrationpage_input_field_container}>
          <TextInput
            style={Css.registrationpage_input_field_style}
            underlineColorAndroid='transparent'
            placeholder="Email"
            placeholderStyle = {{fontFamily:'Montserrat-Regular'}}
            placeholderTextColor = "#212121"
            returnKeyLabel = {"next"}
            onChangeText={(email) => this.setState({Email:email})}
          />
          </View>
          <View style ={Css.registrationpage_input_field_container}>
          <TextInput
            style={Css.registrationpage_input_field_style}
            underlineColorAndroid='transparent'
            placeholder="Password"
            placeholderStyle = {{fontFamily:'Montserrat-Regular'}}
            placeholderTextColor = "#212121"
            returnKeyLabel = {"next"}
            secureTextEntry = {true}
            onChangeText={(password) => this.setState({Password:password})}
          />
          </View>
          <View style ={Css.registrationpage_input_field_container}>
          <TextInput
            style={Css.registrationpage_input_field_style}
            underlineColorAndroid='transparent'
            placeholder="Confirm Password"
            placeholderStyle = {{fontFamily:'Montserrat-Regular'}}
            placeholderTextColor = "#212121"
            returnKeyLabel = {"next"}
            secureTextEntry = {true}
            onChangeText={(confpassword) => this.setState({ConfPassword:confpassword})}
          />
          </View>
          <View style ={Css.registrationpage_input_field_container}>
            <TouchableOpacity onPress ={() => this.next_page()}>
              <View style = {Css.registrationpage_next_container}>
                <Text style ={Css.registrationpage_next_text}>Next</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={Css.registrationpage_alreadyaccount_container}>
            <Text style ={Css.registrationpage_next_text}>Already have an account? </Text>
            <TouchableOpacity onPress ={() => this.props.navigation.navigate('login')}>
              <Text style ={Css.registrationpage_loginbtn_text}>Log In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }

  next_page(){
    var user_name = this.state.UserName;
    var first_name = this.state.FirstName;
    var last_name = this.state.LastName;
    var _email = this.state.Email;
    var _password = this.state.Password;
    var conf_password = this.state.ConfPassword;
     if(user_name && first_name && last_name && _email && _password && conf_password){
       if(_password === conf_password){
          AsyncStorage.setItem("username", user_name);
          AsyncStorage.setItem("firstname", first_name);
          AsyncStorage.setItem("lastname", last_name);
          AsyncStorage.setItem("email", _email);
          AsyncStorage.setItem("password", _password);
          this.props.navigation.navigate('registrationsecond');
       }else{
         alert("password didn't match");
       }
     }else{
       alert("Fields are empty");
     }
  }
}

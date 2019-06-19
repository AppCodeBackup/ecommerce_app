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

export default class RegistrationSecond extends Component {
  constructor(props) {
    super(props);
		this.state ={
			FirstName:'',
			LastName:'',
			Address:'',
			Email:'',
			PhoneNum:'',
			City:'',
			State:'',
			Pincode:'',
			Country:'',
		};
  }

  render(){
    return(
      <View style ={Css.container}>
        <View style={Css.header_main}>
          <View style = {Css.header_menu_view}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('registrationfirst')}>
              <Ionicons name="md-arrow-back" size={25} style={Css.header_icon_color}/>
            </TouchableOpacity>
          </View>
          <View style = {Css.registration_header_main_text_view}>
           <Text style = {Css.header_main_Heading_Text} >{companyname}</Text>
          </View>
        </View>
        <View style ={Css.registrationpage_main_container}>
          <View style={Css.registrationpage_heading_container}>
            <Text style ={Css.registrationpage_heading_Text}>Billing Details</Text>
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
            placeholder="Address"
            placeholderStyle = {{fontFamily:'Montserrat-Regular'}}
            placeholderTextColor = "#212121"
            returnKeyLabel = {"next"}
            onChangeText={(address) => this.setState({Address:address})}
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
            placeholder="Phone No."
            placeholderStyle = {{fontFamily:'Montserrat-Regular'}}
            placeholderTextColor = "#212121"
            returnKeyLabel = {"next"}
            keyboardType = 'numeric'
            onChangeText={(phonenum) => this.setState({PhoneNum:phonenum})}
          />
          </View>
          <View style ={[Css.registrationpage_input_field_container, {flexDirection:'row'}]}>
          <TextInput
            style={[Css.registrationpage_smallinput_field,Css.registrationpage_smallinput_field2]}
            underlineColorAndroid='transparent'
            placeholder="City"
            placeholderStyle = {{fontFamily:'Montserrat-Regular'}}
            placeholderTextColor = "#212121"
            returnKeyLabel = {"next"}
            onChangeText={(city) => this.setState({City:city})}
          />
          <TextInput
            style={Css.registrationpage_smallinput_field}
            underlineColorAndroid='transparent'
            placeholder="State"
            placeholderStyle = {{fontFamily:'Montserrat-Regular'}}
            placeholderTextColor = "#212121"
            returnKeyLabel = {"next"}
            onChangeText={(state) => this.setState({State:state})}
          />
          </View>
          <View style ={[Css.registrationpage_input_field_container, {flexDirection:'row'}]}>
          <TextInput
            style={[Css.registrationpage_smallinput_field, Css.registrationpage_smallinput_field2]}
            underlineColorAndroid='transparent'
            placeholder="Pincode"
            keyboardType = 'numeric'
            placeholderStyle = {{fontFamily:'Montserrat-Regular'}}
            placeholderTextColor = "#212121"
            returnKeyLabel = {"next"}
            onChangeText={(pincode) => this.setState({Pincode:pincode})}
          />
          <TextInput
            style={Css.registrationpage_smallinput_field}
            underlineColorAndroid='transparent'
            placeholder="Country"
            placeholderStyle = {{fontFamily:'Montserrat-Regular'}}
            placeholderTextColor = "#212121"
            returnKeyLabel = {"next"}
            onChangeText={(country) => this.setState({Country:country})}
          />
          </View>
          <View style ={Css.registrationpage_input_field_container}>
            <TouchableOpacity onPress ={() => this.next_page()}>
              <View style = {Css.registrationpage_next_container}>
                <Text style ={Css.registrationpage_next_text}>Next</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }

	next_page(){
		var first_name = this.state.FirstName;
		var last_name = this.state.LastName;
		var _address = this.state.Address;
		var _email = this.state.Email;
		var phone_num = this.state.PhoneNum;
		var _city = this.state.City;
		var _state = this.state.State;
		var _pincode = this.state.Pincode;
		var _country = this.state.Country;
		if(first_name && last_name && _address && _email && phone_num && _city && _state && _pincode && _country){
			AsyncStorage.setItem("billing_firstname", first_name);
			AsyncStorage.setItem("billing_lastname", last_name);
			AsyncStorage.setItem("billing_address", _address);
			AsyncStorage.setItem("billing_email", _email);
			AsyncStorage.setItem("billing_phonenum", phone_num);
			AsyncStorage.setItem("billing_city", _city);
			AsyncStorage.setItem("billing_state", _state);
			AsyncStorage.setItem("billing_pincode", _pincode);
			AsyncStorage.setItem("billing_country", _country);
			this.props.navigation.navigate('registrationthird');
		 }else{
		 	alert("Fields are empty!");
	 	 }
	}
}

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
import Url from '../utils/WooCommerce/config2';
import { StackNavigator, navigation, DrawerNavigator } from 'react-navigation';

export default class RegistrationThird extends Component {
  constructor(props) {
    super(props);
		this.state ={
			FirstName:'',
			LastName:'',
			Address:'',
			City:'',
			State:'',
			Pincode:'',
			Country:'',
      bill_firstname:'',
      bill_lastname:'',
      bill_address:'',
      bill_email:'',
      bill_phonenum:'',
      bill_city:'',
      bill_state:'',
      bill_pincode:'',
      bill_country:'',
      bsc_username:'',
      bsc_firstname:'',
      bsc_lastname:'',
      bsc_email:'',
      bsc_password:'',
		};
  }

  componentWillMount(){
    this.getData();
  }

  getData(){
    AsyncStorage.getItem("username").then((value) => {
      this.setState({bsc_username: value});
    }).done();
    AsyncStorage.getItem("firstname").then((value) => {
      this.setState({bsc_firstname: value});
    }).done();
    AsyncStorage.getItem("lastname").then((value) => {
      this.setState({bsc_lastname: value});
    }).done();
    AsyncStorage.getItem("email").then((value) => {
      this.setState({bsc_email: value});
    }).done();
    AsyncStorage.getItem("password").then((value) => {
      this.setState({bsc_password: value});
    }).done();
    AsyncStorage.getItem("billing_firstname").then((value) => {
      this.setState({bill_firstname: value});
    }).done();
    AsyncStorage.getItem("billing_lastname").then((value) => {
      this.setState({bill_lastname: value});
    }).done();
    AsyncStorage.getItem("billing_address").then((value) => {
      this.setState({bill_address: value});
    }).done();
    AsyncStorage.getItem("billing_email").then((value) => {
      this.setState({bill_email: value});
    }).done();
    AsyncStorage.getItem("billing_phonenum").then((value) => {
      this.setState({bill_phonenum: value});
    }).done();
    AsyncStorage.getItem("billing_city").then((value) => {
      this.setState({bill_city: value});
    }).done();
    AsyncStorage.getItem("billing_state").then((value) => {
      this.setState({bill_state: value});
    }).done();
    AsyncStorage.getItem("billing_pincode").then((value) => {
      this.setState({bill_pincode: value});
    }).done();
    AsyncStorage.getItem("billing_country").then((value) => {
      this.setState({bill_country: value});
    }).done();
  }

  render(){
    return(
      <View style ={Css.container}>
        <View style={Css.header_main}>
          <View style = {Css.header_menu_view}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('registrationsecond')}>
              <Ionicons name="md-arrow-back" size={25} style={Css.header_icon_color}/>
            </TouchableOpacity>
          </View>
          <View style = {Css.registration_header_main_text_view}>
            <Text style = {Css.header_main_Heading_Text} >{companyname}</Text>
          </View>
        </View>
        <ScrollView>
        <View style ={Css.registrationpage_main_container2}>
          <View style={Css.registrationpage_heading_container}>
            <Text style ={Css.registrationpage_heading_Text}>Shipping Details</Text>
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
              placeholder="City"
              placeholderStyle = {{fontFamily:'Montserrat-Regular'}}
              placeholderTextColor = "#212121"
              returnKeyLabel = {"next"}
              onChangeText={(city) => this.setState({City:city})}
            />
          </View>
          <View style ={Css.registrationpage_input_field_container}>
            <TextInput
              style={Css.registrationpage_input_field_style}
              underlineColorAndroid='transparent'
              placeholder="State"
              placeholderStyle = {{fontFamily:'Montserrat-Regular'}}
              placeholderTextColor = "#212121"
              returnKeyLabel = {"next"}
              onChangeText={(state) => this.setState({State:state})}
            />
          </View>
          <View style ={Css.registrationpage_input_field_container}>
            <TextInput
              style={Css.registrationpage_input_field_style}
              underlineColorAndroid='transparent'
              placeholder="Pincode"
              placeholderStyle = {{fontFamily:'Montserrat-Regular'}}
              placeholderTextColor = "#212121"
              returnKeyLabel = {"next"}
              keyboardType ='numeric'
              onChangeText={(pincode) => this.setState({Pincode:pincode})}
            />
          </View>
          <View style ={Css.registrationpage_input_field_container}>
            <TextInput
              style={Css.registrationpage_input_field_style}
              underlineColorAndroid='transparent'
              placeholder="Country"
              placeholderStyle = {{fontFamily:'Montserrat-Regular'}}
              placeholderTextColor = "#212121"
              returnKeyLabel = {"next"}
              onChangeText={(country) => this.setState({Country:country})}
            />
          </View>
          <View style ={Css.registrationpage_input_field_container}>
            <TouchableOpacity onPress={() => this.register()}>
              <View style = {Css.registrationpage_next_container}>
                <Text style ={Css.registrationpage_next_text}>Submit</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style ={Css.registrationpage_termsancdcondn}>
            <Text style ={Css.registrationpage_next_text}>I accept terms & condition</Text>
          </View>
        </View>
        </ScrollView>
      </View>
    );
  }

  register(){
		var firstname = this.state.FirstName;
		var lastname = this.state.LastName;
		var address = this.state.Address;
		var city = this.state.City;
		var state = this.state.State;
		var pincode = this.state.Pincode;
		var country = this.state.Country;
		if(firstname && lastname && address && city && state && pincode && country){
    fetch(Url.main+'customers/'+Url.end, {
				method:"POST",
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
				"email": this.state.bsc_email,
        "first_name": this.state.bsc_firstname,
        "last_name": this.state.bsc_lastname,
        "username": this.state.bsc_username,
        "password": this.state.bsc_password,
			  "billing": {
			    "first_name": this.state.bill_firstname,
			    "last_name": this.state.bill_lastname,
			    "address_1": this.state.bill_address,
			    "city": this.state.bill_city,
			    "state": this.state.bill_state,
			    "postcode": this.state.bill_pincode,
			    "country": this.state.bill_country,
			    "email": this.state.bill_email,
			    "phone": this.state.bill_phonenum,
			  },
			  "shipping": {
			    "first_name": this.state.FirstName,
			    "last_name": this.state.LastName,
			    "address_1": this.state.Address,
			    "city": this.state.City,
			    "state": this.state.State,
			    "postcode": this.state.Pincode,
			    "country": this.state.Country,
			  }
			})
    }).then((response) => response.json())
      	.then((responseData) => {
        console.log("RegisterData:- "+ JSON.stringify(responseData));
				if(responseData.code){
				  alert(responseData.message);
				}else{
				  alert("Regsitration Successfull");
					this.props.navigation.navigate('login');
				}
      }).done();
		}
  }
}

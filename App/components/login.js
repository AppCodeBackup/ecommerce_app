import React, { Component } from 'react';
import {
	View,
	Text,
	StatusBar,
	TouchableOpacity,
  	StyleSheet,
  TouchableHighlight,
  Image,
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
import Css,{companyname,logo} from '../Css/main';
import * as Progress from 'react-native-progress';
import Item from './item';
import TabView from './tabView';
import { StackNavigator, navigation, DrawerNavigator } from 'react-navigation';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
        UserName: '',
				Password:'',
				user_email:'',
				isLoading: false,
				finish: false,
				showLoader: true,
    };

  }

  render(){
    return(
      <View style ={Css.loginpage_main_container}>
        <View style={Css.loginpage_submain_container}>
        <View style = {Css.loginpage_header_main}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('validate')}>
            <Ionicons name="md-arrow-back" size={25} color="black" style={Css.header_back_icon}/>
          </TouchableOpacity>
        </View>
        <View style ={Css.loginpage_logo_container}>
          <Image source ={logo} style= {Css.loginpage_logo} />
        </View>
        <View style = {Css.loginpage_heading_container}>
          <Text style={Css.loginpage_heading_text}>{companyname}</Text>
        </View>
        <View style ={Css.loginpage_username_field_container}>
        <TextInput
          style={Css.loginpage_input_field}
          underlineColorAndroid='transparent'
          placeholder="Email or Username"
          placeholderStyle = {{fontFamily:'Montserrat-Regular'}}
          placeholderTextColor = "#212121"
          returnKeyLabel = {"next"}
          onChangeText={(username) => this.setState({UserName:username})}
        />
        </View>
        <View style ={Css.loginpage_password_field_container}>
        <TextInput
          style={Css.loginpage_input_field}
          underlineColorAndroid='transparent'
          placeholder="Password"
          placeholderTextStyle = {{fontFamily:'Montserrat-Regular'}}
          placeholderTextColor = "#212121"
          returnKeyLabel = {"next"}
					secureTextEntry = {true}
          onChangeText={(password) => this.setState({Password:password})}
        />
        </View>
        <View style ={Css.loginpage_loginbtn_container}>
          <TouchableOpacity onPress ={() => this.login()}>
            <View style = {Css.loginpage_loginbtn_text_container}>
              <Text style ={Css.loginpage_loginbtn_text}>LOGIN</Text>
            </View>
          </TouchableOpacity>
        </View>
		<View style ={Css.loginpage_forgot_password_container}>
			<TouchableOpacity>
				<Text style={Css.loginpage_forgot_password_text}>Forgot Password?</Text>
			</TouchableOpacity>
		</View>
		</View>
		<View style ={Css.loginpage_end_container}>
			<View style ={Css.loginpage_sign_up_text_container}>
					<TouchableOpacity onPress = {() => this.props.navigation.navigate('registrationfirst')}>
						<Text style={Css.loginpage_sign_up_text}>Sign Up for {companyname}</Text>
					</TouchableOpacity>
					</View>
					<View style ={Css.loginpage_help_bttn_container}>
						<TouchableOpacity>
							<View  style = {Css.loginpage_help_icon_container}>
								<FontAwesome name ="question" size ={20} color ="white" />
							</View>
						</TouchableOpacity>
					</View>
			</View>
        </View>
    );
  }

	renderLoader() {
		if(this.state.finish){
			return(
			 this.state.showLoader?<View style={{justifyContent: 'center',alignItems:'center'}}><Progress.CircleSnail color={['red', 'green', 'blue']} style = {{marginLeft:165,marginTop:200}} /></View>:null
		 );
	 }else{
		 return;
	 }

	}

  hideLoader() {
    setTimeout (() => {
      this.setState({showLoader: false})
    }, 1);
  }

	login(){
		if(this.state.UserName != ''){
			if(this.state.Password != ''){
				this.setState({
			finish: true,
		});
		this.renderLoader();
		// if(!this.state.finish){
		// 	return;
		// }
		fetch('https://www.vwthemes.com/wp-json/jwt-auth/v1/token',{
			method: "POST",
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body:JSON.stringify({
				username: this.state.UserName,
				password: this.state.Password
			})
		}).then((response) => response.json())
		.then((responseData) => {
			console.log("LoginData:-" + JSON.stringify(responseData));
			this.setState({user_email: responseData.user_email})
		}).done(() => this.getCustomerData());
			}else{
				alert('Password is Empty!');
			}
		}else{
			alert('Username is Empty!');
		}
		

	}

	getCustomerData(){
		var cus = '';
		Api.get('customers',{
			method: "POST",
			email: this.state.user_email
		}).then(function(data){
			console.log("Customer Details:- "+ JSON.stringify(data));
			cus = data;
		}).done(() => this.saveData(cus));
	}

	saveData(customer){
		this.renderLoader();
		AsyncStorage.setItem("CustomerDetails", JSON.stringify(customer[0]));
		this.props.navigation.navigate('validate', {userData:{Customer: customer}});
	}
}

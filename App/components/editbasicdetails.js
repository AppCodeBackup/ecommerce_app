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
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
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

export default class EditBasicDetails extends Component {
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

  componentWillMount(){
		if(this.props.navigation.state.params.userData != null){
			this.setState({
	      LastName:this.props.navigation.state.params.userData.Customer.last_name,
	      FirstName:this.props.navigation.state.params.userData.Customer.first_name,
	      Email:this.props.navigation.state.params.userData.Customer.email,
	    })
		}else{

		}

  }

  render(){
    return(
      <View style ={Css.container}>
        <View style={Css.header_main}>
          <View style = {Css.header_menu_view}>
          <TouchableOpacity onPress = {() => {
            if(this.props.navigation.state.params.userData != null){
              this.props.navigation.navigate('myaccount', {userData:{Customer:this.props.navigation.state.params.userData.Customer}});
            }else{
              this.props.navigation.navigate('myaccount');
            }
          }}>
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
            placeholder="First Name"
            placeholderStyle = {{fontFamily:'Montserrat-Regular'}}
            placeholderTextColor = "#212121"
            returnKeyLabel = {"next"}
            value = {this.state.FirstName}
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
            value ={this.state.LastName}
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
            value ={this.state.Email}
            onChangeText={(email) => this.setState({Email:email})}
          />
          </View>
          <View style ={Css.registrationpage_input_field_container}>
            <TouchableOpacity onPress ={() => this.updateBasic()}>
              <View style = {Css.registrationpage_next_container}>
                <Text style ={Css.registrationpage_next_text}>Update</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }

  updateBasic(){
			if(this.state.FirstName === '' && this.state.LastName === '' && this.state.Email === ''){
				alert("Fields are Empty");
			}else{
				fetch(Url.main+'customers/'+this.props.navigation.state.params.userData.Customer.id+Url.end, {
					method:"PUT",
					headers: {
						'Accept': 'application/json',
						'Content-Type': 'application/json'
					},
					body: JSON.stringify({
						"first_name": this.state.FirstName,
						"last_name": this.state.LastName,
						"email":this.state.Email,
					})
				}).then((response) => response.json())
		      	.then((responseData) => {
		        console.log("UpdateData:- "+ JSON.stringify(responseData));
						if(responseData.code){
						  alert(responseData.message);
						}else{
						  alert("Updated Successfull");
							AsyncStorage.removeItem('CustomerDetails');
							AsyncStorage.setItem('CustomerDetails', JSON.stringify(responseData));
	            this.props.navigation.navigate('myaccount', {userData:{Customer:responseData}});
						}
		      }).done();
			}
  }
}

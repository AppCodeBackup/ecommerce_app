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
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ImageSlider from 'react-native-image-slider';
import { responsiveHeight, responsiveWidth} from 'react-native-responsive-dimensions';
import Api from '../utils/WooCommerce/Api';
import Css,{companyname} from '../Css/main';
import * as Progress from 'react-native-progress';
import Item from './item';
import TabView from './tabView';
import Url from '../utils/WooCommerce/config2';
import { StackNavigator, navigation, DrawerNavigator } from 'react-navigation';

export default class EditBillingDetails extends Component {
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

  componentWillMount(){
		if(this.props.navigation.state.params.userData != null){
			this.setState({
	      FirstName:this.props.navigation.state.params.userData.Customer.billing.first_name,
	      LastName:this.props.navigation.state.params.userData.Customer.billing.last_name,
	      Address:this.props.navigation.state.params.userData.Customer.billing.address_1,
	      Email:this.props.navigation.state.params.userData.Customer.billing.email,
	      PhoneNum:this.props.navigation.state.params.userData.Customer.billing.phone,
	      City:this.props.navigation.state.params.userData.Customer.billing.city,
	      State:this.props.navigation.state.params.userData.Customer.billing.state,
	      Pincode:this.props.navigation.state.params.userData.Customer.billing.postcode,
	      Country:this.props.navigation.state.params.userData.Customer.billing.country,
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
          <View style = {Css.header_main_text_view}>
            <Text style = {Css.header_main_Heading_Text} >{companyname}</Text>
          </View>
        </View>
        <ScrollView>
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
              value = {this.state.LastName}
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
              value = {this.state.Address}
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
              value = {this.state.Email}
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
              value = {this.state.PhoneNum}
              onChangeText={(phonenum) => this.setState({PhoneNum:phonenum})}
            />
            </View>
            <View style ={[Css.registrationpage_input_field_container, {flexDirection:'row'}]}>
            <TextInput
              style={[Css.registrationpage_smallinput_field, {marginLeft:20}]}
              underlineColorAndroid='transparent'
              placeholder="City"
              placeholderStyle = {{fontFamily:'Montserrat-Regular'}}
              placeholderTextColor = "#212121"
              returnKeyLabel = {"next"}
              value = {this.state.City}
              onChangeText={(city) => this.setState({City:city})}
            />
            <TextInput
              style={[Css.registrationpage_smallinput_field]}
              underlineColorAndroid='transparent'
              placeholder="State"
              placeholderStyle = {{fontFamily:'Montserrat-Regular'}}
              placeholderTextColor = "#212121"
              returnKeyLabel = {"next"}
              value = {this.state.State}
              onChangeText={(state) => this.setState({State:state})}
            />
            </View>
            <View style ={[Css.registrationpage_input_field_container, {flexDirection:'row'}]}>
            <TextInput
              style={[Css.registrationpage_smallinput_field, {marginLeft: 20}]}
              underlineColorAndroid='transparent'
              placeholder="Pincode"
              keyboardType = 'numeric'
              placeholderStyle = {{fontFamily:'Montserrat-Regular'}}
              placeholderTextColor = "#212121"
              returnKeyLabel = {"next"}
              value = {this.state.Pincode}
              onChangeText={(pincode) => this.setState({Pincode:pincode})}
            />
            <TextInput
              style={[Css.registrationpage_smallinput_field]}
              underlineColorAndroid='transparent'
              placeholder="Country"
              placeholderStyle = {{fontFamily:'Montserrat-Regular'}}
              placeholderTextColor = "#212121"
              returnKeyLabel = {"next"}
              value = {this.state.Country}
              onChangeText={(country) => this.setState({Country:country})}
            />
            </View>
            <View style ={Css.registrationpage_input_field_container}>
              <TouchableOpacity onPress ={() => this.updateBilling()}>
                <View style = {Css.registrationpage_next_container}>
                  <Text style ={Css.registrationpage_next_text}>Update</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }

	updateBilling(){
		if(this.state.FirstName === '' && this.state.LastName === '' && this.state.Email === '' && this.state.Address === '' && this.state.City === '' && this.state.State === '' && this.state.Pincode === '' &&
				this.state.Country === '' && this.state.PhoneNum === ''){
			alert("Fields are Empty");
		}else{
			fetch(Url.main+'customers/'+this.props.navigation.state.params.userData.Customer.id+Url.end, {
				method:"PUT",
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					"billing": {
				    "first_name": this.state.FirstName,
				    "last_name":this.state.LastName,
				    "address_1": this.state.Address,
				    "city": this.state.City,
				    "state": this.state.State,
				    "postcode": this.state.Pincode,
				    "country": this.state.Country,
				    "email": this.state.Email,
				    "phone": this.state.PhoneNum,
				  },
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

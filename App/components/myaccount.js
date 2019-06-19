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
	AsyncStorage,
	ListView,
} from 'react-native';

import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import ImageSlider from 'react-native-image-slider';
import { responsiveHeight, responsiveWidth} from 'react-native-responsive-dimensions';
import Api from '../utils/WooCommerce/Api';
import Css,{companyname} from '../Css/main';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { StackNavigator, navigation, DrawerNavigator } from 'react-navigation';


const Customer = '';

export default class MyAccount extends Component {
  constructor(props) {
    super(props);
    this.state ={
      cartcount:0,
    };
  }

	componentWillMount(){
    console.log('LALALALALALALALALAALA:----------------------  ' + JSON.stringify(this.props.navigation.state.params.userData))
		if(this.props.navigation.state.params.userData.Customer != ''){
			Customer = this.props.navigation.state.params.userData.Customer;
		}else{
			Customer = {
				email: '',
			  first_name: '',
			  last_name: '',
			  username: '',
			  billing: {
			    first_name: '',
			    last_name: '',
			    company: '',
			    address_1: '',
			    address_2: '',
			    city: '',
			    state: '',
			    postcode: '',
			    country: '',
			    email: '',
			    phone: ''
			  },
			  shipping: {
			    first_name: '',
			    last_name: '',
			    company: '',
			    address_1: '',
			    address_2: '',
			    city: '',
			    state: '',
			    postcode: '',
			    country: ''
			  }
			}
		}
    this.getNumberCart();
	}

   getNumberCart(){
    var tmpproduct = {};
    AsyncStorage.getItem("cart").then((value) => {
     if(value != null)
     {
     tmpproduct = JSON.parse(value);
     var tmppro = Object.keys(tmpproduct).map(function(key) {
       return(tmpproduct[key])
     });
     this.setState({
       cartcount: tmppro.length,
     })
   }else{
     this.setState({
       cartcount: 0,
     })
   }
   }).done();
  }

  render(){
    return(
      <View style ={Css.container}>
        <View style={Css.header_main}>
          <View style = {Css.header_menu_view}>
          <TouchableOpacity onPress={() => {
            if(this.props.navigation.state.params.userData != null){
              this.props.navigation.navigate('home', {userData:{Customer:this.props.navigation.state.params.userData.Customer}});
            }else{
              this.props.navigation.navigate('home');
            }
          }}>
              <Ionicons name="md-arrow-back" size={25} style={Css.header_icon_color} />
            </TouchableOpacity>
          </View>
          <View style = {Css.header_main_text_view}>
           <Text style = {Css.header_main_Heading_Text} >{companyname}</Text>
          </View>
          <TouchableOpacity onPress={() => {
            if(this.props.navigation.state.params.userData != null){
              this.props.navigation.navigate('search', {userData:{Customer:this.props.navigation.state.params.userData.Customer}});
            }else{
              this.props.navigation.navigate('search');
            }
          }}>
            <View style ={Css.header_search_view}>
              <MaterialIcons name ='search' size={27} style={Css.header_icon_color} />
            </View>
          </TouchableOpacity>
          <View style ={Css.header_cart_view}>
            <TouchableOpacity onPress={() => {
              if(this.props.navigation.state.params.userData != null){
                this.props.navigation.navigate('cart', {userData:{Customer:this.props.navigation.state.params.userData.Customer}});
              }else{
                this.props.navigation.navigate('cart');
              }
            }}>
              <MaterialCommunityIcons name="cart" size={30} style={Css.header_icon_color} />
            </TouchableOpacity>
            <Text style ={Css.cart_count_text}>{this.state.cartcount}</Text>
          </View>
        </View>
        <ScrollView>
          <View style={Css.myaccountpage_details_container}>
            <View style={Css.myaccountpage_basic_details_main_container}>
              <View style={Css.myaccountpage_heading_edit_container}>
                <View style={Css.myaccountpage_heading_container}>
                  <Text style={Css.myaccountpage_heading_text}>Basic Details</Text>
                </View>
                <TouchableOpacity onPress = {() => {
        					if(this.props.navigation.state.params.userData != null){
        						this.props.navigation.navigate('editbasicdetails', {userData:{Customer:this.props.navigation.state.params.userData.Customer}});
        					}else{
        						this.props.navigation.navigate('editbasicdetails');
        					}
        				}}>
                  <View style={Css.myaccountpage_edit_button_container}>
                    <Image source={require('../Images/pencil-striped-symbol-for-interface-edit-buttons.png')} style={Css.myaccountpage_edit_icon}/>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={Css.myaccountpage_inputfield_container}>
                <Text style={Css.myaccountpage_inputfield_text}>{Customer.first_name} {Customer.last_name}</Text>
              </View>
              <View style={Css.myaccountpage_inputfield_container}>
                <Text style={Css.myaccountpage_inputfield_text}>{Customer.email}</Text>
              </View>
            </View>
            <View style={Css.myaccountpage_billing_details_main_container}>
              <View style={Css.myaccountpage_heading_edit_container}>
                <View style={Css.myaccountpage_heading_container}>
                  <Text style={Css.myaccountpage_heading_text}>Billing Details</Text>
                </View>
                <TouchableOpacity onPress = {() => {
        					if(this.props.navigation.state.params.userData != null){
        						this.props.navigation.navigate('editbillingdetails', {userData:{Customer:this.props.navigation.state.params.userData.Customer}});
        					}else{
        						this.props.navigation.navigate('editbillingdetails');
        					}
        				}}>
                  <View style={Css.myaccountpage_edit_button_container}>
                    <Image source={require('../Images/pencil-striped-symbol-for-interface-edit-buttons.png')} style={Css.myaccountpage_edit_icon}/>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={Css.myaccountpage_inputfield_container}>
                <Text style={Css.myaccountpage_inputfield_text}>{Customer.billing.first_name} {Customer.billing.last_name}</Text>
              </View>
              <View style={Css.myaccountpage_inputfield_container}>
                <Text style={Css.myaccountpage_inputfield_text}>{Customer.billing.email}</Text>
              </View>
              <View style={Css.myaccountpage_inputfield_container}>
                <Text style={Css.myaccountpage_inputfield_text}>{Customer.billing.phone}</Text>
              </View>
              <View style={Css.myaccountpage_inputfield_container}>
                <Text style={Css.myaccountpage_inputfield_text}>{Customer.billing.address_1}</Text>
              </View>
              <View style={[Css.myaccountpage_inputfield_container,{flexDirection:'row'}]}>
                <View>
                  <Text style={Css.myaccountpage_inputfield_text}>{Customer.billing.city},</Text>
                </View>
                <View>
                  <Text style={Css.myaccountpage_inputfield_text}>{Customer.billing.state}</Text>
                </View>
              </View>
              <View style={[Css.myaccountpage_inputfield_container,{flexDirection:'row'}]}>
                <View style={{}}>
                  <Text style={Css.myaccountpage_inputfield_text}>{Customer.billing.country},</Text>
                </View>
                <View style={{}}>
                  <Text style={Css.myaccountpage_inputfield_text}>{Customer.billing.postcode}</Text>
                </View>
              </View>
            </View>
            <View style={Css.myaccountpage_shipping_details_main_container}>
              <View style={Css.myaccountpage_heading_edit_container}>
                <View style={Css.myaccountpage_heading_container}>
                  <Text style={Css.myaccountpage_heading_text}>Shipping Details</Text>
                </View>
								<TouchableOpacity onPress = {() => {
        					if(this.props.navigation.state.params.userData != null){
        						this.props.navigation.navigate('editshippingdetails', {userData:{Customer:this.props.navigation.state.params.userData.Customer}});
        					}else{
        						this.props.navigation.navigate('editshippingdetails');
        					}
        				}}>
                <View style={Css.myaccountpage_edit_button_container}>
                  <Image source={require('../Images/pencil-striped-symbol-for-interface-edit-buttons.png')} style={Css.myaccountpage_edit_icon}/>
                </View>
								</TouchableOpacity>
              </View>
              <View style={Css.myaccountpage_inputfield_container}>
                <Text style={Css.myaccountpage_inputfield_text}>{Customer.shipping.first_name} {Customer.shipping.last_name}</Text>
              </View>
              <View style={Css.myaccountpage_inputfield_container}>
                <Text style={Css.myaccountpage_inputfield_text}>{Customer.shipping.address_1}</Text>
              </View>
              <View style={[Css.myaccountpage_inputfield_container,{flexDirection:'row'}]}>
                <View style={{}}>
                  <Text style={Css.myaccountpage_inputfield_text}>{Customer.shipping.city},</Text>
                </View>
                <View style={{}}>
                  <Text style={Css.myaccountpage_inputfield_text}>{Customer.shipping.state}</Text>
                </View>
              </View>
              <View style={[Css.myaccountpage_inputfield_container,{flexDirection:'row'}]}>
                <View style={{}}>
                  <Text style={Css.myaccountpage_inputfield_text}>{Customer.shipping.country},</Text>
                </View>
                <View style={{}}>
                  <Text style={Css.myaccountpage_inputfield_text}>{Customer.shipping.postcode}</Text>
                </View>
              </View>
            </View>
            {this.loginbutton()}
          </View>
        </ScrollView>
      </View>
    );
  }

  loginbutton(){
    if(this.props.navigation.state.params.userData.Customer != ''){
      return(
        <TouchableOpacity onPress = {() => this.logOut()}>
          <View style={Css.myaccountpage_loginoutbtn_container}>
            <Text style={Css.myaacountpage_loginoutbtn_text}>Logout</Text>
          </View>
        </TouchableOpacity>
      );
    }else{
      return(
        <TouchableOpacity onPress = {() => this.props.navigation.navigate('login')}>
          <View style={Css.myaccountpage_loginoutbtn_container}>
            <Text style={Css.myaacountpage_loginoutbtn_text}>Login</Text>
          </View>
        </TouchableOpacity>
      );
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
}

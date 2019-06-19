import React, { Component,PureComponent } from 'react';
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
	Dimensions,
	AsyncStorage
} from 'react-native';

import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import ImageSlider from 'react-native-image-slider';
import { responsiveHeight, responsiveWidth} from 'react-native-responsive-dimensions';
import Api from '../utils/WooCommerce/Api';
import Css,{companyname} from '../Css/main';
import Item from './item';

export default class OrderConfirm extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    return(
      <View style ={Css.container}>
        <View style={Css.header_main}>
          <View style = {Css.header_menu_view}>
          <TouchableOpacity onPress={() => {
            if(this.props.userData != null){
              if(!this.props.navigation.state.params.userData.Customer){
                this.props.navigation.navigate('home',{userData:{Customer:''}});
              }else{
                this.props.navigation.navigate('home', {userData:{Customer:this.props.navigation.state.params.userData.Customer}});
              }
            }else{
              this.props.navigation.navigate('home');
            }
            }}>
            <Ionicons name="md-arrow-back" size={25} color="black" />
          </TouchableOpacity>
          </View>
          <View style = {Css.header_main_text_view}>
            <Text style = {Css.header_main_Heading_Text} >{companyname}</Text>
          </View>
        </View>
        <View style = {{backgroundColor:'white',flex:1,justifyContent:'center',alignItems:'center'}}>
          <View style ={{backgroundColor:'#3d9857',height:responsiveHeight(10), width:responsiveWidth(16.5),borderRadius:40,justifyContent:'center', alignItems:'center'}}>
            <Image source ={require('../Images/checked-symbol.png')} style = {{width:responsiveWidth(9.5), height: responsiveHeight(5)}}/>
          </View>
          <View style ={{marginTop:10, flexDirection:'column'}}>
            <Text style ={{fontSize:18, color:'#212121', fontFamily:'Montserrat-Bold',textAlign:'center'}}>Your Order Is Confirmed</Text>
            <Text style = {{fontSize:12,textAlign:'center'}}>Thank you for shopping with Ruchi Farm!</Text>
            <Text style = {{fontSize:12,textAlign:'center'}}>We have recevied your order and are processing it.</Text>
            <View style ={{flexDirection:'row',justifyContent:'center'}}>
              <Text style = {{fontSize:15,textAlign:'center', color:"#212121"}}>Order ID: </Text>
              <Text style = {{fontSize:15,textAlign:'center', color:'#3d9857'}}>{this.props.navigation.state.params.userData.Order.id}</Text>
            </View>
            <View style ={{marginTop:10,alignItems:'center'}}>
              <TouchableOpacity onPress = {() => {
                if(this.props.userData != null){
                  if(!this.props.navigation.state.params.userData.Customer){
                    this.props.navigation.navigate('products',{userData:{Customer:''}});
                  }else{
                    this.props.navigation.navigate('products', {userData:{Customer:this.props.navigation.state.params.userData.Customer}});
                  }
                }else{
                  this.props.navigation.navigate('products',{userData:{Customer:''}});
                }
              }}>
                <View style ={{height:responsiveHeight(5.2),width:responsiveWidth(40),borderWidth:1,justifyContent:'center',alignItems:'center'}}>
                  <Text style ={{fontSize:12,color:'#212121'}}>CONTINUE SHOPPING</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

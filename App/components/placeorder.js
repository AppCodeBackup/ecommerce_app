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
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import ImageSlider from 'react-native-image-slider';
import { responsiveHeight, responsiveWidth} from 'react-native-responsive-dimensions';
import Api from '../utils/WooCommerce/Api';
import Css,{companyname} from '../Css/main';
import Item from './item';
import * as Progress from 'react-native-progress';
//import RazorpayCheckout from 'react-native-razorpay';
import Url from '../utils/WooCommerce/config2';
import PayPal from 'react-native-paypal-wrapper';

const pro =[];
const total = '';
const prod ='';
const lineItem =[];
export default class MyOrder extends Component {
      constructor(props){
        super(props);
        this.product = [];
        this.customer = '';
        this.state = {
          dataSource: new ListView.DataSource({
            rowHasChanged: (row1, row2) => true,
          }),
          quantity:0,
          amount:0,
          amountChange:0,
          totalva:0,
          item:0,
          proarr:['',''],
          paymentid:'',
        }
}

componentWillMount(){
      //PayPal.initialize(PayPal.SANDBOX, "AS7TCBWu571ft9zW5CTCvhfNpdLpsAWapdpR2g4U4EdyDdGeoY3pvcjgVUGmRyP0EwvKTkPjWgS8bqKL");  
      this.getCustomer();
      this.createLineItem();
      this.setState({
        totalva: this.props.navigation.state.params.userData.Totalamout
      })
      console.log('amount'+JSON.stringify(this.props.navigation.state.params.userData.Totalamout))
}


  getCustomer(){
  AsyncStorage.getItem('CustomerDetails').then((value) => {
    if(value == null){

    }else{

      customer = JSON.parse(value);
       console.log('Customer in placeorder' + JSON.stringify(customer))
    }
  }).done();
}


  createLineItem(){
    lineItem =[];
    AsyncStorage.getItem('cart').then((value) => {
      if(value == null){
        return this.renderNot();
        product = null;
      }else{
        console.log(JSON.parse(value));
          product = JSON.parse(value);
          pro = Object.keys(product).map(function(key) {
            return(product[key])
          });
          Object.keys(product).map(function(key) {
            prod = {
             'product_id': product[key].node.id,
             'quantity': product[key].quantity,
           };
           //alert(JSON.stringify(prod));
            lineItem.push(prod);
            console.log("Line item"+JSON.stringify(lineItem))
          });
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
              if(!this.props.navigation.state.params.userData.Customer){
                this.props.navigation.navigate('cart',{userData:''});
              }else{
                this.props.navigation.navigate('cart', {userData:{Customer:this.props.navigation.state.params.userData.Customer}});
              }
            }else{
              this.props.navigation.navigate('cart');
            }
            }}>
            <Ionicons name="md-arrow-back" size={25} color="black" />
          </TouchableOpacity>
          </View>
          <View style = {Css.header_main_text_view}>
	          <Text style = {Css.header_main_Heading_Text} >{companyname}</Text>
					</View>
        </View>
        <View>
          <View style={{marginTop:100,marginLeft:20,marginRight:20,height:responsiveHeight(40),backgroundColor: '#cccccc',alignItems:"center",borderRadius:8}}>
            <View style={{marginTop:20,alignItems:"center",justifyContent:"center",width:responsiveWidth(60)}}>
              <Text style={{color:'black',fontFamily:'Montserrat-Bold',fontSize: 20, fontWeight: 'bold'}}>Select Payment Method</Text>
            </View>
             
              <View style ={{ alignItems:'center',marginTop:30}}>
                <TouchableOpacity onPress ={() => this.payWithPaypal()} >
                  <View style = {{width:responsiveWidth(58),height:responsiveHeight(6.5),backgroundColor:"#3d9857",borderRadius:3,alignItems:'center',justifyContent:'center'}}>
                    <Text style ={{color:'white',fontFamily:"Montserrat-Regular"}}>Paypal</Text>
                  </View>
                </TouchableOpacity>
              </View>
          </View>
        </View>
      </View>
    );
  }

  payWithPaypal(){
    if(this.product == null){
            alert("Go to Shopping");
    }else{
      var total = (this.state.totalva).toString();
      PayPal.initialize(PayPal.PRODUCTION, "Pa0SleD5HuyHtkNJqj5BESyd1ya-y2h2AWZGrSw6jPl5PgitmY9Xajy_1ye");
        PayPal.pay({
          price: total,
          currency: 'USD',
          description: 'Credits towards VW Themes',
        }).then(confirm => {
            console.log("Payment Response:- "+ JSON.stringify(confirm));
            if(confirm.response.state === "approved"){
              this.createOrder(confirm);
            }
          }).catch(error => console.log(error));
  }
}


  createOrder(payment){
    //alert(customer[0].id);
    console.log("IN Create Order");
    fetch(Url.main+'orders/'+Url.end,{
      method:"POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "payment_method" : "paypal",
        "payment_method_title": "PayPal",
        "set_paid": true,
        "transaction_id": payment.response.id,
        "customer_id": customer.id,
        "billing": {
          "first_name": customer.billing.first_name,
          "last_name": customer.billing.last_name,
          "address_1": customer.billing.address_1,
          "city": customer.billing.city,
          "state": customer.billing.state,
          "postcode": customer.billing.postcode,
          "country": customer.billing.country,
          "email": customer.billing.email,
          "phone": customer.billing.phone,
        },
        "shipping": {
          "first_name": customer.shipping.first_name,
          "last_name": customer.shipping.last_name,
          "address_1": customer.shipping.address_1,
          "city": customer.shipping.city,
          "state": customer.shipping.state,
          "postcode": customer.shipping.postcode,
          "country": customer.shipping.country,
        },
        "line_items": lineItem,
      })
    }).then((response) => response.json())
      .then((responseData) => {
        console.log("MY Order Created:- "+JSON.stringify(responseData));
        if(responseData.code){
          alert("order didn't placed")
        }else{
          AsyncStorage.removeItem('cart');
          lineItem =[];
          if(this.props.navigation.state.params.userData != null){
            if(!this.props.navigation.state.params.userData.Customer){
              this.props.navigation.navigate('orderconfirm', {userData:{Order: responseData}});
            }else{
              this.props.navigation.navigate('orderconfirm', {userData:{Customer:this.props.navigation.state.params.userData.Customer,Order: responseData}});
            }
          }else{
            this.props.navigation.navigate('orderconfirm',{userData:{Order: responseData}});
          }
        }
      }).done();
  }

// payme(){
//    if(this.product == null){
//             alert("Go to Shopping");
//     }
//     else{
//             var total = (this.state.totalva).toString()*100;
//             var options = {
//             description: 'Credits towards Ruchi Product',
//             image: 'https://i.imgur.com/3g7nmJC.png',
//             currency: 'INR',
//             key: 'rzp_test_vmrGvFkGKLVdZu',
//             amount: total,
//              external: {
//             wallets: ['paytm']
//           },
//             name: 'Ruchi Oyster',
//             theme: {color: '#212121'},
//           }
//           RazorpayCheckout.open(options).then((data) => {
//           // handle success
//           //alert("Success:"+JSON.stringify(data.details.razorpay_payment_id));
//           this.setState({
//         paymentid: JSON.stringify(data.details.razorpay_payment_id)
//       })
//           this.createOrder();
//         }).catch((error) => {
//           // handle failure
//           alert("Error:" +JSON.stringify(error));
//         });
//         RazorpayCheckout.onExternalWalletSelection(data => {
//           alert("External Wallet Selected: "+JSON.stringify(data));
//             this.setState({
//         paymentid: JSON.stringify(data.details.razorpay_payment_id)
//       })
//           this.createOrder();
//         });
//       }
// }

 // <View style ={{ alignItems:'center',marginTop:30}}>
 //                <TouchableOpacity >
 //                  <View style = {{width:responsiveWidth(58),height:responsiveHeight(6.5),backgroundColor:"#3d9857",borderRadius:3,alignItems:'center',justifyContent:'center'}}>
 //                    <Text style ={{color:'white',fontFamily:"Montserrat-Regular"}}>COD</Text>
 //                  </View>
 //                </TouchableOpacity >
 //              </View>
 
  //   createOrder(payment){
  //     alert("this.state.paymentid");
  //   fetch(Url.main+'orders/'+Url.end,{
  //     method:"POST",
  //     headers: {
  //       'Accept': 'application/json',
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({
  //       "payment_method" : "RazorPay",
  //       "payment_method_title": "RazorPay",
  //       "set_paid": true,
  //       "transaction_id": "this.state.paymentid",
  //       "customer_id": customer.id,
  //       "billing": {
  //         "first_name": customer.billing.first_name,
  //         "last_name": customer.billing.last_name,
  //         "address_1": customer.billing.address_1,
  //         "city": customer.billing.city,
  //         "state": customer.billing.state,
  //         "postcode": customer.billing.postcode,
  //         "country": customer.billing.country,
  //         "email": customer.billing.email,
  //         "phone": customer.billing.phone,
  //       },
  //       "shipping": {
  //         "first_name": customer.shipping.first_name,
  //         "last_name": customer.shipping.last_name,
  //         "address_1": customer.shipping.address_1,
  //         "city": customer.shipping.city,
  //         "state": customer.shipping.state,
  //         "postcode": customer.shipping.postcode,
  //         "country": customer.shipping.country,
  //       },
  //       "line_items": lineItem,
  //     })
  //   }).then((response) => response.json())
  //     .then((responseData) => {
  //       //alert(JSON.stringify(responseData));
  //       console.log("MY Order Created:- "+JSON.stringify(responseData));
  //       if(responseData.code){
  //         alert("order didn't placed")
  //       }else{
  //         AsyncStorage.removeItem('cart');
  //         lineItem =[];
  //         if(this.props.navigation.state.params.userData != null){
  //           if(!this.props.navigation.state.params.userData.Customer){
  //             this.props.navigation.navigate('orderconfirm', {userData:{Order: responseData}});
  //           }else{
  //             this.props.navigation.navigate('orderconfirm', {userData:{Customer:this.props.navigation.state.params.userData.Customer,Order: responseData}});
  //           }
  //         }else{
  //           this.props.navigation.navigate('orderconfirm',{userData:{Order: responseData}});
  //         }
  //       }
  //     }).done();
  // }
}

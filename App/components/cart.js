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
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import ImageSlider from 'react-native-image-slider';
import { responsiveHeight, responsiveWidth} from 'react-native-responsive-dimensions';
import Api from '../utils/WooCommerce/Api';
import Css, {companyname} from '../Css/main';
import Item from './item';
import PayPal from 'react-native-paypal-wrapper';
import Url from '../utils/WooCommerce/config2';
import { StackNavigator, navigation, DrawerNavigator } from 'react-navigation';

const pro =[];
const total = '';
const prod ='';
const lineItem =[];

export default class Cart extends Component {
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
	}
}

componentWillMount(){
  this.getProducts();
	this.getCustomer();
}

getCustomer(){
	AsyncStorage.getItem('CustomerDetails').then((value) => {
		if(value == null){

		}else{
			customer = JSON.parse(value);
		}
	}).done();
}

getProducts(){
	AsyncStorage.getItem('cart').then((value) => {
		if(value == null){
			return this.renderNot();
			product = null;
		}else{
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
				});
				this.setState({
					proarr: pro,
					dataSource: this.state.dataSource.cloneWithRows(pro),
				});
				this.rendertotal(pro);

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
					});
				}
			}).done();
	}

  render(){
    return(
			<View style ={[Css.container,{flexDirection:'column'}]}>
	       <View style={Css.header_main} >
						<View style = {Css.header_menu_view}>
				          <TouchableOpacity onPress={() => {
										if(this.props.navigation.state.params.userData != null){
											if(!this.props.navigation.state.params.userData.Customer){
												this.props.navigation.navigate('products',{userData:''});
											}else{
												this.props.navigation.navigate('products', {userData:{Customer:this.props.navigation.state.params.userData.Customer}});
											}
										}else{
											this.props.navigation.navigate('products');
										}
									}}>
				            <Ionicons name="md-arrow-back" size={25} style={Css.header_icon_color} />
				          </TouchableOpacity>
						</View>
						<View style = {Css.cartpage_header_main_text_view}>
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
								<MaterialIcons name ='search' size={25} style={Css.header_icon_color} />
							</View>
						</TouchableOpacity>
						<View style ={Css.cartpage_header_cart_view}>
		          <TouchableOpacity onPress={() => this.clearAllcart()}>
		            <Image source = {require('../Images/shopping-cart-cancel-button.png')} style ={Css.cartpage_cancel_cart_image} />
		          </TouchableOpacity>
						</View>
		     </View>
				 <View style ={Css.cartpage_total_main_container}>
								<View style ={Css.cartpage_total_container}>
									<Image source = {require('../Images/empty-shopping-cart.png')} style ={Css.cartpage_total_cart_image} />
									<Text style ={Css.cartpage_total_text}> {this.state.item} items Total -</Text>
									<FontAwesome name ={Url.Currency} color ="#3d9857" size ={15} style={{paddingLeft:10}}/>
									<Text style ={Css.cartpage_total_amt_text}> {this.state.totalva} </Text>
								</View>
								<View style = {Css.cartpage_black_container}>
									<Text style ={Css.cartpage_shopping_cart_text}> SHOPPING CART </Text>
								</View>
				 </View>
				 <ListView
							    dataSource = {this.state.dataSource}
							    renderRow = {this.renderProduct.bind(this)}
				 />
				 <TouchableOpacity onPress ={() => this.payme()}>
								<View style = {Css.cartpage_checkoutbtn_container}>
									<Text style ={Css.cartpage_checkoutbtn_text}>CHECKOUT</Text>
								</View>
				 </TouchableOpacity>
			</View>
    );
  }

	payme(){
		if(this.props.navigation.state.params.userData != null){
			if(!this.props.navigation.state.params.userData.Customer){
				this.props.navigation.navigate('login');
			}else{
				if(this.product == null){
					alert("Go to Shopping");
				}else{
						var total = (this.state.totalva).toString();
					PayPal.initialize(PayPal.SANDBOX, "AY3v-_ZnHxDDOgbbsESgb2afuK6UQKsKh0h9c4lYkrsuWUcgXHABLsUE2PpGSFrq1VIelQJ33kbLAOkk");
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
		}else{
				this.props.navigation.navigate('login');
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
				"customer_id": this.props.navigation.state.params.userData.Customer.id,
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

	renderProduct(product){
		return(
			<View style = {Css.cartpage_product_main_container}>
				<View style ={Css.cartpage_product_container_row}>
					<View style={Css.cartpage_product_image_container}>
						<Image source ={{uri: product.node.images[0].src}} style ={Css.cartpage_product_image} />
					</View>
					<View style = {Css.cartpage_product_detail_container}>
						<View style={Css.cartpage_product_name_container}>
							<View style ={Css.cartpage_product_name_contains}>
							<Text style ={Css.cartpage_product_name_text}>{product.node.name}</Text>
							</View>
							<View style={Css.cartpage_delete_icon_container}>
								<TouchableOpacity onPress ={() => this.deleteItem(product)}>
									<Image source ={require("../Images/rubbish-bin.png")} style={Css.cartpage_delete_icon} />
								</TouchableOpacity>
							</View>
						</View>
						<Text style ={Css.cartpage_inStock_text}>{'\n'}In Stock !</Text>
						<View style={Css.cartpage_product_amt_container}>
							<View style={{width:responsiveWidth(25),flexDirection:'row',marginTop:5,alignItems:'center'}}>
								<FontAwesome name ={Url.Currency} color ="#000" size ={20} style={{paddingLeft:10}}/>
								<Text style ={Css.cartpage_product_amt_text}> {product.quantity * product.node.price}</Text>
							</View>
								<View style ={Css.cartpage_add_less_container}>
									<TouchableOpacity onPress ={() => this.minusValue(product)}>
										<View style = {Css.cartpage_less_container}>
											<Entypo name = 'minus' size ={25} color = 'black' style={{paddingTop:2}} />
										</View>
									</TouchableOpacity>
								<View style = {Css.cartpage_quantity_Container}>
									<Text style={Css.cartpage_quantity_Text}>{product.quantity}</Text>
								</View>
								<TouchableOpacity onPress ={() => this.addValue(product)}>
								<View style = {Css.cartpage_add_container}>
									<Ionicons name = 'md-add' size ={25} color = 'black' style={{paddingTop:2}} />
								</View>
								</TouchableOpacity>
							</View>
						</View>
					</View>
				</View>
			</View>
		);
	}

	clearAllcart(){
		AsyncStorage.removeItem("cart");
		AsyncStorage.setItem("cart", JSON.stringify({}));
		AsyncStorage.getItem("cart").then((value) => {
			console.log("In AsyncStorage");
			if(value == null){
				console.log("In Value == null" );
				this.renderNot();
				var tmppro1 = JSON.parse(value);
				this.setState({
					dataSource: this.state.dataSource.cloneWithRows({}),
				});
				this.rendertotal(tmppro1);
			}
		}).done();
	}

	renderNot() {
		return (
			<View style={{flex: 1}}>
				<Text style={{fontFamily: 'Montserrat-Bold', textAlign:'center', color: 'black'}}>No Item in cart</Text>
			</View>
		);
	}

	rendertotal(product){
		if(product == ''){
			this.setState({
				item: 0,
				totalva: 0,
			})
		}
		if(product == null){
			this.setState({
				item: 0,
				totalva: 0,
			})
		}else{
				var add=0;
				for(var i = 0; i< product.length; i++){
					var quantity = product[i].quantity;
					var price = product[i].node.price;
					total = quantity*price;
					add=add+total;
					this.setState({
						totalva: add
					});
				}
				this.setState({
					item: product.length,
				})
				console.log("totalamount"+JSON.stringify(this.state.totalva))
			}
	}

	getAmount(product){
		this.setState({
			amount: product.node.price,
			quantity: product.quantity,
			amountChange: this.state.amount * this.state.quantity,
		})
	}

	deleteItem(product){
		var tmppro = {};
		AsyncStorage.getItem("cart").then((value) => {
			if(value != null)
			{
			tmppro = JSON.parse(value);
			}
			if(tmppro!=null && tmppro[product.node.name]){
				delete tmppro[product.node.name];
				 AsyncStorage.removeItem("cart");
				 AsyncStorage.setItem("cart", JSON.stringify(tmppro));
			}
		}).done(() => {AsyncStorage.getItem("cart").then((value) => {
				if(value == ''){
					var tmppro1 = JSON.parse(value);
					this.setState({
						dataSource: this.state.dataSource.cloneWithRows({}),
					});
					this.rendertotal(value);
					this.renderNot();
				}else{
					var tmpproduct = JSON.parse(value);
					var tmppro = Object.keys(tmpproduct).map(function(key) {
						return(tmpproduct[key])
					});
					this.setState({
						dataSource: this.state.dataSource.cloneWithRows(tmppro),
					});
					this.rendertotal(tmppro);
				}
			}).done()});
	}

	addValue(product){
		var tmppro = {};
		AsyncStorage.getItem("cart").then((value) => {
			if(value != null)
			{
			tmppro = JSON.parse(value);
			}
			if(tmppro!=null && tmppro[product.node.name]){
				var tmpdic = tmppro[product.node.name];
				tmpdic.quantity = tmpdic.quantity + 1;
				tmppro[product.node.name] = tmpdic;
				AsyncStorage.mergeItem("cart", JSON.stringify(tmppro));
			}
		}).done(()=> {AsyncStorage.getItem("cart").then((value) => {
			var tmpproduct = JSON.parse(value);
			var tmppro = Object.keys(tmpproduct).map(function(key) {
				return(tmpproduct[key])
			});
			this.setState({
				dataSource: this.state.dataSource.cloneWithRows(tmppro),
			});
			this.rendertotal(tmppro);
			this.createLineItem();
		}).done()});
	}

	minusValue(product){
		var tmppro = {};
		AsyncStorage.getItem("cart").then((value) => {
			if(value != null)
			{
			tmppro = JSON.parse(value);
			}
			if(tmppro != null && tmppro[product.node.name]){
				var tmpdic = tmppro[product.node.name];
				if(tmpdic.quantity === 1){
					tmpdic.quantity = 1;
				}else{
					tmpdic.quantity = tmpdic.quantity - 1;
				}
				tmppro[product.node.name] = tmpdic;
				AsyncStorage.mergeItem("cart", JSON.stringify(tmppro));
			}
		}).done(()=> {AsyncStorage.getItem("cart").then((value) => {
			var tmpproduct = JSON.parse(value);
			var tmppro = Object.keys(tmpproduct).map(function(key) {
				return(tmpproduct[key])
			});
			this.setState({
				dataSource: this.state.dataSource.cloneWithRows(tmppro),
			});
			this.rendertotal(tmppro);
			this.createLineItem();
		}).done()});
	}
}

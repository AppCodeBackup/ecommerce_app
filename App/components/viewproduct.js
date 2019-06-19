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
	AsyncStorage,
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
import Css,{companyname} from '../Css/main';
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';
import TabView from './tabView';
import Item from './item';
import Curr from '../utils/WooCommerce/config2';
import { StackNavigator, navigation, DrawerNavigator } from 'react-navigation';

export default class ViewProduct extends Component {
  constructor(props) {
    super(props);
		let tabPro = this.props.navigation.state.params.userData.product;
		this.state = {
			index: 1,
			sliImage:['',''],
			position: 1,
			interval: null,
			quantity:1,
			amountChange:0,
			cartcount:0,
		}
  }

	componentWillMount(){
		var amount = this.props.navigation.state.params.userData.product.price;
		this.setState({
			amountChange: this.state.quantity* amount,
		});
		this.getProduct();
		this.getNumberCart();

	}

	getProduct(){
		var product = this.props.navigation.state.params.userData.product.images;
		var SliImage = product.map(function(product) {
			return(product.src);
		});
		console.log("images of the view:- "+SliImage);
		this.setState({
			sliImage: SliImage,
		});
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
				<View style={Css.header_main} >
					<View style = {Css.header_menu_view}>
						<TouchableOpacity onPress={() => {
							if(this.props.navigation.state.params.userData != null){
								if(!this.props.navigation.state.params.userData.Customer){
									if(this.props.navigation.state.params.userData.flag == 'all'){
											this.props.navigation.navigate('products',{userData:''});
									}else if(this.props.navigation.state.params.userData.flag == 'search'){
											this.props.navigation.navigate('search',{userData:''});
									}else{
											this.props.navigation.navigate('categorizedproducts', {userData:{category: this.props.navigation.state.params.userData.category}});
									}
									
								}else{
									if(this.props.navigation.state.params.userData.flag == 'all'){
											this.props.navigation.navigate('products', {userData:{Customer:this.props.navigation.state.params.userData.Customer}});
									}else if(this.props.navigation.state.params.userData.flag == 'search'){
											this.props.navigation.navigate('search', {userData:{Customer:this.props.navigation.state.params.userData.Customer}});
									}else{
											this.props.navigation.navigate('categorizedproducts', {userData:{category: this.props.navigation.state.params.userData.category}});
									}
									//this.props.navigation.navigate('products', {userData:{Customer:this.props.navigation.state.params.userData.Customer}});
								}
							}else{
								this.props.navigation.navigate('products');
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
								if(!this.props.navigation.state.params.userData.Customer){
									this.props.navigation.navigate('cart',{userData:''});
								}else{
									this.props.navigation.navigate('cart',{userData:{Customer:this.props.navigation.state.params.userData.Customer}});
								}
							}else{
								this.props.navigation.navigate('cart');
							}
						}}>
							<MaterialCommunityIcons name="cart" size={30} style={Css.header_icon_color} />
						</TouchableOpacity>
						<Text style ={Css.cart_count_text}>{this.state.cartcount}</Text>
					</View>
			</View>
				<View style = {Css.viewproductpage_details_view}>
					<View style={Css.viewproductpage_details_container}>
						<Text style ={Css.viewproductpage_name_text}>{this.props.navigation.state.params.userData.product.name}</Text>
						<Text style ={Css.viewproductpage_stock_text}>In Stock!</Text>
						<View style ={Css.viewproductpage_price_container}>
						<FontAwesome name ={Curr.Currency} color ="#000" size ={20} style={Css.viewproductpage_amt_sign}/>
					  <Text style ={Css.viewproductpage_amt_text}> {this.state.amountChange} </Text>
						</View>
					</View>
					<View style = {Css.viewproductpage_side_main_container}>
						<View style={Css.viewproductpage_addless_addtocart_container}>
						</View>
						<View style ={Css.viewproductpage_add_less_container}>
							<TouchableOpacity onPress ={() => this.minusValue()}>
								<View style = {Css.viewproductpage_less_container}>
									<Entypo name = 'minus' size ={25} color = 'black' style={{paddingTop:2}} />
								</View>
							</TouchableOpacity>
							<View style = {Css.viewproductpage_quantity_Container}>
								<Text style={Css.viewproductpage_quantity_Text}>{this.state.quantity}</Text>
							</View>
							<TouchableOpacity onPress ={() => this.addValue()}>
							<View style = {Css.viewproductpage_add_container}>
								<Ionicons name = 'md-add' size ={25} color = 'black' style={{paddingTop:2}} />
							</View>
							</TouchableOpacity>
						</View>
						<View style={Css.viewproductpage_addtocart_container}>
							<TouchableOpacity onPress = {() => this.addtocart(this.props.navigation.state.params.userData.product)}>
								<Text style={Css.viewproductpage_addtocart_Text}>ADD TO CART</Text>
							</TouchableOpacity>
						</View>
					</View>
				</View>
				<ScrollView>
				<View style ={Css.viewproductpage_imageslider}>
					<ImageSlider
						images = {this.state.sliImage}
						position={this.state.position}
						onPositionChanged={position => this.setState({position})}
						style = {{height: responsiveHeight(30)}}
					/>
				</View>
				<View style = {Css.viewproductpage_tab_view}>
					<TabView value = {this.props.navigation.state.params.userData.product}/>
				</View>
				</ScrollView>
      </View>
    );
  }

	addValue(){
		this.setState({
			quantity: this.state.quantity + 1,
		},function(){
			this.multiplyValue();
		});

	}

	multiplyValue(){
		var amount = this.props.navigation.state.params.userData.product.price;
		this.setState({
			amountChange: this.state.quantity * amount,
		});
	}

	minusValue(){
		this.setState({
			quantity: this.state.quantity - 1,
		},function(){
			this.multiplyValue();
		});
		if(this.state.quantity === 1){
			this.setState({
				quantity: 1,
			});
		}
	}

	addtocart(item){
		var pro = new Item();
		pro.node = item;
		var tmpdic = {};
		AsyncStorage.getItem("cart").then((value) => {
			if(value != null)
			{
				tmpdic = JSON.parse(value);
			}
			if(tmpdic!=null && tmpdic[pro.node.name])
			{
				console.log("temp dict had data");
				var tmpQuantity = tmpdic[pro.node.name].quantity;
				console.log("tmp quantity:- "+ tmpQuantity);
				pro.quantity = tmpQuantity + this.state.quantity;
				tmpdic[pro.node.name] = pro;
				AsyncStorage.mergeItem("cart", JSON.stringify(tmpdic));
			}else {
				if(tmpdic == null)
				{
						tmpdic = {};
				}
				console.log("temp dict didn't had data");
				pro.quantity = this.state.quantity;
				tmpdic[pro.node.name] = pro;
				AsyncStorage.setItem("cart",JSON.stringify(tmpdic));
			}
			this.getNumberCart();
		}).done();
			console.log("After set item to cart:- " +JSON.stringify(tmpdic));

	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

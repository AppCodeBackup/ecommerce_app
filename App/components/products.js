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
	Platform
} from 'react-native';

import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ImageSlider from 'react-native-image-slider';
import { responsiveHeight, responsiveWidth} from 'react-native-responsive-dimensions';
import Api from '../utils/WooCommerce/Api';
import Css,{companyname} from '../Css/main';
import * as Progress from 'react-native-progress';
import Item from './item';
import TabView from './tabView';
import Curr from '../utils/WooCommerce/config2';

const empty = {};
const menu=Platform.OS==="ios" ? 30 : 25;
export default class Product extends Component {
	constructor(props){
		super(props);
		this.data = [];
		this.cartDictionary = [];
		this.currency ='';
		//AsyncStorage.setItem("cart", JSON.stringify({}));
		this.state = {
			dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => true,
      }),
			page: 1,
			limit: 100,
			isOnline: true,
			isLoading: false,
			finish: false,
			showLoader: true,
			myCount:6,
			cartDic:{},
			cartcount:0,
			Search:'',
			currency:'',
		};
	}

	componentWillMount() {
		 this.fetchData();
		 this.getNumberCart();
		 //alert(Curr.Currency)rr
		 //console.log('userdata in productpage'+JSON.stringify(this.props.navigation.state.params.userData.Customer))
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

	renderLoader() {
			if(this.state.myCount == 6){
						if(this.state.page == 1){
								return(
						      this.state.showLoader?<View style={{justifyContent: 'center',alignItems:'center'}}><Progress.CircleSnail color={['red', 'green', 'blue']} style = {{marginLeft:165,marginTop:200}} /></View>:null
						    );
						}else{
						    return(
						      this.state.showLoader?<View style={{justifyContent: 'center',alignItems:'center'}}><Progress.CircleSnail color={['red', 'green', 'blue']} style = {{marginLeft:165}} /></View>:null
						    );
					}
		}
	}

  hideLoader() {
    setTimeout (() => {
      this.setState({showLoader: false})
    }, 1);
  }

	getDataSource(products) {
		return this.state.dataSource.cloneWithRows(products);
	}

	fetchData() {
		//alert(this.currency)
	 var self = this;
	 if (this.state.finish || !this.state.isOnline) {

		 return null;
	 }
	 self.setState({isLoading: true});

	 Api.get('products', {
		 per_page: this.state.limit,
		 page: this.state.page
	 })
		 .then(function (data) {
			 console.log("fetch data success: "+JSON.stringify(data));
			 self.data = data;
			 self.setState({
				 page: self.state.page + 1,
				 finish: data.length < self.state.limit,
				 dataSource: self.getDataSource(self.data),
				 isLoading: false,
				 myCount: data.length,
			 });
		 })
		 console.log("Count This Product: "+ this.state.myCount);
		 console.log("count sssssssssss: "+ self.data.length);
	 }

	

  render(){
    return(
      <View  style ={Css.container}>
				<View style={Css.header_main} >
					<TouchableOpacity onPress={() => this.props.navigation.navigate('DrawerToggle')}>
						<View style = {Css.header_menu_view}>
							<Entypo name="menu" size={menu} color="black"  style = {Css.menu_icon_style}/>
						</View>
					</TouchableOpacity>
					<View style = {Css.header_main_text_view}>
						<Text style = {Css.header_main_Heading_Text} >{companyname}</Text>
					</View>
					<TouchableOpacity onPress={() => {
						if(this.props.navigation.state.params.userData != null){
							this.props.navigation.navigate('search', {userData:{Customer:this.props.navigation.state.params.userData.Customer}});
						}else{
							console.log('userdata is null')
							this.props.navigation.navigate('search',{userData:''});
						}
					}}>
						<View style ={Css.header_search_view}>
							<MaterialIcons name ='search' size={27} style={Css.header_icon_color} />
						</View>
					</TouchableOpacity>
					<TouchableOpacity onPress={() => {
						if(this.props.navigation.state.params.userData != null){
							this.props.navigation.navigate('cart', {userData:{Customer:this.props.navigation.state.params.userData.Customer}});
						}else{
							this.props.navigation.navigate('cart');
						}
					}}>
						<View style ={Css.header_cart_view}>
							<MaterialCommunityIcons name="cart" size={30} style={Css.header_icon_color} />
							<Text style ={Css.cart_count_text}>{this.state.cartcount}</Text>
						</View>
					</TouchableOpacity>
				</View>
				<ListView
						onEndReached={this.onEndReached.bind(this)}
						dataSource = {this.state.dataSource}
						renderRow = {this.renderProducts.bind(this)}
						contentContainerStyle = {{flexDirection: 'row',flexWrap: 'wrap', }}
						renderFooter={(event) => this.renderLoader(event)}
				/>
      </View>
    );
  }


	onEndReached() {
		this.fetchData();
	}

	renderLoadingView() {
		return (
			<View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
				<Progress.CircleSnail color={['red', 'green', 'blue']} />
			</View>
		);
	}

	

	renderProducts(products){
		try{
			return(
				<View style={Css.categorypage_category_container}>
					<View style={Css.categorypage_category_subContainer}>
					<TouchableOpacity onPress={() => this.pressButton(products)}>
						<View>
							<Image source = {{uri: products.images[0].src}} style = {Css.categorypage_category_image_style} />
						</View>
						<View style ={Css.categorizedproduct_product_details_container}>
							<Text numberOfLines={1} style={Css.categorypage_category_name_style}>{products.name}</Text>
								<View style ={Css.categorizedproduct_product_pricedetails_container}>
									<View style ={Css.categorizedproduct_product_price_icon_container}>
										<FontAwesome name ={Curr.Currency}  size ={15} style={Css.categorizedproduct_product_currency_icon_style}/>
									<Text numberOfLines={1} style={Css.categorizedproduct_product_price_style}> {products.price}</Text>
									</View>
									<View style ={Css.categorizedproduct_product_carticon_container}>
									<TouchableOpacity onPress={() => this.addToCart(products)}>
									<MaterialCommunityIcons name = 'cart-plus' size = {25} color = "black" />
									</TouchableOpacity>
									</View>
								</View>
						</View>
						</TouchableOpacity>
					</View>
				</View>
			);
		}catch(err){
			alert(err);
		}

	}

	pressButton(products){
			if(this.props.navigation.state.params.userData != null){
				this.props.navigation.navigate('viewproduct', {userData:{Customer:this.props.navigation.state.params.userData.Customer, product: products, flag: 'all', category: ''}});
			}else{
				this.props.navigation.navigate('viewproduct', {userData: {Customer:'',product: products, flag: 'all', category: ''}});
			}
	}
	

	addToCart(products){
		console.log("Add to cart called");
		var product = new Item();
		product.node = products;

		var tmpCartDictionary ={};
		var tmpCartDictionaryImmutable = {}
		AsyncStorage.getItem("cart").then((value) => {
			if(value != null)
			{
				tmpCartDictionary = JSON.parse(value);
			}
				if(tmpCartDictionary!=null && tmpCartDictionary[product.node.name])
				{
					console.log("temp dict had data");
					var tmpQuantity = tmpCartDictionary[product.node.name].quantity;
					console.log("tmp quantity:- "+ tmpQuantity);
					product.quantity = tmpQuantity + 1;
					tmpCartDictionary[product.node.name] = product;
					AsyncStorage.mergeItem("cart", JSON.stringify(tmpCartDictionary));
				}else {
					if(tmpCartDictionary ==null)
					{
							tmpCartDictionary = {};
					}

					console.log("temp dict didn't had data");
					product.quantity = 1;
					tmpCartDictionary[product.node.name] = product;
					AsyncStorage.setItem("cart",JSON.stringify(tmpCartDictionary));
			}
 		}).done(() => this.getNumberCart());
	 		console.log("After set item to cart:- " +JSON.stringify(tmpCartDictionary));
			console.log("After set item to cart:- " + JSON.stringify(tmpCartDictionary));

	}
}


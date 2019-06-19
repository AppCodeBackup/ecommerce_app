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
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ImageSlider from 'react-native-image-slider';
import { responsiveHeight, responsiveWidth} from 'react-native-responsive-dimensions';
import Api from '../utils/WooCommerce/Api';
import Css, {companyname} from '../Css/main';
import * as Progress from 'react-native-progress';
import Item from './item';
import TabView from './tabView';
import Curr from '../utils/WooCommerce/config2';
import { StackNavigator, navigation, DrawerNavigator } from 'react-navigation';

export default class Category extends Component {
	constructor(props){
		super(props);
		this.data = [];
		this.cartDictionary = [];
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
		};
	}

	componentWillMount() {
		 this.fetchData();
		 this.getNumberCart();
		// console.log(this.state.user)
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
	 var self = this;
	 if (this.state.finish || !this.state.isOnline) {

		 return;
	 }
	 self.setState({isLoading: true});

	 Api.get('products/categories', {
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
      <View style ={Css.container}>
				<View style={Css.header_main} >
					<View style = {Css.header_menu_view}>
						<TouchableOpacity onPress={() => this.props.navigation.navigate('DrawerToggle')}>
							<Entypo name="menu" size={25} style={Css.header_icon_color} />
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
		var image;
		if(products.image == null){
			image = 'http://emuzica.cc/templates/ANN4/dleimages/no_image.jpg';
		}else{
			image = products.image.src;
		}
		if(products.id == 134){
			return null;
		}else{
			return(
			<View style={Css.categorypage_category_container}>
				<View style={Css.categorypage_category_subContainer}>
				<TouchableOpacity onPress={() => this.pressButton(products)}>
					<View style ={Css.categorypage_category_image_container}>
						<Image source = {{uri: image}} style = {Css.categorypage_category_image_style} />
					</View>
					<View style ={Css.categorypage_category_name_container}>
						<Text numberOfLines={1} style={Css.categorypage_category_name_style}>{products.name}</Text>
					</View>
					</TouchableOpacity>
				</View>
			</View>
		);
		}
		
	}

	pressButton(products){
    if(this.props.navigation.state.params.userData != null){
      this.props.navigation.navigate('categorizedproducts', {userData:{Customer:this.props.navigation.state.params.userData.Customer, category: products}});
    }else{
      this.props.navigation.navigate('categorizedproducts', {userData:{category: products}});
    }
	}
}


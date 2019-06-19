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
	Platform
} from 'react-native';

import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import ImageSlider from 'react-native-image-slider';
import { responsiveHeight, responsiveWidth, responsiveFontSize} from 'react-native-responsive-dimensions';
import Api from '../utils/WooCommerce/Api';
import Css,{companyname} from '../Css/main';
import img from'../Images/advantage.png'
import img2 from'../Images/wordpressfeatures.png'
import img3 from'../Images/wordpressfeatures1.png'
//import img4 from'https://www.vwthemes.com/wp-content/uploads/2018/01/Mobile-Friendly-WordPress-Themes.jpg'
import Url from '../utils/WooCommerce/config2';
import { StackNavigator, navigation, DrawerNavigator } from 'react-navigation';

const Customer = [];
const images = [
      img,img2,img3,'https://www.vwthemes.com/wp-content/uploads/2018/01/Mobile-Friendly-WordPress-Themes.jpg'

    ];

const menu=Platform.OS==="ios" ? 30 : 25;

export default class Index extends Component {
	constructor(props) {
	        super(props);

	        this.state = {
	            position: 1,
	            interval: null,
							page: 1,
							limit: 10,
							isOnline: true,
							isLoading: false,
							finish: false,
							category: ['',''],
							cartcount:0,
							dataSource: new ListView.DataSource({
								rowHasChanged: (row1, row2) => row1 !== row2,
							}),
							cusId :null,
							cusUsername:null,
	        };
	    }

	    static navigationOptions = {
		header: false,
	}


	 componentWillMount() {
	 	
			 this.setState({interval: setInterval(() => {
					 this.setState({position: this.state.position === 3 ? 0 : this.state.position + 1});
			 }, 2000)});
			 this.fetchData();
			 this.setState({SliImage: ['','']});
			 this.getNumberCart();
			//  alert(JSON.stringify(this.props.userData.Customer[0].id))
			this.getData();
			
			// alert(this.props.userData.Customer.username)
	 }

	 getData(){
		 AsyncStorage.getItem("CustomerDetails").then((value) =>{
			 Customer = JSON.parse(value);
				 if(Customer != null){
					 this.setState({
					 cusId: Customer.id,
					 cusUsername: Customer.username,
				 })
			 }
		 }).done();
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

	 componentWillUnmount() {
			 clearInterval(this.state.interval);
	 }

	 fetchData() {
 		var self = this;
		var SliImage = [];
 		if (this.state.finish || !this.state.isOnline) {
 			return;
 		}
 		self.setState({isLoading: true});
		console.log(Api);
 		Api.get('products/categories', {
			per_page: this.state.limit,
 		})
 			.then(function (data) {
				console.log("Category Data"+JSON.stringify(data));
				console.log("Category count"+data.length)
 				console.log(data[0].image.src);
 			// 		SliImage = data.map(function(data) {
  		// 		return(data.image.src);
				// });
				
				//console.log("Images:- "+SliImage.length);
				//alert(JSON.stringify(data[7]))
				var ImageL = Image.length;
				console.log("Data:- "+ data[1].image);
 				self.setState({
					ImageL:ImageL,
					category: data,
					dataSource: self.state.dataSource.cloneWithRows(data),
 				});
 			});

 	}

 		render() {
		return(
      <View style ={Css.container}>
			<View style={Css.header_main}>
				<View style = {Css.header_menu_view}>
					<TouchableOpacity onPress={() => this.props.navigation.navigate('DrawerToggle')}>
						<Entypo name="menu" size={menu} color="black"  style = {Css.menu_icon_style}/>
					</TouchableOpacity>
				</View>
				<View style = {Css.header_main_text_view}>
					<Text style = {Css.header_main_Heading_Text} >{companyname}</Text>
				</View>
				<TouchableOpacity onPress={() => {
					if(this.props.navigation.state.params.userData != "null"){
						this.props.navigation.navigate('search', {userData:{Customer:this.props.navigation.state.params.userData.Customer}});
					}else{
						this.props.navigation.navigate('search');
					}
				}}>
					<View style ={Css.header_search_view}>
						<MaterialIcons name ='search' size={30} color='#000' />
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
						<MaterialCommunityIcons name="cart" size={30} color="black" />
					</TouchableOpacity>
					<Text style ={Css.cart_count_text}>{this.state.cartcount}</Text>
				</View>
			</View>
				<ScrollView>
					<View style = {Css.homepage_slider_container}>
						<ImageSlider
							images = {images}
							position={this.state.position}
              				onPositionChanged={position => this.setState({position})}
							style = {{height: responsiveHeight(30)}}
						/>
					</View>
					<View style ={Css.homepage_category_main_container}>
						<View style={Css.homepage_category_heading_container}>
							<View style = {Css.homepage_category_heading_text_container}>
								<Text style = {Css.homepage_category_heading_text}> Shop By Category </Text>
							</View>
							<View style ={Css.homepage_ViewAll_button_container}>
								<TouchableOpacity onPress={() => {
									if(this.props.navigation.state.params.userData != null){
										this.props.navigation.navigate('products', {userData:{Customer:this.props.navigation.state.params.userData.Customer}});
									}else{
										this.props.navigation.navigate('products');
									}
								}}><Text style ={Css.homepage_viewAll_text}>View All</Text></TouchableOpacity>
							</View>
						</View>
						<ListView
						    dataSource = {this.state.dataSource}
						    renderRow = {this.renderCat.bind(this)}
								contentContainerStyle = {{flexDirection: 'row',flexWrap: 'wrap', }}
						/>
					</View>
					</ScrollView>
			
      </View>
    )
  }

	renderCat(cat){
		var image ='';
		if(cat.image == null){
			image = 'http://emuzica.cc/templates/ANN4/dleimages/no_image.jpg';
		}else{
			image = cat.image.src;
		}
		if(cat.id == 134){
			return null;
		}else{
			return(
			<TouchableOpacity onPress ={() => this.sendcategory(cat)}>
				<View style = {Css.homepage_category_card}>
					<Image source={{uri:image}} style={Css.homepage_category_image}></Image>
					<Text style={Css.homepage_category_text}>{cat.name}</Text>
				</View>
			</TouchableOpacity>
		);
		}
		
	}

	sendcategory(cat){
			if(this.props.navigation.state.params.userData != ""){
				this.props.navigation.navigate('categorizedproducts', {userData:{Customer:this.props.navigation.state.params.userData.Customer, category: cat}});
			}else{
				this.props.navigation.navigate('categorizedproducts', {userData:{category: cat}});
			}
	 }
}


// <Image source={require('../Images/mygreenmart-logo.png')} style ={Css.header_main_logo}/>
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
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import ImageSlider from 'react-native-image-slider';
import { responsiveHeight, responsiveWidth} from 'react-native-responsive-dimensions';
import Api from '../utils/WooCommerce/Api';
import Css,{companyname} from '../Css/main';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as Progress from 'react-native-progress';
import Item from './item';
import Curr from '../utils/WooCommerce/config2';
import { StackNavigator, navigation, DrawerNavigator } from 'react-navigation';

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state ={
      cartcount:0,
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
      Search:'',
    };
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

  componentWillMount(){
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

 hideLoader() {
   setTimeout (() => {
     this.setState({showLoader: false})
   }, 1);
 }

 getDataSource(products) {
   return this.state.dataSource.cloneWithRows(products);
 }

 fetchData(key) {
  // alert(key)
	console.log("Finish:- "+this.state.finish+'\n Online:- '+ this.state.isOnline+ '/n Search:- '+this.state.Search);
  var self = this;
  // if (this.state.finish || !this.state.isOnline || this.state.Search === '') {
  //   return;
  // }
  // self.setState({isLoading: true});

  Api.get('products', {
    per_page: this.state.limit,
    page: this.state.page,
    search: key
  })
    .then(function (data) {
      console.log("fetch data success: "+data);
      //self.data = self.data.concat(data);
      self.setState({
        finish: data.length < self.state.limit,
        dataSource: self.getDataSource(data),
        //isLoading: false,
       // myCount: data.length,
      });
    })
    console.log("Count This Product: "+ this.state.myCount);
    //console.log("count sssssssssss: "+ self.data.length);
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
							this.props.navigation.navigate('home',{userData:''});
						}
					}}>
  						<Ionicons name="md-arrow-back" size={25} color="black" />
  					</TouchableOpacity>
  				</View>
  				<View style = {Css.searchpage_header_main_text_view}>
  					<Text style = {Css.header_main_Heading_Text} >{companyname}</Text>
  				</View>
          <TouchableOpacity onPress={() => {
            if(this.props.navigation.state.params.userData != null){
              this.props.navigation.navigate('cart', {userData:{Customer:this.props.navigation.state.params.userData.Customer}});
            }else{
              this.props.navigation.navigate('cart');
            }
          }}>
    				<View style ={Css.header_cart_view}>
    					<MaterialCommunityIcons name="cart" size={30} color="black" />
    					<Text style ={Css.cart_count_text}>{this.state.cartcount}</Text>
    				</View>
          </TouchableOpacity>
  			</View>
  				<View style = {Css.searchpage_search_container}>
  					<TextInput
  					 underlineColorAndroid='transparent'
  					 placeholder="Search items..."
  					 placeholderTextColor = "grey"
             onChangeText={(search) => this.setState({Search:search})}
             onSubmitEditing ={() => this.fetchData(this.state.Search)}
             onFocus ={() => this.clearData()}
  					 style={Css.searchpage_searchInput}
  					/>
  					<EvilIcons name = "search" size = {25} color ="grey" style = {Css.searchpage_search_icon}/>
  				</View>
          <ListView
  						dataSource = {this.state.dataSource}
  						renderRow = {this.renderProducts.bind(this)}
  						contentContainerStyle = {{flexDirection: 'row',flexWrap: 'wrap', }}
  						//renderFooter={(event) => this.renderLoader(event)}
  				/>
        </View>
    );
  }

  clearData(){
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows({}),
			finish: false,
    })
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
		return(
			<View style={Css.categorypage_category_container}>
				<View style={Css.categorypage_category_subContainer}>
				<TouchableOpacity onPress={() => this.pressButton(products)}>
					<View>
						<Image source = {{uri: products.images[0].src}} style = {Css.categorypage_category_image_style} />
					</View>
					<View style ={Css.categorizedproduct_product_details_container}>
						<Text numberOfLines={1} style={Css.categorizedproduct_product_name_style}>{products.name}</Text>
							<View style ={Css.categorizedproduct_product_pricedetails_container}>
								<View style ={Css.categorizedproduct_product_price_icon_container}>
								<FontAwesome name ={Curr.Currency}  size ={15} style={Css.categorizedproduct_product_currency_icon_style}/>
								<Text numberOfLines={1} style={[Css.categorizedproduct_product_price_style]}> {products.price}</Text>
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
	}
//
  pressButton(products){
			if(this.props.navigation.state.params.userData != null){
        if(this.props.navigation.state.params.userData.Customer!=null){
          this.props.navigation.navigate('viewproduct', {userData:{Customer:this.props.navigation.state.params.userData.Customer, product: products,flag:'search'}});
        }else{
          this.props.navigation.navigate('viewproduct', {userData: {product: products,flag:'search'}});
        }
			}else{
				this.props.navigation.navigate('viewproduct', {userData: {product: products,flag:'search'}});
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

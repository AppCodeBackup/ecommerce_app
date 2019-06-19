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
import Css from '../Css/main';
import Item from './item';
import * as Progress from 'react-native-progress';

export default class MyOrder extends Component {
  constructor(props) {
    super(props);
		this.data = [];
		this.state = {
			dataSource: new ListView.DataSource({
				rowHasChanged: (row1, row2) => true,
			}),
			page: 1,
			limit:6,
			finish: false,
			isOnline: true,
			isLoading: false,
			showLoader: true,
			myCount:6,
			i:-1,
		};
  }

	componentWillMount(){
		if(this.props.navigation.state.params.userData != null){
			
			if(!this.props.navigation.state.params.userData.Customer){
				return(
					<View>
						<Text> Not Logged In </Text>
					</View>
				);
			}else{
				this.fetchData();
			}
		}else{
			return(
				<View>
					<Text> Not Logged In </Text>
				</View>
			);
		}
		//alert(JSON.stringify(this.props.userData.Customer))
	}

	getDataSource(products) {
		return this.state.dataSource.cloneWithRows(products);
	}

	fetchData(){
		var self = this;
		if (this.state.finish || !this.state.isOnline) {
 		 return;
 	 }
	 self.setState({isLoading: true});
		Api.get('orders', {
			per_page: this.state.limit,
			page: this.state.page,
			//status: 'processing',
			customer: this.props.navigation.state.params.userData.Customer.id,
		}).then(function (data) {
			console.log("fetch data success: "+JSON.stringify(data));
			self.data = self.data.concat(data);
			self.setState({
				page: self.state.page + 1,
				finish: data.length < self.state.limit,
				dataSource: self.getDataSource(self.data),
				isLoading: false,
				myCount: data.length,
			});
		})
		console.log("Count This Product: "+ this.state.myCount);
	}

  render(){
    return(
      <View style ={{width: responsiveWidth(100), height: responsiveHeight(100), flexDirection: 'column'}}>
        <View style={Css.header_main}>
          <View style = {Css.header_menu_view}>
          <TouchableOpacity onPress={() => {
            if(this.props.navigation.state.params.userData != null){
              if(!this.props.navigation.state.params.userData){
                this.props.navigation.navigate('home');
              }else{
                this.props.navigation.navigate('home', {userData:{Customer:this.props.navigation.state.params.userData.Customer}});
              }
            }else{
              this.props.navigation.navigate('home');
            }
            }}>
            <Ionicons name="md-arrow-back" size={25} style={Css.header_icon_color} />
          </TouchableOpacity>
          </View>
          <View style = {Css.orderpage_header_main_text_view}>
	          <Text style ={Css.header_main_text}>My Orders</Text>
					</View>
        </View>
				<ListView
						dataSource = {this.state.dataSource}
						renderRow = {this.renderProduct.bind(this)}
						onEndReached={this.onEndReached.bind(this)}
						renderFooter={(event) => this.renderLoader(event)}
				/>
      </View>
    );
  }

	renderLoader() {
			if(this.state.myCount == 6){
						if(this.state.page == 1){
								return(
						      this.state.showLoader?<View style={{justifyContent: 'center',alignItems:'center'}}><Progress.CircleSnail color={['red', 'green', 'blue']} style = {{marginTop: 200}} /></View>:null
						    );
						}else{
						    return(
						      this.state.showLoader?<View style={{justifyContent: 'center',alignItems:'center'}}><Progress.CircleSnail color={['red', 'green', 'blue']} style = {{}} /></View>:null
						    );
					}
				}
	}

	hideLoader() {
    setTimeout (() => {
      this.setState({showLoader: false})
    }, 1);
  }

	onEndReached() {
		if(this.props.navigation.state.params.userData != null){
			if(!this.props.navigation.state.params.userData.Customer){
				return(
					<View>
						<Text> Not Logged In </Text>
					</View>
				);
			}else{
				this.fetchData();
			}
		}else{
			return(
				<View>
					<Text> Not Logged In </Text>
				</View>
			);
		}
	}

	renderProduct(product){
		try{
			var curr = (product.currency).toString();
			//alert(curr.toLowerCase())
			return(
				<TouchableOpacity onPress={() => this.pressButton(product)}>
				<View style = {Css.orderpage_product_main_container}>
					<View style ={Css.orderpage_date_id_container}>
						<View style ={Css.orderpage_date_container}>
							<Text style ={Css.orderpage_date_text}> {product.date_created} </Text>
						</View>
						<View style = {Css.orderpage_id_container}>
							<Text style ={Css.orderpage_id_text}>Order ID:- {product.id}</Text>
						</View>
					</View>
					<View style ={Css.orderpage_image_name_container}>
						<View style={Css.orderpage_name_container}>
						<Text style ={Css.orderpage_name_text}>{product.line_items[0].name}</Text>
						</View>
					</View>
					<View style ={Css.orderpage_total_status_container}>
						<View style ={Css.orderpage_total_container}>
							<Text style = {Css.orderpage_total_text}>Total:</Text>
							<FontAwesome name ={curr.toLowerCase()} color ="#212121" size ={14} style={{paddingLeft:10}}/>
							<Text style ={Css.orderpage_total_text}>{product.total}</Text>
						</View>
						<View style ={Css.orderpage_status_container}>
							<Text style = {Css.orderpage_status_text}>{product.status}</Text>
						</View>
					</View>
				</View>
				</TouchableOpacity>
			);
		}catch(err){
			alert(err);
		}

	}

	pressButton(product){
		if(this.props.navigation.state.params.userData != null){
			this.props.navigation.navigate('myordersview', {userData:{Customer:this.props.navigation.state.params.userData.Customer, Product: product}});
		}else{
			this.props.navigation.navigate('myordersview', {userData: {Product: product}});
		}
	}
}

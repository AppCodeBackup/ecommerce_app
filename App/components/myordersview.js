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
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import ImageSlider from 'react-native-image-slider';
import { responsiveHeight, responsiveWidth} from 'react-native-responsive-dimensions';
import Api from '../utils/WooCommerce/Api';
import Css from '../Css/main';
import Item from './item';
import * as Progress from 'react-native-progress';

export default class MyOrdersView extends Component {
  constructor(props) {
    super(props);
		this.state = {
			dataSource: new ListView.DataSource({
				rowHasChanged: (row1, row2) => true,
			}),
		};
  }

componentWillMount(){
	//alert(JSON.stringify(this.props.userData.Product.shipping))
	this.setState({
		dataSource: this.state.dataSource.cloneWithRows(this.props.navigation.state.params.userData.Product.line_items),
	})
}

  render(){
		var curr = (this.props.navigation.state.params.userData.Product.currency).toString();
    return(
      <View style ={[Css.container,{flexDirection:'column'}]}>
        <View style={Css.header_main}>
	        <View style = {Css.header_menu_view}>
		          <TouchableOpacity onPress={() => {
		            if(this.props.navigation.state.params.userData != null){
		              if(!this.props.navigation.state.params.userData.Customer){
		                this.props.navigation.navigate('myorder');
		              }else{
		                this.props.navigation.navigate('myorder', {userData:{Customer:this.props.navigation.state.params.userData.Customer}});
		              }
		            }else{
		              this.props.navigation.navigate('myorder');
		            }
		            }}>
		            <Ionicons name="md-arrow-back" size={25} style={Css.header_icon_color} />
		          </TouchableOpacity>
	        </View>
	        <View style = {Css.orderviewpage_header_main_text_view}>
		          <Text style ={Css.header_main_Heading_Text}>Order Details</Text>
			</View>
        </View>
		<ScrollView>
	       		<View style ={Css.orderviewpage_basic_details_container}>
		       		 <View style ={Css.first_container_2}>
						<View style ={Css.orderviewpage_order_id_date_container}>
							<Text style ={Css.orderviewpage_order_id_text}>Order ID : {this.props.navigation.state.params.userData.Product.id}</Text>
							<Text style ={Css.orderviewpage_order_date_text}>{this.props.navigation.state.params.userData.Product.date_created}</Text>
						</View>
					 </View>
					<View style = {Css.orderviewpage_order_status_container}>
						 <Text style ={Css.orderviewpage_order_status_text}>{this.props.navigation.state.params.userData.Product.status}</Text>
					</View>
				</View>
				<View style ={Css.orderviewpage_shipping_details_container}>
					<View style ={Css.orderviewpage_blank_space_container}></View>
					<View style ={Css.orderviewpage_shipping_name_text_container}>
						<MaterialIcons name= "location-on" color="#000" size={18} style={{marginTop:3.5}}/>
						<Text style ={Css.orderviewpage_name_text}>{this.props.navigation.state.params.userData.Product.shipping.first_name+' '+this.props.navigation.state.params.userData.Product.shipping.last_name}</Text>
						<Text style ={Css.orderviewpage_phone_text}>{this.props.navigation.state.params.userData.Product.billing.phone}</Text>
					</View>
					<View style ={Css.orderviewpage_address_container}>
						<Text style ={Css.orderviewpage_address_text}>{this.props.navigation.state.params.userData.Product.shipping.address_1}</Text>
					</View>
					<View style ={Css.orderviewpage_email_container}>
						<MaterialIcons name= "email" color="#000" size={18} style={{marginTop:3.5}}/>
						<Text style ={Css.orderviewpage_email_text}>{this.props.navigation.state.params.userData.Product.billing.email}</Text>
					</View>
				</View>
				<View style ={Css.orderviewpage_product_detail_container}>
					<View style ={Css.orderviewpage_blank_space_container}></View>
					<View style={Css.orderviewpage_product_des_text_container}>
						<Text style ={Css.orderviewpage_product_des_text}>Product Description</Text>
					</View>
				</View>
				<ListView
					dataSource = {this.state.dataSource}
					renderRow = {this.renderProduct.bind(this)}
				/>
				<View style ={Css.orderviewpage_amount_description_main_container}>
					<View style ={Css.orderviewpage_blank_space_container}></View>
					<View style={Css.orderviewpage_amount_description_inner_container}>
						<View style={Css.orderviewpage_subtotal_container}>
							<View style ={Css.orderviewpage_subtotal_text_conatiner}>
								<Text style ={Css.orderviewpage_subtotal_text}>SUBTOTAL</Text>
							</View>
							<View style={Css.orderviewpage_subtotal_amt_container}>
								<FontAwesome name ={curr.toLowerCase()} color ="#212121" size ={16} style={{paddingLeft:10}}/>
								<Text style ={Css.orderviewpage_subtotal_amt_text}> {this.props.navigation.state.params.userData.Product.total}</Text>
							</View>
						</View>
						<View style={Css.orderviewpage_delivery_and_amt_container}>
							<View style ={Css.orderviewpage_delivery_text_container}>
								<Text style ={Css.orderviewpage_delivery_text}>DELIVERY</Text>
							</View>
							<View style={Css.orderviewpage_delivery_amt_container}>
								<Text style ={Css.orderviewpage_delivery_amt_text}>{this.props.navigation.state.params.userData.Product.shipping_total}</Text>
							</View>
						</View>
						<View style={Css.orderviewpage_discount_and_amt_container}>
							<View style ={Css.orderviewpage_discount_text_container}>
								<Text style ={Css.orderviewpage_discount_text}>DISCOUNT</Text>
							</View>
							<View style={Css.orderviewpage_discount_amt_container}>
								<Text style ={Css.orderviewpage_discount_amt_text}>{this.props.navigation.state.params.userData.Product.discount_total}</Text>
							</View>
						</View>
						<View style={Css.orderviewpage_discount_and_amt_container}>
							<View style ={Css.orderviewpage_discount_text_container}>
								<Text style ={Css.orderviewpage_discount_text}>TAX</Text>
							</View>
							<View style={Css.orderviewpage_discount_amt_container}>
								<Text style ={Css.orderviewpage_discount_amt_text}>{this.props.navigation.state.params.userData.Product.total_tax}</Text>
							</View>
						</View>
						<View style={Css.orderviewpage_total_and_amt_container}>
							<View style ={Css.orderviewpage_total_text_container}>
								<Text style ={Css.orderviewpage_total_text}>TOTAL</Text>
							</View>
							<View style={Css.orderviewpage_total_amt_container}>
								<FontAwesome name ={curr.toLowerCase()} color ="#212121" size ={16} style={{paddingLeft:10}}/>
								<Text style ={Css.orderviewpage_total_amt_text}> {parseInt(this.props.navigation.state.params.userData.Product.total)+parseInt(this.props.navigation.state.params.userData.Product.shipping_total)+parseInt(this.props.navigation.state.params.userData.Product.discount_total)+parseInt(this.props.navigation.state.params.userData.Product.total_tax)}</Text>
							</View>
						</View>
					</View>
				</View>
				<View style ={Css.orderviewpage_track_button_container}>
					<TouchableOpacity>
						<View style={Css.orderviewpage_track_text_conatiner}>
							<Text style ={Css.orderviewpage_track_text}>TRACK</Text>
						</View>
					</TouchableOpacity>
				</View>
		</ScrollView>
     </View>
    );
  }

	renderProduct(product){
		var curr = (this.props.navigation.state.params.userData.Product.currency).toString();
		return(
			<View style={Css.orderviewpage_product_main_container}>
				<View style={Css.orderviewpage_product_name_and_price_container}>
				  <View style={Css.orderviewpage_product_name_container}>
				    <Text style ={Css.orderviewpage_product_name_text}>{product.name}</Text>
				  </View>
				  <View style ={Css.orderviewpage_product_price_container}>
						<FontAwesome name ={curr.toLowerCase()} color ="#212121" size ={14} style={{paddingLeft:10}}/>
				    <Text style ={Css.orderviewpage_product_price_text}> {product.price} X {product.quantity}</Text>
				  </View>
				</View>
			</View>
		);
	}
}

import React, {
      StyleSheet,
      Dimensions,
      PixelRatio,
      Platform
    } from "react-native";
import { responsiveHeight, responsiveWidth, responsiveFontSize} from 'react-native-responsive-dimensions';
import url from '../utils/WooCommerce/config2';

export const companyname= url.companyName;
export const logo=url.companyLogo;
export default StyleSheet.create({
  container:{
    flex: 1,
    width:responsiveWidth(100),
    height:responsiveHeight(100),
    backgroundColor:'#e0d4c2',//#eae4da,#dcd0bc,#e8e1d3
  },
  ...Platform.select({
    ios: {
      header_main: {
        height:responsiveHeight(9),
        justifyContent:'center',
        alignItems:'center',
        marginTop:0,
        backgroundColor: url.themeColor,
        flexDirection: 'row',
      },
      // header_main_text_view:{
      //   alignItems:"center",
      //   width:responsiveWidth(62),
      //   justifyContent:'center'
      // },
      header_search_view:{
        width:responsiveWidth(10),
        alignItems:'center',
        justifyContent:'center',
        paddingTop:5
      },
      header_cart_view:{
        width:responsiveWidth(14),
        justifyContent:'center',
        alignItems:'center',
        paddingTop: 20
      },
      // header_menu_view:{
      //   width: responsiveWidth(15),
      //   alignItems:'center',
      //   paddingTop:8
      // },
      header_main_Heading_Text:{
        color: '#000', 
        fontFamily: 'Montserrat-Bold', 
        textAlign:'center',
        fontSize: responsiveFontSize(2.1),
        paddingTop: 5
      },
      // header_main_logo:{
      //   width:responsiveWidth(9.2),
      //   height:responsiveHeight(5.8)
      // },
      // cart_count_text:{
      //   color:"white",
      //   position:'relative',
      //   bottom:29,
      //   left:1,
      //   fontSize:12
      // },
      // header_icon_color:{
      //   color:"black"
      // },
      menu_icon_style:{
        paddingTop: 5
      },

      // Home Page Css
      // homepage_slider_container:{
      //   flexDirection: 'column',
      //   marginTop:10,
      //   marginBottom:10
      // },
      homepage_category_main_container:{
        flexDirection:'column',
        marginTop:4,
        marginLeft:13,
        marginRight:20,
        backgroundColor:'white',
        width:responsiveWidth(93),
        height:responsiveHeight(55),
        borderRadius:5,
        borderWidth:1,
        borderColor:'#D6D6D6',
      },
      // homepage_category_heading_container:{
      //   backgroundColor:'#E8E8E8',
      //   flex: 0.12,
      //   borderWidth:1,
      //   borderColor:"#D6D6D6",
      //   flexDirection:'row'
      // },
      homepage_category_heading_text_container:{
        width:responsiveWidth(70),
        justifyContent:'center'
      },
      homepage_category_heading_text:{
        fontSize: responsiveFontSize(2.6),
        fontWeight: 'bold',
        textAlign:'left',
        color:'black',
        paddingTop:3,
        paddingLeft:6
      },
      homepage_ViewAll_button_container:{
        width:responsiveWidth(30),
        justifyContent:'center',
        //alignItems:'center'
      },
      // homepage_viewAll_text:{
      //   color:url.themeColor,
      //   fontSize:18,
      //   paddingTop:3,
      //   //textAlign:'center'
      // },
      homepage_category_card:{
        borderRightWidth:2,
        borderLeftWidth:2,
        borderTopWidth:2,
        borderBottomWidth:2,
        width: responsiveWidth(30.78),
        height: responsiveHeight(16.18),
        borderColor:"#D6D6D6"
      },
      homepage_category_image:{
        marginTop:10,
        width:responsiveWidth(10),
        height:responsiveHeight(10),
        alignSelf:'center'
      },
      // homepage_category_text:{
      //   alignSelf:'center',
      //   paddingTop:4
      // },

      //Categorizedproduct page CSS
      // categorizedproduct_product_details_container:{
      //   flexDirection: 'column',
      // },
      // categorizedproduct_product_pricedetails_container:{
      //   flexDirection: 'row',
      // },
      // categorizedproduct_product_price_icon_container:{
      //   width: responsiveWidth(37.6),
      //   flexDirection:'row',
      //   alignItems:'center'
      // },
      // categorizedproduct_product_currency_icon_style:{
      //   paddingLeft:10,
      //   color :"#212121",
      // },
      // categorizedproduct_product_price_style:{
      //   fontSize: 15, 
      //   color:'black', 
      //   paddingLeft:5, 
      //   paddingBottom:2,
      //   paddingTop:2,
      // },
      // categorizedproduct_product_carticon_container:{
      //   width: responsiveWidth(9.4),
      // },

      //Category Page
      // categorypage_category_container:{
      //   flexDirection:'row',
      // },

      // categorypage_category_subContainer:{
      //   flexDirection:'column',
      //   backgroundColor:'white', 
      //   width: responsiveWidth(46), 
      //   height: responsiveHeight(35),
      //   marginLeft:10,
      //   marginTop:10
      // },
      // categorypage_category_image_container:{
      //   justifyContent:'center',
      //   alignItems:'center'
      // },
      // categorypage_category_image_style:{
      //   width: responsiveWidth(37), 
      //   height: responsiveHeight(26), 
      //   marginLeft: 10, 
      //   marginTop:3
      // },
      // categorypage_category_name_container:{
      //   flexDirection: 'column', 
      //   justifyContent:'center',
      //   alignItems:'center'
      // },
      categorypage_category_name_style:{
        fontSize: responsiveFontSize(1.9), 
        color:'black', 
        paddingLeft:10, 
        paddingBottom:2,
        paddingTop:4
      },

      //CartPage
      // cartpage_header_main_text_view:{
      //   alignItems:'center',
      //   width:responsiveWidth(65),
      //   justifyContent:'center',
      // },
      // cartpage_header_cart_view:{
      //   width:responsiveWidth(10),
      //   alignItems:'center',
      //   paddingTop:11
      // },
      // cartpage_cancel_cart_image:{
      //   height:responsiveHeight(3.5),
      //   width:responsiveWidth(6.3)
      // },
      // cartpage_total_main_container:{
      //   flexDirection:'column'
      // },
      // cartpage_total_container:{
      //   flexDirection:'row',
      //   height: responsiveHeight(4.5),
      //   marginTop:5,
      //   marginBottom:5,
      //   alignItems:'center',
      //   alignSelf:'center'
      // },
      // cartpage_total_text:{
      //   color:url.themeColor,
      //   fontSize:16,
      //   fontFamily:"OpenSans-Regular"
      // },
      // cartpage_total_cart_image:{
      //   height:responsiveHeight(3.5),
      //   width:responsiveWidth(6.3)
      // },
      
      // cartpage_total_amt_text:{
      //   color:url.themeColor,
      //   fontSize:16,
      //   fontFamily:"Montserrat-Bold"
      // },
      // cartpage_black_container:{
      //   backgroundColor:"#000",
      //   height:responsiveHeight(5),
      //   marginBottom:10,
      // },
      // cartpage_shopping_cart_text:{
      //   color:"#fff",
      //   fontSize:18,
      //   fontFamily:"OpenSans-Regular",
      //   paddingTop:2,
      //   alignSelf:"center"
      // },
      // cartpage_checkoutbtn_container:{
      //   height:responsiveHeight(8),
      //   backgroundColor:'#474747', 
      //   alignItems:'center',
      //   paddingTop:10
      // },
      // cartpage_checkoutbtn_text:{
      //   color:'white', 
      //   fontFamily:'OpenSans-Regular', 
      //   fontSize: 20,
      // },
      cartpage_product_main_container:{
        height: responsiveHeight(24.5),
        width: responsiveWidth(95),
        alignSelf: 'center',
        backgroundColor:"#fff",
        marginTop:10,
        marginBottom:10,
      },
      // cartpage_product_container_row:{
      //   flexDirection:'row'
      // },
      // cartpage_product_image_container:{
      //   marginLeft:2
      // },
      cartpage_product_image:{
        height:responsiveHeight(24),
        width:responsiveWidth(35)
      },
      // cartpage_product_detail_container:{
      //   flexDirection:'column',
      //   paddingTop:10
      // },
      // cartpage_product_name_container:{
      //   flexDirection:'row',
      // },
      // cartpage_product_name_contains:{
      //   width: responsiveWidth(38)
      // },
      // cartpage_product_name_text:{
      //   color:'#000',
      //   fontSize:17,
      //   height: responsiveHeight(11),
      //   fontFamily:"OpenSans-Regular",
      //   paddingLeft:10,
      // },
      cartpage_delete_icon_container:{
        width:responsiveWidth(34),
        alignItems:'center',
      },
      // cartpage_delete_icon:{
      //   height:responsiveHeight(3),
      //   width:responsiveWidth(4),
      // },
      // cartpage_inStock_text:{
      //   color:'#000',
      //   fontSize:13,
      //   fontFamily:"OpenSans-Regular",
      //   paddingLeft:10,
      //   textAlign:'left',
      // },
      // cartpage_product_amt_container:{
      //   flexDirection:'row',
      // },
      // cartpage_product_amt_text:{
      //   color:'#000',
      //   fontSize:19,
      //   fontFamily:"Montserrat-Bold",
      //   paddingLeft:5,
      //   textAlign:'left',
      // },
       cartpage_add_less_container:{
        flexDirection:'row',
        marginTop:5,
        marginLeft:10,
        backgroundColor:url.themeColor,
        height:responsiveHeight(6),
        width:responsiveWidth(30),
        alignSelf:'center'
      },
      // cartpage_less_container:{
      //   width:responsiveWidth(10),
      //   alignItems:'center',
      //   paddingTop:4,
      // },
      // cartpage_quantity_Container:{
      //   width:responsiveWidth(8),
      //   alignItems:'center',
      //   paddingTop:4,
      // },
      // cartpage_quantity_Text:{
      //   fontFamily:'OpenSans-Regular',
      //   fontSize:22,
      //   color:'black',
      // },
      // cartpage_add_container:{
      //   width:responsiveWidth(10),
      //   alignItems:'center',
      //   paddingTop:4,
      // },

      //Login Css
      // loginpage_main_container:{
      //   flex: 1,
      //   backgroundColor:url.themeColor

      // },
      // loginpage_submain_container:{
      //  height: responsiveHeight(90),

      // },
      // loginpage_header_main:{
      //   height: responsiveHeight(8),
      //   justifyContent:'center'
      // },
      // header_back_icon:{
      //   paddingLeft:15
      // },
      // loginpage_logo_container:{
      //   height:responsiveHeight(20),
      //   justifyContent:"flex-end",
      //   alignItems:'center',
      //   //backgroundColor:'white'
      // },
      // loginpage_logo:{
      //   width:responsiveWidth(39),
      //   height:responsiveHeight(23),
      //   borderRadius: 100
      // },
      // loginpage_heading_container:{
      //   height:responsiveHeight(10),
      //   alignItems:'center',
      //   justifyContent:"flex-start"
      // },
      // loginpage_heading_text:{
      //   fontSize:responsiveFontSize(3),
      //   color:'#212121',
      //   fontFamily:'Montserrat-Regular',
      //   fontWeight:'bold'
      // },
      // loginpage_username_field_container:{
      //   alignItems:'center'
      // },
      // loginpage_input_field:{
      //   height:responsiveHeight(6.5),
      //   marginLeft: 20,
      //   marginRight:20,
      //   paddingLeft: 10,
      //   backgroundColor: 'white',
      //   width: responsiveWidth(88),
      //   borderRadius:3,
      // },
      // loginpage_password_field_container:{
      //   alignItems:'center',
      //   marginTop:20
      // },
      // loginpage_loginbtn_container:{
      //   alignItems:'center',
      //   marginTop:20
      // },
      // loginpage_loginbtn_text_container:{
      //   width:responsiveWidth(88),
      //   height:responsiveHeight(6.5),
      //   backgroundColor:"#212121",
      //   borderRadius:3,
      //   alignItems:'center',
      //   justifyContent:'center'
      // },
      // loginpage_loginbtn_text:{
      //   color:'white',
      //   fontFamily:"Montserrat-Regular"
      // },
      // loginpage_forgot_password_container:{
      //   alignItems:'center',
      //   justifyContent:'center',
      //   paddingTop:13
      // },
      // loginpage_forgot_password_text:{
      //   color:'#212121'
      // },
      // loginpage_end_container:{
      //   alignItems:'center',
      //   justifyContent:'center',
      //   paddingLeft:20,
      //   flexDirection:'row'
      // },
      loginpage_sign_up_text_container:{
        width:responsiveWidth(60),
        alignItems:'flex-end',
        justifyContent:'flex-end',
      },
      // loginpage_sign_up_text:{
      //   color:'#212121',
      //   textDecorationLine:'underline'
      // },
      // loginpage_help_bttn_container:{
      //   width:responsiveWidth(25),
      //   alignItems:'flex-start'
      // },
      // loginpage_help_icon_container:{
      //   width:responsiveWidth(8),
      //   height:responsiveHeight(4),
      //   backgroundColor:"#212121",
      //   borderRadius:3,
      //   alignItems:'center',
      //   justifyContent:'center',
      //   marginLeft:15
      // },

      //Drawer
      drawer_user_name:{
        fontSize:responsiveFontSize(1.9), 
        fontFamily:"Montserrat-Regular",
        color:"black",
        paddingTop: 10,
        paddingLeft: 20
      },
      // drawer_menu_container:{
      //   height:responsiveHeight(8),
      //   borderBottomWidth:1, 
      //   borderColor:"#f5f5f5", 
      //   flexDirection:'row'
      // },
      // drawer_menu_icon_container:{
      //   width: responsiveWidth(10), 
      //   justifyContent:'center',
      //   alignItems:'flex-end'
      // },
      // drawer_menu_icon_style:{
      //   color:url.themeColor,
      // },
      // drawer_menu_text_container:{
      //   width:responsiveWidth(90),
      //   justifyContent:"center",
      // },
      // drawer_menu_text_style:{
      //   fontSize:15, 
      //   fontFamily:"Montserrat-Regular",
      //   color:"black",
      //   paddingLeft: 10
      // },

      // drawer_main_container:{
      //   flex: 1, 
      //   backgroundColor: 'white'
      // },
      // drawer_main_user_name_container:{
      //   backgroundColor:url.themeColor, 
      //   height:responsiveHeight(9),
      //   alignItems:"center",
      //   flexDirection: 'row'
      // },
      drawer_back_icon:{
       paddingTop: 10,
       paddingLeft: 10
      },
      
      //Registration Css

      registrationpage_input_field_style:{
        height:responsiveHeight(6.5),
        paddingLeft:10,
        marginLeft: 20,
        marginRight:20,
        backgroundColor: 'white',
        width: responsiveWidth(88),
        borderRadius:3,
      },
      registrationpage_smallinput_field:{
        height:responsiveHeight(6.5),
        marginRight:20,
        paddingLeft:10,
        marginLeft:20,
        backgroundColor: 'white',
        width: responsiveWidth(40),
        borderRadius:3,
      },
      registrationpage_smallinput_field2:{
        marginLeft:25
      },
    },
    android: {
      header_main: {
        height:responsiveHeight(7),
        marginTop:0,
        backgroundColor: url.themeColor,
        flexDirection: 'row',
      },
      // header_main_text_view:{
      //   alignItems:"center",
      //   width:responsiveWidth(62),
      //   justifyContent:'center'
      // },
      header_search_view:{
        width:responsiveWidth(10),
        alignItems:'center',
        paddingTop:10
      },
      header_cart_view:{
        width:responsiveWidth(14),
        alignItems:'center',
        paddingTop:8
      },
      // header_menu_view:{
      //   width: responsiveWidth(15),
      //   alignItems:'center',
      //   paddingTop:8
      // },
      header_main_Heading_Text:{
        color: '#000', 
        fontFamily: 'Montserrat-Bold', 
        fontSize: responsiveFontSize(2.1)
      },
      // header_main_logo:{
      //   width:responsiveWidth(9.2),
      //   height:responsiveHeight(5.8)
      // },
      // cart_count_text:{
      //   color:"white",
      //   position:'relative',
      //   bottom:29,
      //   left:1,
      //   fontSize:12
      // },
      // header_icon_color:{
      //   color:"black"
      // },
      menu_icon_style:{
        paddingTop: 0
      },

      // Home Page Css
      // homepage_slider_container:{
      //   flexDirection: 'column',
      //   marginTop:10,
      //   marginBottom:10
      // },
      homepage_category_main_container:{
        flexDirection:'column',
        marginTop:4,
        marginLeft:13,
        marginRight:20,
        backgroundColor:'white',
        width:responsiveWidth(93),
        height:responsiveHeight(49.5),
        borderRadius:5,
        borderWidth:1,
        borderColor:'#D6D6D6',
      },
      // homepage_category_heading_container:{
      //   backgroundColor:'#E8E8E8',
      //   flex: 0.12,
      //   borderWidth:1,
      //   borderColor:"#D6D6D6",
      //   flexDirection:'row'
      // },
      homepage_category_heading_text_container:{
        width:responsiveWidth(70)
      },
      homepage_category_heading_text:{
        fontSize: 20,
        fontWeight: 'bold',
        textAlign:'left',
        color:'black',
        paddingTop:3,
        paddingLeft:6
      },
      homepage_ViewAll_button_container:{
        width:responsiveWidth(30)
      },
      // homepage_viewAll_text:{
      //   color:url.themeColor,
      //   fontSize:18,
      //   paddingTop:3,
      // },
      homepage_category_card:{
        borderRightWidth:2,
        borderLeftWidth:2,
        borderTopWidth:2,
        borderBottomWidth:2,
        width: responsiveWidth(30.78),
        height: responsiveHeight(14.52),
        borderColor:"#D6D6D6"
      },
      homepage_category_image:{
        marginTop:10,
        width:responsiveWidth(8),
        height:responsiveHeight(8),
        alignSelf:'center'
      },
      // homepage_category_text:{
      //   alignSelf:'center',
      //   paddingTop:4
      // },

      //Categorizedproduct page CSS
      // categorizedproduct_product_details_container:{
      //   flexDirection: 'column',
      // },
      // categorizedproduct_product_pricedetails_container:{
      //   flexDirection: 'row',
      // },
      // categorizedproduct_product_price_icon_container:{
      //   width: responsiveWidth(37.6),
      //   flexDirection:'row',
      //   alignItems:'center'
      // },
      // categorizedproduct_product_currency_icon_style:{
      //   paddingLeft:10,
      //   color :"#212121",
      // },
      // categorizedproduct_product_price_style:{
      //   fontSize: 15, 
      //   color:'black', 
      //   paddingLeft:5, 
      //   paddingBottom:2,
      //   paddingTop:2,
      // },
      // categorizedproduct_product_carticon_container:{
      //   width: responsiveWidth(9.4),
      // },

      //Category Page
      // categorypage_category_container:{
      //   flexDirection:'row',
      // },

      // categorypage_category_subContainer:{
      //   flexDirection:'column',
      //   backgroundColor:'white', 
      //   width: responsiveWidth(46), 
      //   height: responsiveHeight(35),
      //   marginLeft:10,
      //   marginTop:10
      // },
      // categorypage_category_image_container:{
      //   justifyContent:'center',
      //   alignItems:'center'
      // },
      // categorypage_category_image_style:{
      //   width: responsiveWidth(37), 
      //   height: responsiveHeight(26), 
      //   marginLeft: 10, 
      //   marginTop:3
      // },
      // categorypage_category_name_container:{
      //   flexDirection: 'column', 
      //   justifyContent:'center',
      //   alignItems:'center'
      // },
      categorypage_category_name_style:{
        fontSize: 15, 
        color:'black', 
        paddingLeft:10, 
        paddingBottom:2,
        paddingTop:4
      },

      //CartPage
      // cartpage_header_main_text_view:{
      //   alignItems:'center',
      //   width:responsiveWidth(65),
      //   justifyContent:'center',
      // },
      // cartpage_header_cart_view:{
      //   width:responsiveWidth(10),
      //   alignItems:'center',
      //   paddingTop:11
      // },
      // cartpage_cancel_cart_image:{
      //   height:responsiveHeight(3.5),
      //   width:responsiveWidth(6.3)
      // },
      // cartpage_total_main_container:{
      //   flexDirection:'column'
      // },
      // cartpage_total_container:{
      //   flexDirection:'row',
      //   height: responsiveHeight(4.5),
      //   marginTop:5,
      //   marginBottom:5,
      //   alignItems:'center',
      //   alignSelf:'center'
      // },
      // cartpage_total_text:{
      //   color:url.themeColor,
      //   fontSize:16,
      //   fontFamily:"OpenSans-Regular"
      // },
      // cartpage_total_cart_image:{
      //   height:responsiveHeight(3.5),
      //   width:responsiveWidth(6.3)
      // },
      
      // cartpage_total_amt_text:{
      //   color:url.themeColor,
      //   fontSize:16,
      //   fontFamily:"Montserrat-Bold"
      // },
      // cartpage_black_container:{
      //   backgroundColor:"#000",
      //   height:responsiveHeight(5),
      //   marginBottom:10,
      // },
      // cartpage_shopping_cart_text:{
      //   color:"#fff",
      //   fontSize:18,
      //   fontFamily:"OpenSans-Regular",
      //   paddingTop:2,
      //   alignSelf:"center"
      // },
      // cartpage_checkoutbtn_container:{
      //   height:responsiveHeight(8),
      //   backgroundColor:'#474747', 
      //   alignItems:'center',
      //   paddingTop:10
      // },
      // cartpage_checkoutbtn_text:{
      //   color:'white', 
      //   fontFamily:'OpenSans-Regular', 
      //   fontSize: 20,
      // },
      cartpage_product_main_container:{
        height: responsiveHeight(25),
        width: responsiveWidth(95),
        alignSelf: 'center',
        backgroundColor:"#fff",
        marginTop:10,
        marginBottom:10,
      },
      // cartpage_product_container_row:{
      //   flexDirection:'row'
      // },
      // cartpage_product_image_container:{
      //   marginLeft:2
      // },
      cartpage_product_image:{
        height:responsiveHeight(27),
        width:responsiveWidth(38)
      },
      // cartpage_product_detail_container:{
      //   flexDirection:'column',
      //   paddingTop:10
      // },
      // cartpage_product_name_container:{
      //   flexDirection:'row',
      // },
      // cartpage_product_name_contains:{
      //   width: responsiveWidth(38)
      // },
      // cartpage_product_name_text:{
      //   color:'#000',
      //   fontSize:17,
      //   height: responsiveHeight(11),
      //   fontFamily:"OpenSans-Regular",
      //   paddingLeft:10,
      // },
      cartpage_delete_icon_container:{
        width:responsiveWidth(31),
        alignItems:'center',
      },
      // cartpage_delete_icon:{
      //   height:responsiveHeight(3),
      //   width:responsiveWidth(4),
      // },
      // cartpage_inStock_text:{
      //   color:'#000',
      //   fontSize:13,
      //   fontFamily:"OpenSans-Regular",
      //   paddingLeft:10,
      //   textAlign:'left',
      // },
      // cartpage_product_amt_container:{
      //   flexDirection:'row',
      // },
      // cartpage_product_amt_text:{
      //   color:'#000',
      //   fontSize:19,
      //   fontFamily:"Montserrat-Bold",
      //   paddingLeft:5,
      //   textAlign:'left',
      // },
       cartpage_add_less_container:{
        flexDirection:'row',
        marginTop:0,
        marginLeft:0,
        backgroundColor:url.themeColor,
        height:responsiveHeight(6),
        width:responsiveWidth(30),
        alignSelf:'center'
      },
      // cartpage_less_container:{
      //   width:responsiveWidth(10),
      //   alignItems:'center',
      //   paddingTop:4,
      // },
      // cartpage_quantity_Container:{
      //   width:responsiveWidth(8),
      //   alignItems:'center',
      //   paddingTop:4,
      // },
      // cartpage_quantity_Text:{
      //   fontFamily:'OpenSans-Regular',
      //   fontSize:22,
      //   color:'black',
      // },
      // cartpage_add_container:{
      //   width:responsiveWidth(10),
      //   alignItems:'center',
      //   paddingTop:4,
      // },

      //Login Css
      // loginpage_main_container:{
      //   flex: 1,
      //   backgroundColor:url.themeColor

      // },
      // loginpage_submain_container:{
      //  height: responsiveHeight(90),

      // },
      // loginpage_header_main:{
      //   height: responsiveHeight(8),
      //   justifyContent:'center'
      // },
      // header_back_icon:{
      //   paddingLeft:15
      // },
      // loginpage_logo_container:{
      //   height:responsiveHeight(20),
      //   justifyContent:"flex-end",
      //   alignItems:'center',
      //   //backgroundColor:'white'
      // },
      // loginpage_logo:{
      //   width:responsiveWidth(39),
      //   height:responsiveHeight(23),
      //   borderRadius: 100
      // },
      // loginpage_heading_container:{
      //   height:responsiveHeight(10),
      //   alignItems:'center',
      //   justifyContent:"flex-start"
      // },
      // loginpage_heading_text:{
      //   fontSize:responsiveFontSize(3),
      //   color:'#212121',
      //   fontFamily:'Montserrat-Regular',
      //   fontWeight:'bold'
      // },
      // loginpage_username_field_container:{
      //   alignItems:'center'
      // },
      // loginpage_input_field:{
      //   height:responsiveHeight(6.5),
      //   marginLeft: 20,
      //   marginRight:20,
      //   backgroundColor: 'white',
      //   width: responsiveWidth(88),
      //   borderRadius:3,
      // },
      // loginpage_password_field_container:{
      //   alignItems:'center',
      //   marginTop:20
      // },
      // loginpage_loginbtn_container:{
      //   alignItems:'center',
      //   marginTop:20
      // },
      // loginpage_loginbtn_text_container:{
      //   width:responsiveWidth(88),
      //   height:responsiveHeight(6.5),
      //   backgroundColor:"#212121",
      //   borderRadius:3,
      //   alignItems:'center',
      //   justifyContent:'center'
      // },
      // loginpage_loginbtn_text:{
      //   color:'white',
      //   fontFamily:"Montserrat-Regular"
      // },
      // loginpage_forgot_password_container:{
      //   alignItems:'center',
      //   justifyContent:'center',
      //   paddingTop:13
      // },
      // loginpage_forgot_password_text:{
      //   color:'#212121'
      // },
      // loginpage_end_container:{
      //   alignItems:'center',
      //   justifyContent:'center',
      //   paddingLeft:20,
      //   flexDirection:'row'
      // },
      loginpage_sign_up_text_container:{
        width:responsiveWidth(72),
        alignItems:'flex-end',
        justifyContent:'flex-end',
      },
      // loginpage_sign_up_text:{
      //   color:'#212121',
      //   textDecorationLine:'underline'
      // },
      // loginpage_help_bttn_container:{
      //   width:responsiveWidth(25),
      //   alignItems:'flex-start'
      // },
      // loginpage_help_icon_container:{
      //   width:responsiveWidth(8),
      //   height:responsiveHeight(4),
      //   backgroundColor:"#212121",
      //   borderRadius:3,
      //   alignItems:'center',
      //   justifyContent:'center',
      //   marginLeft:15
      // },

      //Drawer
      drawer_user_name:{
        fontSize:responsiveFontSize(1.9), 
        fontFamily:"Montserrat-Regular",
        color:"black",
        paddingLeft: 20
      },
      // drawer_menu_container:{
      //   height:responsiveHeight(8),
      //   borderBottomWidth:1, 
      //   borderColor:"#f5f5f5", 
      //   flexDirection:'row'
      // },
      // drawer_menu_icon_container:{
      //   width: responsiveWidth(10), 
      //   justifyContent:'center',
      //   alignItems:'flex-end'
      // },
      // drawer_menu_icon_style:{
      //   color:url.themeColor,
      // },
      // drawer_menu_text_container:{
      //   width:responsiveWidth(90),
      //   justifyContent:"center",
      // },
      // drawer_menu_text_style:{
      //   fontSize:15, 
      //   fontFamily:"Montserrat-Regular",
      //   color:"black",
      //   paddingLeft: 10
      // },

      // drawer_main_container:{
      //   flex: 1, 
      //   backgroundColor: 'white'
      // },
      // drawer_main_user_name_container:{
      //   backgroundColor:url.themeColor, 
      //   height:responsiveHeight(9),
      //   alignItems:"center",
      //   flexDirection: 'row'
      // },
      drawer_back_icon:{
       
      },

      //Registration Css
      registrationpage_input_field_style:{
        height:responsiveHeight(6.5),
        marginLeft: 20,
        marginRight:20,
        backgroundColor: 'white',
        width: responsiveWidth(88),
        borderRadius:3,
      },
      registrationpage_smallinput_field:{
        height:responsiveHeight(6.5),
        marginRight:18,
        backgroundColor: 'white',
        width: responsiveWidth(42),
        borderRadius:3,
      },
      registrationpage_smallinput_field2:{
        marginLeft:20,
      },
    },
  }),
  
  //Drawer
  drawer_menu_container:{
        height:responsiveHeight(8),
        borderBottomWidth:1, 
        borderColor:"#f5f5f5", 
        flexDirection:'row'
      },
      drawer_menu_icon_container:{
        width: responsiveWidth(10), 
        justifyContent:'center',
        alignItems:'flex-end'
      },
      drawer_menu_icon_style:{
        color:url.themeColor,
      },
      drawer_menu_text_container:{
        width:responsiveWidth(90),
        justifyContent:"center",
      },
      drawer_menu_text_style:{
        fontSize:15, 
        fontFamily:"Montserrat-Regular",
        color:"black",
        paddingLeft: 10
      },

      drawer_main_container:{
        flex: 1, 
        backgroundColor: 'white'
      },
      drawer_main_user_name_container:{
        backgroundColor:url.themeColor, 
        height:responsiveHeight(9),
        alignItems:"center",
        flexDirection: 'row'
      },

  //Header section
   header_main_text_view:{
        alignItems:"center",
        width:responsiveWidth(62),
        justifyContent:'center'
      },

       header_menu_view:{
        width: responsiveWidth(15),
        alignItems:'center',
        paddingTop:8
      },
      header_main_logo:{
        width:responsiveWidth(9.2),
        height:responsiveHeight(5.8)
      },
      cart_count_text:{
        color:"white",
        position:'relative',
        bottom:29,
        left:1,
        fontSize:12
      },
      header_icon_color:{
        color:"black"
      },

      // Home Page Css
      homepage_slider_container:{
        flexDirection: 'column',
        marginTop:10,
        marginBottom:10
      },
      homepage_category_heading_container:{
        backgroundColor:'#E8E8E8',
        flex: 0.12,
        borderWidth:1,
        borderColor:"#D6D6D6",
        flexDirection:'row'
      },
      homepage_viewAll_text:{
        color:url.themeColor,
        fontSize:18,
        paddingTop:3,
      },
      homepage_category_text:{
        alignSelf:'center',
        paddingTop:4
      },

      //Categorizedproduct page CSS
      categorizedproduct_product_details_container:{
        flexDirection: 'column',
      },
      categorizedproduct_product_pricedetails_container:{
        flexDirection: 'row',
      },
      categorizedproduct_product_price_icon_container:{
        width: responsiveWidth(37.6),
        flexDirection:'row',
        alignItems:'center'
      },
      categorizedproduct_product_currency_icon_style:{
        paddingLeft:10,
        color :"#212121",
      },
      categorizedproduct_product_price_style:{
        fontSize: 15, 
        color:'black', 
        paddingLeft:5, 
        paddingBottom:2,
        paddingTop:2,
      },

      categorizedproduct_product_carticon_container:{
        width: responsiveWidth(9.4),
      },

      //Category Page
      categorypage_category_container:{
        flexDirection:'row',
      },
      categorypage_category_subContainer:{
        flexDirection:'column',
        backgroundColor:'white', 
        width: responsiveWidth(46), 
        height: responsiveHeight(35),
        marginLeft:10,
        marginTop:10
      },
      categorypage_category_image_container:{
        justifyContent:'center',
        alignItems:'center'
      },
      categorypage_category_image_style:{
        width: responsiveWidth(37), 
        height: responsiveHeight(26), 
        marginLeft: 10, 
        marginTop:3
      },
      categorypage_category_name_container:{
        flexDirection: 'column', 
        justifyContent:'center',
        alignItems:'center'
      },

       //CartPage
      cartpage_header_main_text_view:{
        alignItems:'center',
        width:responsiveWidth(65),
        justifyContent:'center',
      },
      cartpage_header_cart_view:{
        width:responsiveWidth(10),
        alignItems:'center',
        paddingTop:11
      },
      cartpage_cancel_cart_image:{
        height:responsiveHeight(3.5),
        width:responsiveWidth(6.3)
      },
      cartpage_total_main_container:{
        flexDirection:'column'
      },
      cartpage_total_container:{
        flexDirection:'row',
        height: responsiveHeight(4.5),
        marginTop:5,
        marginBottom:5,
        alignItems:'center',
        alignSelf:'center'
      },
      cartpage_total_text:{
        color:url.themeColor,
        fontSize:16,
        fontFamily:"OpenSans-Regular"
      },
      cartpage_total_cart_image:{
        height:responsiveHeight(3.5),
        width:responsiveWidth(6.3)
      },
      cartpage_total_amt_text:{
        color:url.themeColor,
        fontSize:16,
        fontFamily:"Montserrat-Bold"
      },
      cartpage_black_container:{
        backgroundColor:"#000",
        height:responsiveHeight(5),
        marginBottom:10,
      },
      cartpage_shopping_cart_text:{
        color:"#fff",
        fontSize:18,
        fontFamily:"OpenSans-Regular",
        paddingTop:2,
        alignSelf:"center"
      },
      cartpage_checkoutbtn_container:{
        height:responsiveHeight(8),
        backgroundColor:'#474747', 
        alignItems:'center',
        paddingTop:10
      },
      cartpage_checkoutbtn_text:{
        color:'white', 
        fontFamily:'OpenSans-Regular', 
        fontSize: 20,
      },
      cartpage_product_container_row:{
        flexDirection:'row'
      },
      cartpage_product_image_container:{
        marginLeft:2
      },
      cartpage_product_detail_container:{
        flexDirection:'column',
        paddingTop:10
      },
      cartpage_product_name_container:{
        flexDirection:'row',
      },
      cartpage_product_name_contains:{
        width: responsiveWidth(38)
      },
      cartpage_product_name_text:{
        color:'#000',
        fontSize:17,
        height: responsiveHeight(11),
        fontFamily:"OpenSans-Regular",
        paddingLeft:10,
      },
      cartpage_delete_icon:{
        height:responsiveHeight(3),
        width:responsiveWidth(4),
      },
      cartpage_inStock_text:{
        color:'#000',
        fontSize:13,
        fontFamily:"OpenSans-Regular",
        paddingLeft:10,
        textAlign:'left',
      },
      cartpage_product_amt_container:{
        flexDirection:'row',
      },
      cartpage_product_amt_text:{
        color:'#000',
        fontSize:19,
        fontFamily:"Montserrat-Bold",
        paddingLeft:5,
        textAlign:'left',
      },
      cartpage_less_container:{
        width:responsiveWidth(10),
        alignItems:'center',
        paddingTop:4,
      },
      cartpage_quantity_Container:{
        width:responsiveWidth(8),
        alignItems:'center',
        paddingTop:4,
      },
      cartpage_quantity_Text:{
        fontFamily:'OpenSans-Regular',
        fontSize:22,
        color:'black',
      },
      cartpage_add_container:{
        width:responsiveWidth(10),
        alignItems:'center',
        paddingTop:4,
      },


      //Login Css
      loginpage_main_container:{
        flex: 1,
        backgroundColor:url.themeColor

      },
      loginpage_submain_container:{
       height: responsiveHeight(90),

      },
      loginpage_header_main:{
        height: responsiveHeight(8),
        justifyContent:'center'
      },
      header_back_icon:{
        paddingLeft:15
      },
      loginpage_logo_container:{
        height:responsiveHeight(20),
        justifyContent:"flex-end",
        alignItems:'center',
        //backgroundColor:'white'
      },
      loginpage_logo:{
        width:responsiveWidth(39),
        height:responsiveHeight(23),
        borderRadius: 100
      },
      loginpage_heading_container:{
        height:responsiveHeight(10),
        alignItems:'center',
        justifyContent:"flex-start"
      },
      loginpage_heading_text:{
        fontSize:responsiveFontSize(3),
        color:'#212121',
        fontFamily:'Montserrat-Regular',
        fontWeight:'bold'
      },
      loginpage_username_field_container:{
        alignItems:'center'
      },
      loginpage_input_field:{
        height:responsiveHeight(6.5),
        marginLeft: 20,
        marginRight:20,
        backgroundColor: 'white',
        width: responsiveWidth(88),
        borderRadius:3,
      },
      loginpage_password_field_container:{
        alignItems:'center',
        marginTop:20
      },
      loginpage_loginbtn_container:{
        alignItems:'center',
        marginTop:20
      },
      loginpage_loginbtn_text_container:{
        width:responsiveWidth(88),
        height:responsiveHeight(6.5),
        backgroundColor:"#212121",
        borderRadius:3,
        alignItems:'center',
        justifyContent:'center'
      },
      loginpage_loginbtn_text:{
        color:'white',
        fontFamily:"Montserrat-Regular"
      },
      loginpage_forgot_password_container:{
        alignItems:'center',
        justifyContent:'center',
        paddingTop:13
      },
      loginpage_forgot_password_text:{
        color:'#212121'
      },
      loginpage_end_container:{
        alignItems:'center',
        justifyContent:'center',
        paddingLeft:20,
        flexDirection:'row'
      },
      loginpage_sign_up_text:{
        color:'#212121',
        textDecorationLine:'underline'
      },
      loginpage_help_bttn_container:{
        width:responsiveWidth(25),
        alignItems:'flex-start'
      },
      loginpage_help_icon_container:{
        width:responsiveWidth(8),
        height:responsiveHeight(4),
        backgroundColor:"#212121",
        borderRadius:3,
        alignItems:'center',
        justifyContent:'center',
        marginLeft:15
      },


  //Registration Css
   registration_header_main_text_view:{
    alignItems:"center",
    width:responsiveWidth(72),
    justifyContent:'center'
  },
  registrationpage_main_container:{
    height: responsiveHeight(88),
  },
  registrationpage_main_container2:{
    height: responsiveHeight(95),
  },
  registrationpage_heading_container:{
    marginTop:20,
  },
  registrationpage_heading_Text:{
    fontSize:19,
    fontFamily:'Montserrat-Medium',
    color:"#212121",
    paddingLeft:20,
  },
  registrationpage_input_field_container:{
    alignItems:'center',
    marginTop:10,
    marginBottom:10,
  },


registrationpage_next_container:{
  width:responsiveWidth(88),
  height:responsiveHeight(6.5),
  backgroundColor:url.themeColor,
  borderRadius:3,
  alignItems:'center',
  justifyContent:'center',
},
registrationpage_next_text:{
  color:'#212121',
  fontFamily:"Montserrat-Medium",
},
registrationpage_alreadyaccount_container:{
  flexDirection:'row',
  alignItems:'center',
  justifyContent:'center'
},
registrationpage_loginbtn_text:{
  color:url.themeColor
},
registrationpage_termsancdcondn:{
  marginTop:10,
  alignItems:'center', 
  justifyContent:'center'
},

  //ViewProduct
   viewproductpage_details_view:{
    flexDirection: 'row',
    width:responsiveWidth(33)
  },
  viewproductpage_details_container:{
    marginLeft:10,
    marginTop:10,
    flexDirection:'column',
  },
  viewproductpage_name_text:{
    fontSize: 17,
    width: responsiveWidth(45),
    color:'#000',
    fontFamily:"OpenSans-Regular"
  },
  viewproductpage_stock_text:{
    fontSize: 14,
    width: responsiveWidth(45),
    color:'#000',
    fontFamily:"OpenSans-Regular",
    marginTop:10
  },
  viewproductpage_price_container:{
    flexDirection:'row',
    alignItems:'center'
  },
  viewproductpage_amt_text:{
    fontSize: 20,
    fontWeight:'bold',
    width: responsiveWidth(45),
    color:'#000',
    fontFamily:"Montserrat-Regular",
    marginTop:10,
  },
  viewproductpage_amt_sign:{
    marginTop:10,
    paddingLeft:10
  },
  viewproductpage_side_main_container:{
    width:responsiveWidth(62),
    height:responsiveHeight(20),
    flexDirection:'column'
  },
  viewproductpage_addless_addtocart_container:{
    height:responsiveHeight(6)
  },
  viewproductpage_add_less_container:{
    flexDirection:'row',
    borderWidth:3,
    height:responsiveHeight(6),
    width:responsiveWidth(30),
    alignSelf:'center'
  },
  viewproductpage_less_container:{
    width:responsiveWidth(10),
    alignItems:'center'
  },
  viewproductpage_quantity_Container:{
    width:responsiveWidth(8),
    alignItems:'center'
  },
  viewproductpage_quantity_Text:{
    fontFamily:'OpenSans-Regular',
    fontSize:22,
    color:'black'
  },
  viewproductpage_add_container:{
    width:responsiveWidth(10),
    alignItems:'center'
  },
  viewproductpage_addtocart_container:{
    alignItems:'center',
    paddingTop:20
  },
  viewproductpage_addtocart_Text:{
    backgroundColor:url.themeColor,
    width:responsiveWidth(30),
    height:responsiveHeight(5),
    textAlign:'center',
    paddingTop:5,
    color:'black',
    fontFamily:'Montserrat-Regular',
    fontSize:12
  },
  viewproductpage_imageslider:{
    marginTop:20,
  },
  viewproductpage_tab_view:{
    height:responsiveHeight(30),
  },

  //Myorder Page Css
  orderpage_header_main_text_view:{
    alignItems:'center',
    width:responsiveWidth(70),
    justifyContent:'center',
  },
  orderpage_product_main_container:{
    height:responsiveHeight(28),
    marginTop:5,
    backgroundColor:'white',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1.0,
  },
  orderpage_date_id_container:{
    flexDirection:'row' ,
    height:responsiveHeight(7),
    width:responsiveWidth(89),
    borderBottomWidth:0.5,
    borderColor:'#eeeeee',
    alignSelf:'center'
  },
  orderpage_date_container:{
    justifyContent:'center',
    width:responsiveWidth(60),
  },
  orderpage_date_text:{
    fontSize:13,
    fontFamily:'Montserrat-Regular',
    paddingTop:7,
    color:'#212121'
  },
  orderpage_id_container:{
    justifyContent:'center',
    width:responsiveWidth(40)
  },
  orderpage_id_text:{
    fontSize:13,
    fontFamily:'Montserrat-Regular',
    paddingTop:7,
    color:url.themeColor
  },
  orderpage_image_name_container:{
    flexDirection:'row' ,
    height:responsiveHeight(15),
    width:responsiveWidth(88),
    borderBottomWidth:0.5,
    borderColor:'#eeeeee',
    alignSelf:'center'
  },
   orderpage_name_container:{
    justifyContent:'center',
    marginLeft:10
  },
  orderpage_name_text:{
    fontSize:20,
    fontFamily:'Montserrat-Regular',
    paddingTop:7,
    color:'#212121'
  },
  orderpage_total_status_container:{
    flexDirection:'row' ,
    height:responsiveHeight(7),
    width:responsiveWidth(89),
    borderBottomWidth:0.5,
    borderColor:'#eeeeee',
    alignSelf:'center'
  },
  orderpage_total_container:{
    flexDirection:'row' ,
    width: responsiveWidth(69),
    alignItems:'center'
  },
  orderpage_total_text:{
    fontSize:13,
    fontFamily:'Montserrat-Regular',
    paddingBottom:5,
    color:'#212121',
    paddingLeft:2
  },
  orderpage_status_container:{
    justifyContent:'center'
  },
  orderpage_status_text:{
    fontSize:13,
    fontFamily:'Montserrat-Regular',
    paddingBottom:5,
    color:'#212121',
    paddingLeft:2
  },

  //OrderDetails
   orderviewpage_header_main_text_view:{
    alignItems:'center',
    width:responsiveWidth(70),
    justifyContent:'center',
  },
  orderviewpage_basic_details_container:{
    flexDirection:'row',
    height: responsiveHeight(16),
    backgroundColor:'#ffffff',
    borderBottomWidth:2,
    borderColor:'#DDDDDD',
  },
  first_container_2:{
    justifyContent:'center'
  },
  orderviewpage_order_id_date_container:{
    height:responsiveHeight(15.5),
    width:responsiveWidth(70),
    justifyContent:'center',
    marginLeft:15,
    marginTop:5
  },
  orderviewpage_order_id_text:{
    color:'#000',
    fontFamily:'OpenSans-Regular',
    fontSize:18
  },
  orderviewpage_order_date_text:{
    color:'#282828',
    fontFamily:'OpenSans-Regular',
    fontSize:14
  },
  orderviewpage_order_status_container:{
    justifyContent:'center',
    alignItems:'center'
  },
  orderviewpage_order_status_text:{
    color:url.themeColor,
    fontFamily:'OpenSans-Regular',
    fontSize:18
  },
  orderviewpage_shipping_details_container:{
    flexDirection:'column',
    height:responsiveHeight(32),
    backgroundColor:'#ffffff',
    borderBottomWidth:2,
    borderColor:'#DDDDDD'
  },
  orderviewpage_blank_space_container:{
    flexDirection:'row',
    height:responsiveHeight(3)
  },
  orderviewpage_shipping_name_text_container:{
    flexDirection:'row',
    height:responsiveHeight(5),
    width:responsiveWidth(50),
    marginLeft:15
  },
  orderviewpage_name_text:{
    color:'#000',
    fontFamily:'OpenSans-Regular',
    fontSize:18,
    marginLeft:5
  },
  orderviewpage_phone_text:{
    color:'#000',
    fontFamily:'OpenSans-Regular',
    fontSize:18,
    marginLeft:20
  },
  orderviewpage_address_container:{
    flexDirection:'column',
    height:responsiveHeight(17),
    width:responsiveWidth(45),
    marginLeft:32
  },
  orderviewpage_address_text:{
    color:'#282828',
    fontFamily:'OpenSans-Regular',
    fontSize:15,
    marginLeft:8
  },
  orderviewpage_email_container:{
    flexDirection:'row',
    height:responsiveHeight(5),
    width:responsiveWidth(80),
    marginLeft:15
  },
  orderviewpage_email_text:{
    color:'#000',
    fontFamily:'OpenSans-Regular',
    fontSize:18,
    marginLeft:8
  },
  orderviewpage_product_detail_container:{
    flexDirection:'column',
    height:responsiveHeight(10),
    backgroundColor:'#ffffff'
  },
  orderviewpage_product_des_text_container:{
    marginLeft:15,
    height:responsiveHeight(7)
  },
  orderviewpage_product_des_text:{
    color:'#000',
    fontFamily:'OpenSans-Regular',
    fontSize:18
  },
  orderviewpage_amount_description_main_container:{
    height:responsiveHeight(43),
    backgroundColor:'#ffffff',
    borderBottomWidth:2,
    borderColor:'#DDDDDD',
    borderTopWidth:2
  },
  orderviewpage_amount_description_inner_container:{
    flexDirection:'column'
  },
  orderviewpage_subtotal_container:{
    alignItems:'center',
    height:responsiveHeight(8),
    flexDirection:'row'
  },
  orderviewpage_subtotal_text_conatiner:{
    width:responsiveWidth(65),
    marginLeft:15,
    borderBottomWidth:2,
    borderColor:'#f2f2f2'
  },
  orderviewpage_subtotal_text:{
    color:'#000',
    fontFamily:'OpenSans-Regular',
    fontSize:18
  },
  orderviewpage_subtotal_amt_container:{
    flexDirection:'row',
    justifyContent:'flex-end',
    borderBottomWidth:2,
    borderColor:'#f2f2f2',
    alignItems:'flex-end',
    width:responsiveWidth(25)
  },
  orderviewpage_subtotal_amt_text:{
    color:'#000',
    fontFamily:'OpenSans-Regular',
    fontSize:18
  },
  orderviewpage_delivery_and_amt_container:{
    alignItems:'center',
    height:responsiveHeight(8),
    flexDirection:'row'
  },
  orderviewpage_delivery_text_container:{
    width:responsiveWidth(77),
    borderBottomWidth:2,
    borderColor:'#f2f2f2',
    marginLeft:15
  },
  orderviewpage_delivery_text:{
    color:'#000',
    fontFamily:'OpenSans-Regular',
    fontSize:18
  },
  orderviewpage_delivery_amt_container:{
    borderBottomWidth:2,
    borderColor:'#f2f2f2',
    alignItems:'flex-end',
    width:responsiveWidth(13)
  },
  orderviewpage_delivery_amt_text:{
    color:'#000',
    fontFamily:'OpenSans-Regular',
    fontSize:18
  },
  orderviewpage_discount_and_amt_container:{
    alignItems:'center',
    height:responsiveHeight(8),
    flexDirection:'row'
  },
  orderviewpage_discount_text_container:{
    width:responsiveWidth(77),
    borderBottomWidth:2,
    borderColor:'#f2f2f2',
    marginLeft:15
  },
  orderviewpage_discount_text:{
    color:'#000',
    fontFamily:'OpenSans-Regular',
    fontSize:18
  },
  orderviewpage_discount_amt_container:{
    borderBottomWidth:2,
    borderColor:'#f2f2f2',
    alignItems:'flex-end',
    width:responsiveWidth(13)
  },
  orderviewpage_discount_amt_text:{
    color:'#000',
    fontFamily:'OpenSans-Regular',
    fontSize:18
  },
  orderviewpage_total_and_amt_container:{
    alignItems:'center',
    height:responsiveHeight(8),
    flexDirection:'row'
  },
  orderviewpage_total_text_container:{
    width:responsiveWidth(70),
    marginLeft:15
  },
  orderviewpage_total_text:{
    color:'#000',
    fontFamily:'OpenSans-Regular',
    fontSize:18
  },
  orderviewpage_total_amt_container:{
    flexDirection:'row',
    alignItems:'flex-end',
    justifyContent:'flex-end',
    width:responsiveWidth(20)
  },
  orderviewpage_total_amt_text:{
    color:'#000',
    fontFamily:'OpenSans-Regular',
    fontSize:18
  },
  orderviewpage_track_button_container:{
    height:responsiveHeight(10),
    backgroundColor:'#ffffff',
    borderBottomWidth:2,
    borderColor:'#DDDDDD',
    justifyContent:'center',
    alignItems:'center'
  },
  orderviewpage_track_text_conatiner:{
    borderWidth:1,
    borderColor:url.themeColor,
    height:responsiveHeight(6),
    width:responsiveWidth(22),
    justifyContent:'center'
  },
  orderviewpage_track_text:{
    color:url.themeColor,
    fontFamily:'OpenSans-Regular',
    fontSize:16,
    textAlign:'center'
  },
  orderviewpage_product_main_container:{
    height:responsiveHeight(5),
    backgroundColor:'#fff',
    justifyContent:'center'
  },
  orderviewpage_product_name_and_price_container:{
    marginLeft:15,
    flexDirection:'row'
  },
  orderviewpage_product_name_container:{
    width:responsiveWidth(70)
  },
  orderviewpage_product_name_text:{
    color:'#282828',
    fontFamily:'OpenSans-Regular',
    fontSize:14
  },
  orderviewpage_product_price_container:{
    flexDirection:'row',
    justifyContent:'flex-end',
    alignItems:'flex-end',
    width:responsiveWidth(20)
  },
  orderviewpage_product_price_text:{
    color:'#282828',
    fontFamily:'OpenSans-Regular',
    fontSize:14
  },

 // MyAccount page Css
   myaccountpage_details_container:{
     alignItems:'center'
   },
   myaccountpage_basic_details_main_container:{
   height:responsiveHeight(15),
   backgroundColor:'#fff',
   width:responsiveWidth(88),
   borderRadius:3,
   marginTop:20
 },
 myaccountpage_heading_edit_container:{
   height:responsiveHeight(6),
   flexDirection:'row'
 },
 myaccountpage_heading_container:{
   width:responsiveWidth(80)
 },
 myaccountpage_heading_text:{
   fontFamily:'Montserrat-SemiBold',
   color:'#212121',
   fontSize:16,
   paddingTop:5,
   paddingLeft:10
 },
 myaccountpage_edit_button_container:{
   width:responsiveWidth(25)
 },
 myaccountpage_edit_icon:{
   width:responsiveWidth(4),
   height:responsiveHeight(2),
   marginTop:10
 },
 myaccountpage_inputfield_container:{
   height:responsiveHeight(4.5)
 },
 myaccountpage_inputfield_text:{
   fontFamily:'Montserrat-Light',
   color:'#212121',
   fontSize:13,
   paddingLeft:10
 },
 myaccountpage_billing_details_main_container:{
   height:responsiveHeight(33),
   backgroundColor:'#fff',
   width:responsiveWidth(88),
   borderRadius:3,
   marginTop:20
 },
 myaccountpage_shipping_details_main_container:{
   height:responsiveHeight(25),
   backgroundColor:'#fff',
   width:responsiveWidth(88),
   borderRadius:3,
   marginTop:20
 },
 myaccountpage_loginoutbtn_container:{
  height:responsiveHeight(6),
  justifyContent:'center',
  alignItems:'center',
  backgroundColor:url.themeColor,
  width:responsiveWidth(88),
  borderRadius:3,
  marginTop:20,
  marginBottom:20
 },
 myaacountpage_loginoutbtn_text:{
  fontFamily:'Montserrat-SemiBold',
  fontSize:15,color:'#212121'
 },
 //SearchPage
 searchpage_header_main_text_view:{
    alignItems:"center",
    width:responsiveWidth(72),
    justifyContent:'center'
  },
  searchpage_search_container: {
    flexDirection: 'column'
    ,backgroundColor: url.themeColor,
  },
   searchpage_searchInput: {
    marginTop:5,
    marginBottom: 10,
    borderRadius: 5,
    marginLeft:13,
    width:responsiveWidth(93),
    height:responsiveHeight(5),
    paddingLeft:35,
    backgroundColor:'white',
    paddingBottom:5.8
  },
  searchpage_search_icon: {
    position: 'absolute',
    left: 21,
    top: 10
  },
});
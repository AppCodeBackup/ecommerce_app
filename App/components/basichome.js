import React, { Component } from 'react';
import {
	View,
	Text,
	StatusBar,
	TouchableOpacity,
  StyleSheet,
  TouchableHighlight,
  Image,
	ScrollView,
	TextInput,
	AsyncStorage,
	ListView,
} from 'react-native';
import * as Progress from 'react-native-progress';
import Api from '../utils/WooCommerce/Api';

const customerDetails ='';
const SystemStatus = '';

export default class Validation extends Component {
  constructor(props){
    super(props);
		this.state = {
			Currency:'',
		}
  }
  componentWillMount(){
    this.getData();

  }

	getStatus(){
		AsyncStorage.getItem('SystemStatus').then((value) => {
      if(value == null){
        SystemStatus = null;
      }else{
        SystemStatus = JSON.parse(value);
      }
    }).done(() => this.change());
	}

  getData(){
    AsyncStorage.getItem('CustomerDetails').then((value) => {
      if(value == null){
        CustomerDetails = null;
      }else{
        CustomerDetails = JSON.parse(value);
      }
    }).done(() => this.change());
  }

  change(){
    if(CustomerDetails != null){
				return this.props.navigation.navigate('home', {userData:{Customer: CustomerDetails}});
    }else{
      return this.props.navigation.navigate('home',{userData:''});
    }
  }

	callStatus(){
			Api.get('system_status', {

			}).then(function (data) {
				console.log("System Status:- "+data.settings.currency);
				AsyncStorage.setItem("SystemStatus", JSON.stringify(data[0]));
			}).done(() => this.getStatus());
	}

  render(){
    return(
      <View style={{flex: 1,justifyContent: 'center',alignItems:'center'}}>
        <Progress.CircleSnail color={['red', 'green', 'blue']}  />
      </View>
    );
  }
}

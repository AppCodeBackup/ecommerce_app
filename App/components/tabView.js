import React, { PureComponent } from 'react';
import { View, StyleSheet,Text,ScrollView,ImageBackground} from 'react-native';
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';
import { responsiveHeight, responsiveWidth} from 'react-native-responsive-dimensions';
import ViewProduct from './viewproduct';

const Description = () => <ScrollView><View style ={styles.container}>
                            <Text style={{paddingTop:10,paddingLeft:10,textAlign:'justify'}}>{pro.description.replace(/<[^>]*>/g, '')}</Text>
                          </View></ScrollView>;
const About = () =>       <ScrollView><View style ={styles.container}>
                            <Text style={{paddingTop:10,paddingLeft:10,textAlign:'justify'}}>{pro.short_description.replace(/<[^>]*>/g, '')}</Text>
                          </View></ScrollView>;
const pro =[];

export default class TabView extends PureComponent {
  state = {
    index: 0,
    pro:[''],
    routes: [
      { key: '1', title: 'Description' },
      { key: '2', title: 'About' },
    ],
  };


  _handleIndexChange = index => this.setState({ index });

  _renderHeader = props => <TabBar
                              {...props}
                              style = {{backgroundColor:"#fff"}}
                              labelStyle = {{color:"#000",fontFamily:"Montserrat-Regular",fontSize:12}}
                              tabStyle = {{width:responsiveWidth(33)}}
                              indicatorStyle = {{backgroundColor:"#3d9857"}} />;

  _renderScene = SceneMap({
    '1': Description,
    '2': About,
  });

  render() {
    pro = this.props.value;
      return (
        <TabViewAnimated
          style={styles.container}
          navigationState={this.state}
          renderScene={this._renderScene}
          renderHeader={this._renderHeader}
          onIndexChange={this._handleIndexChange}
        />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    width:responsiveWidth(100),
    height:responsiveHeight(100),
    backgroundColor:'#e0d4c2',
  },
});

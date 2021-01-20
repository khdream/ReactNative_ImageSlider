import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Grid,
  Col,
  Item,
  TouchableOpacity,
  Image,
  Alert,
  FlatList,
  ScrollView,
  Dimensions,
  
} from 'react-native';

import ImageGallery from './app/components/ImageGallery'

const device = Dimensions.get('window');
let SampleData = [
  {title : 'aadddaa',image : require("./app/assets/uploads/project/pj_3.jpg")},
  {title : 'aaada',image : require("./app/assets/uploads/project/pj_2.png")},
  {title : 'bbb',image : require("./app/assets/uploads/project/pj_26.jpg")},
  {title : 'ccdddc',image : require("./app/assets/uploads/project/pj_23.jpg")}
  ]

const ITEM_SIZE = device.width/3
const ITEM_HEIGHT = 120

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
      }
      render() {
        return (
            <View style = {{flex : 1, flexDirection : 'column'}}>
                <View style = {styles.container} >
                    <View style = {{flex:1}}>
                          <ImageGallery
                                data={SampleData}
                                height={ITEM_HEIGHT}
                                width={ITEM_SIZE}
                                title={'Welcome'}
                                subTitle={'Choose your character'}
                                primaryBackgroundColor = '#4528AC'
                                secondaryBackgroundColor = '#d3d3d3'
                                textPrimaryColor = '#fff'
                                textSecondaryColor = '#000'
                                />
                      </View>
                    </View> 
            </View>
        );
      }
    }

const styles = StyleSheet.create({

  container:{
    flex : 1,
    flexDirection : 'column',
    justifyContent : 'flex-start',
    width : '100%',
    backgroundColor: '#fff'
},
}); 

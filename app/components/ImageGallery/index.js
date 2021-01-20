import * as React from 'react';
import { 
  Text,
  Animated,
  Dimensions, 
  View,
  Image,
  ImageBackground,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity, 
  TouchableWithoutFeedback
} from 'react-native';

const { width, height } = Dimensions.get('window');

export default class AnimationFlatlist extends React.Component {
    constructor(props) {
        super(props);
        this.state={
        scrollX : new Animated.Value(0),
        }
    }
 render()
 {
  const {scrollX} = this.state
  return (
    <SafeAreaView style={styles.container}>
      <Animated.FlatList 
          horizontal
          data = {this.props.data}
          initialScrollIndex = {0.66}
          keyExtractor = {(item,index)=> item.title+index}
          scrollEventThrottle={16}
          showsHorizontalScrollIndicator={false}
          bounces={false}
          snapToInterval={this.props.width}
          decelerationRate={0.2}
          renderItem = {this.renderItem}
          onScroll={Animated.event(
            [{nativeEvent:{contentOffset:{x:scrollX}}}],
            {
              useNativeDriver:false
            }
          )}
      />
    </SafeAreaView>
  );
 }

renderItem = ({item,index}) =>
{
  var ITEM_SIZE = this.props.width
  let translateY = this.state.scrollX.interpolate({
    inputRange:[
                (index-1)*ITEM_SIZE,
                index*ITEM_SIZE,
                (index+1)*ITEM_SIZE,
            ],
    outputRange:[0.9,1.1,0.9]
  })
 
  return (
    <Animated.View 
            key={index+1+'ll'} 
            style = {{
                marginLeft:(index==0 ? (width-ITEM_SIZE)/2 : 0),
                marginRight:(index == this.props.data.length-1 ? (width-ITEM_SIZE)/2 : 0) , 
                marginHorizontal :10,
                height:this.props.height, 
                // borderRadius:8,
                overflow:'hidden', 
                alignSelf:'center',
                width:ITEM_SIZE,
                transform:[{scaleX:translateY},{scaleY:translateY}],
                backgroundColor:'#fff'
                }}>
            <ImageBackground resizeMode={'stretch'} style = {{
                    flex:1,
                    width:'100%',
                    // borderRadius:8
                    }} source = {require('./images/placeholder.png')}>
                {/* <Animated.Image style = {{ flex:1,width:'100%',borderRadius:6}} source = {{uri:item.image}}/> */}
                
                <View style={{
                      // flex:1, 
                      elevation: 4,
                      width:'100%',
                      height:'90%',
                      backgroundColor:'#fff'
                      }}>
                     <Animated.Image style = {{ 
                              flex:1,
                              width:'100%',
                              resizeMode:'stretch'
                              }} source = {item.image}/>
                </View>
            </ImageBackground>
    </Animated.View>
  )
  
}
 
}

 


const styles = StyleSheet.create({
  container: {
    flex: 1, 
    // backgroundColor: 'red'
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});


AnimationFlatlist.defaultProps = {
  data: [ {title : 'Title',subTitle:'Dance with',image : ''},
  {title : 'Title',image :''}],
  height: height/2,
  width: width-120,
  title:'Title',
  subTitle:'Subtitle',
  primaryBackgroundColor :'#4528AC',
  secondaryBackgroundColor : '#fff',
  textPrimaryColor : '#fff',
  textSecondaryColor : '#000',
  

};


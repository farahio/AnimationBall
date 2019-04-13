import React, { Component } from 'react';
import { View, StyleSheet, PanResponder, Animated, Dimensions, Image } from 'react-native';


const colors = {
   blue: "#F5F556",
   red: "#f33",
   light:"#56F584"
}

const Dim = Dimensions.get('window')

export default class Pan extends Component {


   constructor(props) {
      super(props)
      const position = new Animated.ValueXY()
      const panResponder = PanResponder.create({
         onStartShouldSetPanResponder: (evt, gestureState) => true,
         onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
         onMoveShouldSetPanResponder: (evt, gestureState) => true,
         onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,


         onPanResponderMove: (event, gesture) => {
            position.setValue({ x: gesture.dx, y:0 })
         },

         onPanResponderRelease: (e, gesture) => {
            Animated.spring(this.state.position, {
              toValue: 0,
              friction: 5,
              useNativeDriver:true
            }).start();
          },
      })
      this.state = {
         panResponder,
         position,
         
      }
   }
   render() {
     
      let handles = this.state.panResponder.panHandlers
      return (
         <View style={styles.container} >
      
         <Animated.View style={[styles.Square, {transform: [{ translateX: this.state.position.x }] }]} {...handles}>

            
         </Animated.View>
         </View>
      );
   }
}


const styles = StyleSheet.create({
   container:{
      flex:1,
      justifyContent: 'center',
      alignItems: 'center',
   },
   circle: {
      height: 100,
      width: 100,
      borderRadius: 100,
      justifyContent: 'center',
      alignItems: 'center',
   },
   Square:{
      width:150,
      height:50,
      backgroundColor:'pink'
   },
   icons: {
      width: 100,
      height: 100,
      borderRadius: 100,

   },
   bed:{
      position:'absolute',
      zIndex: -1,

   },
   moon:{
      position:'absolute',
      zIndex: -1,
      left:2,
      top:2
   },
   girl:{
      position: 'absolute',
      zIndex: -1,
      right:-30,

   },
   space:{
      position:'absolute',
      zIndex: -1,
      top:0,
      right:0
   }
});



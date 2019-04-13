import React, { Component } from 'react';
import { View, StyleSheet, PanResponder, Animated, Dimensions, Image } from 'react-native';


const colors = {
   blue: "#F5F556",
   red: "#f33",
   light:"#56F584"
}

const Dim = Dimensions.get('window')

export default class Grant extends Component {


   constructor(props) {
      super(props)
      const circle = {
            redcircle:<View style={{width:60,height:60,backgroundColor:"red",borderRadius:50}}/>,
            bluecircle:<View style={{width:60,height:60,backgroundColor:"blue",borderRadius:50}}/>,
            yellowcircle:<View style={{width:60,height:60,backgroundColor:"#B31CBA",borderRadius:50}}/>,
            greencircle:<View style={{width:60,height:60,backgroundColor:"#C5A1C7",borderRadius:50}}/>,
      }
     
      const position = new Animated.ValueXY()
      const panResponder = PanResponder.create({
         onStartShouldSetPanResponder: (evt, gestureState) => true,
         onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
         onMoveShouldSetPanResponder: (evt, gestureState) => true,
         onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
         onPanResponderMove: (event, gesture) => {
            position.setValue({ x: gesture.dx, y: gesture.dy })


            


            if( Math.abs(gesture.dx) > 40 || Math.abs(gesture.dy) > 80){
               this.setState({currentcircle:circle.greencircle})
            }else{
               this.setState({currentcircle:circle.bluecircle})
            }
            
         },
         onPanResponderGrant: (evt, gestureState) => {
            this.setState({ color: colors.light })

         },
         onPanResponderRelease: (evt, gestureState) => {
            this.setState({ color: colors.blue })
            if (Math.abs(gestureState.dx) < 20 && Math.abs(gestureState.dy) < 40) {
               this.setState({ currentcircle: circle.yellowcircle })
            }


            if (gestureState.dy < - Dim.height * (35 / 100)) {
               Animated.timing(this.state.position.y, {
                  toValue: -Dim.height * (60 / 100),
                  timing: 50,
                  useNativeDriver: true
               }).start(() => {
                  position.setValue({ x: 0, y: Dim.height * (60 / 100) });
                  Animated.timing(this.state.position.y, {
                     toValue: 0,
                     timing: 300,
                     useNativeDriver: true
                  }).start(() => { this.setState({ currentcircle: circle.greencircle }) })
               })
            } else {
               Animated.timing(this.state.position, {
                  toValue: 0,
                  timing: 500,
                  useNativeDriver: true
               }).start(() => { this.setState({ currentcircle: circle.redcircle }) })
            }


         }

      })
      this.state = {
         panResponder,
         position,
         color: colors.blue,
         currentcircle:circle.redcircle

      }
   }
   render() {
     
      let handles = this.state.panResponder.panHandlers
      return (
         <View style={styles.container} >
         <Animated.View style={[styles.circle, { backgroundColor: this.state.color, transform: [{ translateX: this.state.position.x }, { translateY: this.state.position.y }] }]} {...handles}>

            {this.state.currentcircle}
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



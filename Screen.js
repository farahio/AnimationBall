import React, { Component } from "react";
import { StyleSheet, View, Text ,Animated,PanResponder} from "react-native";
import Draggable from "./Draggable"

export default class Screen extends Component {
    constructor(props){
    super(props)
    this.state = {
      showDraggable: false,
      dropAreaValues: null,
      pan: new Animated.ValueXY(),
      opacity: new Animated.Value(1)
    };
  }
  componentWillMount()
  {
   
    this.panResponder = PanResponder.create({

        onPanResponderRelease: (e, gesture) => {
            if (this.isDropArea(gesture)) {
              Animated.timing(this.state.opacity, {
              toValue: 0,
              duration: 1000
            }).start(() =>
              this.setState({
                 showDraggable: true
              })
            );
          } else {
            Animated.spring(this.state.pan, {
              toValue: { x: 0, y: 0 },
              friction: 5
            }).start();
          }
        },
      isDropArea(gesture) {
        return gesture.moveY < 200;
      }
    })}


     
     


  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.dropZone}>
          <Text style={styles.text}>Drop them here!</Text>
        </View>
        <View style={styles.ballContainer} />
        <View style={styles.row}>
          <Draggable />
          <Draggable />
          <Draggable />
          <Draggable />
          <Draggable />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1
  },
  ballContainer: {
    height:200
  },
  row: {
    flexDirection: "row"
  },  
  dropZone: {
    height: 200,
    backgroundColor: "#00334d"
  },
  text: {
    marginTop: 25,
    marginLeft: 5,
    marginRight: 5,
    textAlign: "center",
    color: "#fff",
    fontSize: 25,
    fontWeight: "bold"
  }
});

import React, {Component} from 'react';
import { View, ScrollView, Text, Animated, PanResponder } from 'react-native';
export default class Ball extends Component {
 
    state={
        time:" "
    }
 
    componentDidMount(){
        setInterval(()=>{
                this.setState({time:new Date().toLocaleString().splite("") [1]});
        },1000)
    }
    render() {
        return (
            <View>
                <Text time={this.state.time}>Time</Text>
            </View>
            
        )
    }
}
 
 
const styles = {
    cardContainer: {
        minHeight: 1000,
        flex: 1,
        backgroundColor: '#f3f3f3'
    },

}
 
 
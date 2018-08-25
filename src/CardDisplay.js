import React, {Component } from 'react';
import {
    View,
    Text,
} from 'react-native';


class MainDisplay extends Component{
    componentWillMount(){
    
    }
    
    render(){
        return(
            <View style = {styles.cardComponent}>
                <View style = {styles.mainCardView}>
                    <Text style = {styles.weatherDesctiption} > Broken Clouds</Text>
                    <Text style = {styles.temp} > 29.6</Text>
                    <Text style = {styles.minMax} > min: 23 max: 34</Text>
                    <Text style = {styles.country} > Country: IN</Text>
                </View>
            </View>    
    )
    }
}

const styles  = {
    cardComponent:{
        width:'100%',
        height:'50%',
        backgroundColor:'#FFF',
        borderRadius:30,
    },
    mainCardView:{
        flex:1,
        padding:30,
        justifyContent:'space-around',
        alignItems:'center'
    },
    weatherDesctiption:{
        fontWeight:'bold',
        fontSize:20,
    },
    temp:{
        fontSize:90,
    },
    minMax:{
        fontWeight:'bold',
    },
    country:{
        fontWeight:'bold',
    }
}
export default MainDisplay;
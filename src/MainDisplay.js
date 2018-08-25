import React, {Component } from 'react';
import {
    View,
    Text,
} from 'react-native';


class MainDisplay extends Component{
    render(){
        return(
            <View>
                <Text style = {styles.mainHeading}>Thalassery</Text>
                <Text style = {styles.subHeading}>Clouds</Text>
            </View>    
    )
    }
}

const styles  = {
    mainHeading:{
        color:'#FFF',
        fontSize:50,

    },
    subHeading:{
        color:'#FFF',
        fontSize:20,
    }
}
export default MainDisplay;
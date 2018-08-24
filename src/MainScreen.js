import React, {Component } from 'react';
import {
    View,
    Text,
    Image
} from 'react-native';
import {api} from './api.js';// get your api key from   https://openweathermap.org
import axios from 'axios';

class MainScreen extends Component{
    componentDidMount() {
        axios.get('https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid='+{api})//api key is hidden
          .then(res => {
            console.log(res.data);
            alert(res.data.coord.lon)
          })
      }
    
    render(){
        return(
            <View style = {{height:100+'%',width:100+'%'}}>
            <Image style = {{flex:1}}source = {{uri: 'https://images.pexels.com/photos/1182702/pexels-photo-1182702.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'}}/>
            </View>    
    )
    }
}

const styles  = {
    
}
export default MainScreen;
import React, {Component } from 'react';
import {
    View,
    TextInput,
    ImageBackground
} from 'react-native';
import {api} from './api.js';// get your api key from   https://openweathermap.org
import axios from 'axios';
import MainDisplay from './MainDisplay';
import CardDisplay from './CardDisplay';

class MainScreen extends Component{
    componentDidMount() {
        axios.get('https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid='+{api})//api key is hidden
          .then(res => {
            console.log(res.data);
          })
      }
    
    render(){
        //the image is taken from pexels.com
        const imageUrl = 'https://images.pexels.com/photos/113338/pexels-photo-113338.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940';
        return(
            <View style = {{height:100+'%',width:100+'%'}}>
            <ImageBackground style = {styles.mainimage}source = {{uri: imageUrl}}>
                <View style = {styles.textInputView}>
                    <TextInput
                    placeholder = "Search City"
                    />
                </View>
                <View style = {{flex:1,justifyContent:'space-between',}}>
                    <MainDisplay />
                    <CardDisplay/>
                </View>
            </ImageBackground>
            </View>    
    )
    }
}

const styles  = {
    mainimage:{
        flex:1,
        justifyContent:'space-between',
        padding:20,
    },
    textInputView:{
        backgroundColor:'#fff',
        padding:5,
        borderRadius:10,
    }
}
export default MainScreen;
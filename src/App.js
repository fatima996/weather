import React, { Component } from 'react';

import './styles/App.css';
import 'semantic-ui-css/semantic.min.css';
//import { Image, List, Card } from 'semantic-ui-react'
import Title from './components/Title'
import Form from './components/Form'
import Weather from './components/Weather'

const API_KEY='your api';


class App extends Component {

  state={

    temp: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    icon: undefined,
    err:undefined
     
  }

  getWeather= async(e)=>{
    e.preventDefault();
    const city=e.target.elements.city.value;
    const country=e.target.elements.country.value;
    if (city!=="" && country !==""){
    const api_call= await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`); 
    const data = await api_call.json();
    
    
    console.log(data); 
    
    this.setState({
    temp: data.main.temp,
    city: data.name,
    country: data.sys.country,
    humidity: data.main.humidity,
    description: data.weather[0].description,
    icon:data.weather[0].icon,
    err:""

    
  });

  }else{
    console.log(this.state.err);
    this.setState({

    err:"Plese enter a city to get your data"
    });
  }}

 

  render() {
    return (
      <div className="App">
      <div className="App-header">
      Welcome! I wish you enjoy time you spend on this page :)
      <Title/>
      <Form getWeather={this.getWeather}/>
      <Weather
      temp={this.state.temp}
      city={this.state.city}
      country={this.state.country}
      humidity={this.state.humidity}
      description={this.state.description}
      icon={this.state.icon}
      err={this.state.err}
      />


      </div>
     
    </div>
    );
  }
}

export default App;

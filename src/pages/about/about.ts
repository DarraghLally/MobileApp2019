import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

//My Imports
import {Geolocation} from '@ionic-native/geolocation';
import {OpenweatherProvider} from '../../providers/openweather/openweather';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  //For lat and long
  lat: number;
  long: number;

  //For weather info from API
  description: string; 
  temp: number;
  windSpeed: number;
  windDirectIn: number;
  windDirectCompass: string;
  city: string;

  //For compass heading
  degree = 360/8;
  angle: number;

  //For Celcius/Farenheit conversion
  cTemp: number;
  returnCTemp: string;
  fTemp: number;
  returnFTemp: string;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private geo: Geolocation, private weather: OpenweatherProvider) {
  }//constructor

  ionViewDidLoad(){
    this.geo.getCurrentPosition().then((data) => {
      this.lat = data.coords.latitude;
      this.long = data.coords.longitude;
      //console.log("Lat: " + this.lat);
      //console.log("Lat: " + this.long);
      this.getMyWeather();
      }).catch((error) => {
      console.log('Error getting location', error);
    });
  }//didload()

  //New function called in ionViewDidLoad - happens after coords are found, 
    //if called at same time as finding coords, no lat or long passes into provider.
  getMyWeather(){
    this.weather.getWeather(this.lat, this.long).subscribe((data)=>{
      this.description = data.weather[0].description;
      this.temp = data.main.temp;
      this.getDegreeC();
      this.getDegreeF();
      this.windSpeed = data.wind.speed;
      this.windDirectIn = data.wind.deg;
      this.getWindBearing();
      this.city = data.name;    
    });
  }

  //Convert Kelvin to Farenheit
  getDegreeF(){
    this. fTemp = this.temp * (9 / 5) - 459.67;
    this.returnFTemp = this.fTemp.toFixed(1);
  }

  //Convert Kelvin to Celcius
  getDegreeC(){
    this.cTemp = this.temp - 273;
    this.returnCTemp = this.cTemp.toFixed(1);
  }

  //Convert wind direction in degrees to Compass heading - N,S,E,W etc
  getWindBearing(){
    this.angle = this.windDirectIn + this.degree / 2; 
    
    if(this.angle >= 0 * this.degree && this.angle < 1 * this.degree){
      this.windDirectCompass = 'North';
    }
    if(this.angle >= 1 * this.degree && this.angle < 2 * this.degree){
      this.windDirectCompass = 'North East';
    }
    if(this.angle >= 2 * this.degree && this.angle < 3 * this.degree){
      this.windDirectCompass = 'East';
    }
    if(this.angle >= 3 * this.degree && this.angle < 4 * this.degree){
      this.windDirectCompass = 'South East';
    }
    if(this.angle >= 4 * this.degree && this.angle < 5 * this.degree){
      this.windDirectCompass = 'South';
    }
    if(this.angle >= 5 * this.degree && this.angle < 6 * this.degree){
      this.windDirectCompass = 'South West';
    }
    if(this.angle >= 6 * this.degree && this.angle < 7 * this.degree){
      this.windDirectCompass = 'West';
    }
    if(this.angle >= 7 * this.degree && this.angle < 8 * this.degree){
      this.windDirectCompass = 'North West';
    }

  }
}//Class

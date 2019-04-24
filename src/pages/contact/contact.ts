import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

//Imports
import {Geolocation} from '@ionic-native/geolocation';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  //For lat and long
  lat: number;
  long: number;

  //For Latitude conversion to Degrees, mins, secs
  finalLatDegree: string;
  latMin: number;
  returnLatMin: number;
  finalLatMin: string;
  latSec: number;
  returnLatSec: number;
  finalLatSec: string;
  compassHeadingLat: string;

  //For Longitude conversion to Degrees, mins, secs
  finalLongDegree: number;
  longMin: number;
  returnLongMin: number;
  finalLongMin: string;
  longSec: number;
  returnLongSec: number;
  finalLongSec: string;
  compassHeadingLon: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private geo: Geolocation) {   
  }//cons.

  ionViewDidLoad(){
    this.geo.getCurrentPosition().then((data) => {
      this.lat = data.coords.latitude;
      this.long = data.coords.longitude;
      this.convertCoords();
      //console.log("Lat: " + this.lat);
      //console.log("Lat: " + this.long);
      }).catch((error) => {
      console.log('Error getting location', error);
    });
  }

  convertCoords(){
    
    //Latitude
    //Get degrees
    this.finalLatDegree = this.lat.toFixed(0);
      //console.log(this.finalLatDegree + " Degrees");
    //Get minutes
    this.latMin = this.lat - Math.floor(this.lat);
    this.returnLatMin = this.latMin * 60;
    this.finalLatMin = this.returnLatMin.toFixed(0);
      //console.log(this.finalLatMin + " Minutes");
    //Get Seconds
    this.latSec = this.returnLatMin - Math.floor(this.returnLatMin);
    this.returnLatSec = this.latSec * 60;
    this.finalLatSec = this.returnLatSec.toFixed(2);
      //console.log(this.finalLatSec + " Seconds");
    if (this.lat > 0)
    {
        this.compassHeadingLat = "NORTH";
    }
    else {
        this.compassHeadingLat = "SOUTH";
    }
    


    //Longitude
    //Get Degrees
    this.finalLongDegree = Math.ceil(this.long);
      console.log(this.finalLongDegree + " Degrees");
    //Get Mins
    this.longMin = this.long - Math.floor(this.long);
    this.returnLongMin = this.longMin * 60;
    this.finalLongMin = this.returnLongMin.toFixed(0);
      console.log(this.finalLongMin + " Minutes");
    //Get Seconds
    this.longSec = this.returnLongMin - Math.floor(this.returnLongMin);
    this.returnLongSec = this.longSec * 60;
    this.finalLongSec = this.returnLongSec.toFixed(2);
      console.log(this.finalLongSec + " Seconds");
      if (this.long > 0)
      {
         this.compassHeadingLon = "EAST";
      }
      else
      {
          this.compassHeadingLon = "WEST";
      }
    
  }

}//class

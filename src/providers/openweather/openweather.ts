import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

//Imports
import {Observable} from 'rxjs';

@Injectable()
export class OpenweatherProvider {

  constructor(public http: HttpClient) {
  }//cons.

  //Function to call API, passing in current Latitude and Longitude
  getWeather(lat: number, long: number):Observable<any>{
    return this.http.get('https://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + long + '&APPID=7db414f719ad34335867b9c117ef926d');
  }//getWeather

}//class

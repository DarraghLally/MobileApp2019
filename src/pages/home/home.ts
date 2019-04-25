import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

//Import for flashlight
import {Flashlight} from '@ionic-native/flashlight';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  //Variables
  status: string = "OFF"; //Initially Off, changes to On when active

  constructor(public navCtrl: NavController, private torch: Flashlight) {
  }

  toggleLight(){
    //If light is off
    if(this.torch.available){ 
      //Switch on
      this.torch.switchOn();
      status = "ON"; //Change HTML when turned on
      //console.log("DEBUG: Light ON: if()");
    }else if(this.torch.isSwitchedOn()){
      this.torch.switchOff();
      status = "OFF";
      //console.log("DEBUG: Light OFF: else{}");
    }
  }//toggleLight()

}

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
  status: string = "OFF";

  constructor(public navCtrl: NavController, private torch: Flashlight) {
  }

  toggleLight(){
    if(this.torch.available){
      this.torch.toggle();
      this.torch.switchOn();
      status = "ON";
      //console.log("DEBUG: Light ON: if()");
    }else if(this.torch.isSwitchedOn()){
      this.torch.toggle();
      this.torch.switchOff();
      status = "OFF";
      //console.log("DEBUG: Light OFF: else{}");
    }
  }//toggleLight()

}

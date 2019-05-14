import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PichaiPage } from '../pichai/pichai';
import { NadellaPage } from '../nadella/nadella';
import { AjayPage } from '../ajay/ajay';
import { IndiraPage } from '../indira/indira';
import { IvanPage } from '../ivan/ivan';
import { NarayanPage } from '../narayan/narayan';
import { SanjayPage } from '../sanjay/sanjay';
import { SouzaPage } from '../souza/souza';
import { RajeevPage } from '../rajeev/rajeev';
import { AroraPage } from '../arora/arora';
import { PiyushPage } from '../piyush/piyush';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  
  picha(){
    this.navCtrl.push(PichaiPage, {}, {animate:false});
}
 nadell(){
    this.navCtrl.push(NadellaPage, {}, {animate:false});
}
aja(){
    this.navCtrl.push(AjayPage, {}, {animate:false});
}
indir(){
    this.navCtrl.push(IndiraPage, {}, {animate:false});
}
 iva(){
    this.navCtrl.push(IvanPage, {}, {animate:false});
}
naraya(){
    this.navCtrl.push(NarayanPage, {}, {animate:false});
}
sanja(){
    this.navCtrl.push(SanjayPage, {}, {animate:false});
}
souz(){
    this.navCtrl.push(SouzaPage, {}, {animate:false});
}
rajee(){
    this.navCtrl.push(RajeevPage, {}, {animate:false});
}
aror(){
    this.navCtrl.push(AroraPage, {}, {animate:false});
}
piyus(){
    this.navCtrl.push(PiyushPage, {}, {animate:false});
}

}

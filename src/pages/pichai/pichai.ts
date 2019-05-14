import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the PichaiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pichai',
  templateUrl: 'pichai.html',
})
export class PichaiPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public app: App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PichaiPage');
  }
  hom(){
    const root = this.app.getRootNav();
    root.popToRoot();
}
hom1() {
  this.navCtrl.setRoot(HomePage);
}
}

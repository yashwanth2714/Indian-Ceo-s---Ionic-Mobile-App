import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, App } from 'ionic-angular';
import{ Q8Page } from '../q8/q8';
import { HomePage } from '../home/home';
import { GalleryPage } from '../gallery/gallery';
import { ContactPage } from '../contact/contact';
/**
 * Generated class for the Q7Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-q7',
  templateUrl: 'q7.html',
})
export class Q7Page {
  page = Q8Page;
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public app: App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Q7Page');
  }
  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'Congratulations!',
      subTitle: 'Right Answer',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert1() {
    const alert = this.alertCtrl.create({
      title: 'Try Again!',
     subTitle: 'Wrong Answer',
      buttons: ['OK']
    });
    alert.present();
  }
  hom() {
    this.navCtrl.setRoot(HomePage);
}
qui() {
  const root = this.app.getRootNav();
  root.popToRoot();
}
gal() {
  this.navCtrl.setRoot(GalleryPage);
}
con() {
  this.navCtrl.setRoot(ContactPage);
}
}

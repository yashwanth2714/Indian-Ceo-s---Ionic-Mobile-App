import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, App } from 'ionic-angular';
import { HomePage } from '../home/home';
import { ContactPage } from '../contact/contact';
import { GalleryPage } from '../gallery/gallery';
/**
 * Generated class for the Q10Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-q10',
  templateUrl: 'q10.html',
})
export class Q10Page {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public app: App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Q10Page');
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

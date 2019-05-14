import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, App } from 'ionic-angular';
import { Q7Page } from '../q7/q7';
import { HomePage } from '../home/home';
import { ContactPage } from '../contact/contact';
import { GalleryPage } from '../gallery/gallery';
/**
 * Generated class for the Q6Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-q6',
  templateUrl: 'q6.html',
})
export class Q6Page {
  page = Q7Page;
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public app: App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Q6Page');
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

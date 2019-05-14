import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, App } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Q3Page } from '../q3/q3';
import { GalleryPage } from '../gallery/gallery';
import { ContactPage } from '../contact/contact';
/**
 * Generated class for the Q2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-q2',
  templateUrl: 'q2.html',
})
export class Q2Page {
  page = Q3Page;
  constructor(public navCtrl: NavController, public navParams: NavParams,  public alertCtrl: AlertController, public app: App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Q2Page');
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

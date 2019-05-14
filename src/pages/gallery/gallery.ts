import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the GalleryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-gallery',
  templateUrl: 'gallery.html',
})
export class GalleryPage {
  images = ['1.jpg','4.jpg', '5.jpg', '6.png', '2.jpg','7.jpg', '8.jpg', 
  '9.jpg', '11.jpg', 'py.png', '3.jpg', 'skj1.jpg', 'na.jpg' ];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GalleryPage');
  }

}

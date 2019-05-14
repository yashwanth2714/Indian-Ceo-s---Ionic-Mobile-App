import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicImageViewerModule } from 'ionic-img-viewer';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ContactPage } from '../pages/contact/contact';
import { GalleryPage } from '../pages/gallery/gallery';
import { QuizPage } from '../pages/quiz/quiz';
import { PichaiPage } from '../pages/pichai/pichai';
import { NadellaPage } from '../pages/nadella/nadella';
import { AjayPage } from '../pages/ajay/ajay';
import { IndiraPage } from '../pages/indira/indira';
import { IvanPage } from '../pages/ivan/ivan';
import { NarayanPage } from '../pages/narayan/narayan';
import { SanjayPage } from '../pages/sanjay/sanjay';
import { SouzaPage } from '../pages/souza/souza';
import { RajeevPage } from '../pages/rajeev/rajeev';
import { AroraPage } from '../pages/arora/arora';
import { PiyushPage } from '../pages/piyush/piyush';
import { Q2Page } from '../pages/q2/q2';
import { Q3Page } from '../pages/q3/q3';
import { Q4Page } from '../pages/q4/q4';
import { Q5Page } from '../pages/q5/q5';
import { Q6Page } from '../pages/q6/q6';
import { Q7Page } from '../pages/q7/q7';
import { Q8Page } from '../pages/q8/q8';
import { Q9Page } from '../pages/q9/q9';
import { Q10Page } from '../pages/q10/q10';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    ContactPage,
    GalleryPage,
    QuizPage,
    PichaiPage,
    NadellaPage,
    AjayPage,
    IndiraPage,
    IvanPage,
    NarayanPage,
    SanjayPage,
    SouzaPage,
    RajeevPage,
    AroraPage,
    PiyushPage,
    Q2Page,
    Q3Page,
    Q4Page,
    Q5Page,
    Q6Page,
    Q7Page,
    Q8Page,
    Q9Page,
    Q10Page
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicImageViewerModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    ContactPage,
    GalleryPage,
    QuizPage,
    PichaiPage,
    NadellaPage,
    AjayPage,
    IndiraPage,
    IvanPage,
    NarayanPage,
    SanjayPage,
    SouzaPage,
    RajeevPage,
    AroraPage,
    PiyushPage,
    Q2Page,
    Q3Page,
    Q4Page,
    Q5Page,
    Q6Page,
    Q7Page,
    Q8Page,
    Q9Page,
    Q10Page
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

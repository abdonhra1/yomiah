import { NgModule, ErrorHandler } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpModule, Http } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AuthService } from "../services/auth.service";
import { UserInfoService } from "../services/user-info.service";
import { environment } from '../app_rsrs/env';
import { IonicStorageModule } from '@ionic/storage';
import { OffersService } from "../services/offers.service";
import { OfferApplicantsService } from "../services/offer-applicants.service";
import { TransHelpService } from "../services/transHelp.service";
import { AppConfigService } from "../services/appconfig.service";
import { Network } from '@ionic-native/network';
import { Geolocation } from '@ionic-native/geolocation';
import { AgmCoreModule } from 'angular2-google-maps/core';

export function createTranslateLoader(http: Http) {
    console.log("in createTranslateLoader");
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}



@NgModule({
  declarations: [
    MyApp,
    TabsPage
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    AngularFireModule.initializeApp(environment.fbconfig),
    AngularFireDatabaseModule,
    IonicStorageModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB39ce7Ab4vNaaLFq9sZsJWd3XmTfYBstw'
    }),
    TranslateModule.forRoot(
      {
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [Http]
      }
    }),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage
  ],
  providers: [
    StatusBar,
    AuthService,
    UserInfoService,
    OffersService,
    OfferApplicantsService,
    AppConfigService,
    TransHelpService,
    Network,
    Geolocation,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

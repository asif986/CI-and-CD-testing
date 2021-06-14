import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdMobileModule } from 'ng-zorro-antd-mobile';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { antModule } from './ant.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

registerLocaleData(en);

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, BrowserAnimationsModule, FormsModule, HttpClientModule, NgZorroAntdMobileModule, antModule, ServiceWorkerModule.register('ngsw-worker.js', {
    enabled: environment.production,
    // Register the ServiceWorker as soon as the app is stable
    // or after 30 seconds (whichever comes first).
    registrationStrategy: 'registerWhenStable:30000'
  })],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, { provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent],
})
export class AppModule { }

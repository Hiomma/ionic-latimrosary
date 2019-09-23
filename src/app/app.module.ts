import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TercosService } from 'src/services/tercos/tercos.service';
import { OracoesService } from 'src/services/oracoes/oracoes.service';
import { MisteriosService } from 'src/services/misterios/misterios.service';
import { NavService } from 'src/services/nav/nav.service'
import { Media } from '@ionic-native/media/ngx';
import { ComponentsModule } from './components/components.module';
import { StorageService } from 'src/services/storage/storage.service';
import { IonicStorageModule } from '@ionic/storage';
import { OneSignal } from '@ionic-native/onesignal/ngx';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule,
        ComponentsModule,
        IonicModule.forRoot(),
        IonicStorageModule.forRoot({
            name: '_lcm',
            driverOrder: ['websql', 'indexeddb', 'sqlite']
        }),
        AppRoutingModule],
    providers: [
        OneSignal,
        StatusBar,
        SplashScreen,
        StorageService,
        OracoesService,
        TercosService,
        MisteriosService,
        NavService,
        Media,
        { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }

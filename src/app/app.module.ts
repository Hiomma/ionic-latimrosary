import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { TercosService } from 'src/services/tercos/tercos.service';
import { OracoesService } from 'src/services/oracoes/oracoes.service';
import { MisteriosService } from 'src/services/misterios/misterios.service';
import { NavService } from 'src/services/nav/nav.service'
import { Media } from '@ionic-native/media/ngx';

@NgModule({
    declarations: [AppComponent],
    entryComponents: [],
    imports: [BrowserModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFirestoreModule,
        IonicModule.forRoot(),
        AppRoutingModule],
    providers: [
        StatusBar,
        SplashScreen,
        OracoesService,
        TercosService,
        MisteriosService,
        NavService,
        Media,
        { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }

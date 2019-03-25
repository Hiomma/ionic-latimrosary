import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
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
import { ComponentsModule } from './components/components.module';

@NgModule({
    declarations: [AppComponent ],
    imports: [BrowserModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFirestoreModule,
        ComponentsModule,
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
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }

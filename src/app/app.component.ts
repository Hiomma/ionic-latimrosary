import { Component } from '@angular/core';

import { Platform, AlertController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { OneSignal } from '@ionic-native/onesignal/ngx';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html'
})
export class AppComponent {

    private unSub1Function: any;
    private unSub1: Subscription;

    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar,
        private alertController: AlertController,
        private router: Router,
        private oneSignal: OneSignal
    ) {
        this.initializeApp();
    }

    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.backgroundColorByHexString('#282e39');
            this.splashScreen.hide();

            this.oneSignal.startInit('64c1ada6-a156-4220-bc37-78292a04f092', '108323026078');
            this.oneSignal.endInit();

            this.platform.backButton.subscribeWithPriority(9999, () => { })


            document.addEventListener('backbutton', this.unSub1Function = async (event) => {
                if (window.location.href.includes("ver-terco")) {
                    event.preventDefault();
                    event.stopPropagation();

                    const alert = await this.alertController.create({
                        header: 'Alerta',
                        subHeader: 'Sair do Terço',
                        message: 'Você deseja realmente sair do terço?',
                        buttons: [{
                            text: "Cancelar",
                            cssClass: "buttonAlerta"
                        }, {
                            text: "Sair",
                            cssClass: "buttonAlerta",
                            handler: () => {
                                this.router.navigateByUrl("/tab/terco");
                            }
                        }]
                    });

                    await alert.present();
                } else if (window.location.href.includes("home")) {
                    const alert = await this.alertController.create({
                        header: 'Alerta',
                        subHeader: 'Sair do Aplicativo',
                        message: 'Deseja sair do Aplicativo?',
                        buttons: [{
                            text: "Cancelar",
                            cssClass: "buttonAlerta"
                        }, {
                            text: "Sair",
                            cssClass: "buttonAlerta",
                            handler: () => {
                                navigator["app"].exitApp();
                            }
                        }]
                    });

                    await alert.present();
                } else {
                    window.history.back();
                }
            }, false);
        });
    }

    ngOnDestroy() {
        this.unSub1.unsubscribe();
    }
}

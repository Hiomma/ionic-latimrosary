import { Component, OnInit } from '@angular/core';
import { PopoverController, AlertController } from '@ionic/angular';
import { NavService } from 'src/services/nav/nav.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-menu-terco',
    templateUrl: './menu-terco.component.html',
    styleUrls: ['./menu-terco.component.scss'],
})
export class MenuTercoComponent implements OnInit {

    reproduzir: boolean;
    traducao: boolean;

    constructor(private popCtrl: PopoverController,
        private router: Router,
        private alertController: AlertController,
        private nav: NavService) { }

    ngOnInit() {
        this.reproduzir = this.nav.dataModal.reproduzir;
        this.traducao = this.nav.dataModal.traducao;
    }

    ok() {
        this.nav.dataModal = { reproduzir: this.reproduzir, traducao: this.traducao }
        this.popCtrl.dismiss();
    }

    async sair() {
        this.popCtrl.dismiss();

        const alert = await this.alertController.create({
            header: 'Alerta',
            subHeader: 'Sair do Terço',
            message: 'Você tem certeza que deseja sair do terço?',
            buttons: [{
                text: "Cancelar",
                cssClass: "buttonAlerta"
            }, {
                text: "Sair",
                cssClass: "buttonAlerta",
                handler: () => {
                    this.router.navigateByUrl("tab/terco");
                }
            }]
        });

        await alert.present();
    }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MissasService } from 'src/services/missas/missas.service';
import { AlertController } from '@ionic/angular';

@Component({
    selector: 'app-ver-missa',
    templateUrl: './ver-missa.page.html',
    styleUrls: ['./ver-missa.page.scss'],
})
export class VerMissaPage implements OnInit {

    missa: any;
    balao: any;
    i: number = 0;

    constructor(private route: ActivatedRoute,
        private alertController: AlertController,
        private router: Router,
        private missaService: MissasService) { }

    ngOnInit() {
        this.missa = this.missaService.findById(this.route.snapshot.params.id);
        this.balao = this.missa.baloes[0]
    }

    async avancar() {
        if (this.i < this.missa.baloes.length)
            this.i++;

        if (this.i >= this.missa.baloes.length) {
            const alert = await this.alertController.create({
                header: 'Acabou :c',
                subHeader: 'Sair da Missa',
                message: 'Você viu a missa inteira, você deseja sair?',
                buttons: [{
                    text: "Cancelar",
                    cssClass: "buttonAlerta"
                }, {
                    text: "Sair",
                    cssClass: "buttonAlerta",
                    handler: () => {
                        this.router.navigateByUrl("tab/missa");
                    }
                }]
            });

            await alert.present();
        } else {
            this.balao = this.missa.baloes[this.i];
        }
    }

    voltar() {
        if (this.i > 0)
            this.i--;
        this.balao = this.missa.baloes[this.i];
    }

    async sair() {
        const alert = await this.alertController.create({
            header: 'Acabou :c',
            subHeader: 'Sair da Missa',
            message: 'Você viu a missa inteira, você deseja sair?',
            buttons: [{
                text: "Cancelar",
                cssClass: "buttonAlerta"
            }, {
                text: "Sair",
                cssClass: "buttonAlerta",
                handler: () => {
                    this.router.navigateByUrl("tab/missa");
                }
            }]
        });

        await alert.present();
    }

}

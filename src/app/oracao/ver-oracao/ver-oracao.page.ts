import { Component, OnInit } from '@angular/core';
import { NavService } from 'src/services/nav/nav.service';
import { Router } from '@angular/router';
import { Media, MediaObject } from '@ionic-native/media/ngx';
import { Platform, PopoverController } from '@ionic/angular';
import { MenuTercoComponent } from 'src/app/components/menu-terco/menu-terco.component';

@Component({
    selector: 'app-ver-oracao',
    templateUrl: './ver-oracao.page.html',
    styleUrls: ['./ver-oracao.page.scss'],
})
export class VerOracaoPage implements OnInit {

    oracao: any;
    reproduzir: boolean = false;
    traducao: boolean = false;
    audio: boolean = true;
    play: boolean = false;

    duracao: number;
    tempoMusica: number;

    musica: MediaObject;

    constructor(private nav: NavService,
        private router: Router,
        private platform: Platform,
        private popoverController: PopoverController,
        private media: Media) {

        this.platform.ready().then(() => {
            this.oracao = this.nav.data;
            this.musica = this.media.create("/android_asset/www/music/" + this.oracao.audio);
            this.musica.play();
            this.musica.pause();
        })
    }

    ngOnInit() {
        if (!this.oracao) {
            this.router.navigateByUrl("/tab/oracao")
        }
    }

    avancarMusica() {
        this.musica.seekTo(this.tempoMusica * 1000);
    }

    ativarPlay() {
        this.play = !this.play;

        if (this.play) {
            this.musica.play();
            this.duracao = this.musica.getDuration();

            setInterval(() => {
                this.musica.getCurrentPosition().then(data => {
                    this.tempoMusica = data;

                    if (this.tempoMusica < 0) {
                        this.play = false;
                    }
                })
            }, 1000);
        } else {
            this.musica.pause();
        }
    }


    async abrirPopover(ev: any) {
        this.nav.dataModal = { reproduzir: this.reproduzir, traducao: this.traducao, audio: this.audio, terco: false }

        const popover = await this.popoverController.create({
            component: MenuTercoComponent,
            event: ev,
            translucent: true
        });

        popover.onDidDismiss().then(() => {
            this.traducao = this.nav.dataModal.traducao;
            this.reproduzir = this.nav.dataModal.reproduzir;
            this.audio = this.nav.dataModal.audio;
        });

        return await popover.present();
    }

    voltar() {
        this.musica.pause();
        this.router.navigateByUrl("/tab/oracao")
    }

}

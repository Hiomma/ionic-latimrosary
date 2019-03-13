import { Component, OnInit } from '@angular/core';
import { NavService } from 'src/services/nav/nav.service';
import { Router } from '@angular/router';
import { Media, MediaObject } from '@ionic-native/media/ngx';
import { Platform } from '@ionic/angular';

@Component({
    selector: 'app-ver-oracao',
    templateUrl: './ver-oracao.page.html',
    styleUrls: ['./ver-oracao.page.scss'],
})
export class VerOracaoPage implements OnInit {

    oracao: any;

    constructor(private nav: NavService,
        private router: Router,
        private platform: Platform,
        private media: Media) {
    }

    ngOnInit() {
        this.oracao = this.nav.data;
        this.platform.ready().then(() => {

            let musica: MediaObject = this.media.create("/android_asset/www/music/teste.mp3");
            musica.play();

            musica.onStatusUpdate.subscribe(status => console.log(status));

            musica.onSuccess.subscribe(() => console.log('Action is successful'));

            musica.onError.subscribe(error => console.log('Error!', error));
        })

        if (!this.oracao) {
            this.router.navigateByUrl("/tab/oracao")
        }
    }

    voltar() {
        this.router.navigateByUrl("/tab/oracao")
    }

}

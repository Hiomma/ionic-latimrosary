import { Component, OnInit } from '@angular/core';
import { NavService } from 'src/services/nav/nav.service';
import { Router } from '@angular/router';
import { OracoesService } from 'src/services/oracoes/oracoes.service';
import { MisteriosService } from 'src/services/misterios/misterios.service';
import { PopoverController, Platform } from '@ionic/angular';
import { MenuTercoComponent } from "../../menu-terco/menu-terco.component";
import { MediaObject, Media } from '@ionic-native/media/ngx';

@Component({
    selector: 'app-ver-terco',
    templateUrl: './ver-terco.page.html',
    styleUrls: ['./ver-terco.page.scss'],
})
export class VerTercoPage implements OnInit {

    terco: any;
    oracao: any;
    misterioPt: string;
    listMisterios: any;
    listOracao: any = new Array();

    sinalDaCruz: any;
    creio: any;
    paiNosso: any;
    aveMaria: any;
    gloria: any;
    salveRainha: any;
    fatima: any;

    primeiraPagina: boolean = true;

    i: number = 0;
    contadorMisterio: number = 0;
    contadorAveMaria: number = 0;
    tercoFinalizado: boolean = false;

    traducao: boolean = false;
    reproduzir: boolean = false;
    audio: boolean = false;

    play: boolean = false;
    duracao: number;
    tempoMusica: number;

    musica: MediaObject;

    constructor(private nav: NavService,
        private router: Router,
        private misterios: MisteriosService,
        private popoverController: PopoverController,
        private platform: Platform,
        private media: Media,
        private oracoes: OracoesService) { }

    ngOnInit() {
        this.terco = this.nav.data;

        this.misterios.getMisteriosById(this.terco.id).subscribe(data => {
            this.listMisterios = data;

            this.oracoes.getOracoes().subscribe(data => {
                this.listOracao = data;

                this.listOracao.forEach(element => {
                    switch (element.id) {
                        case 1:
                            this.creio = element;
                            break;
                        case 2:
                            this.gloria = element;
                            break;
                        case 3:
                            this.paiNosso = element;
                            break;
                        case 4:
                            this.sinalDaCruz = element;
                            break;
                        case 5:
                            this.aveMaria = element;
                            break;
                        case 6:
                            this.salveRainha = element;
                            break;
                        case 7:
                            this.fatima = element;
                            break;
                    }
                });
                this.oracao = this.sinalDaCruz;

                this.platform.ready().then(() => {

                    this.musica = this.media.create("/android_asset/www/music/" + this.oracao.audio);
                    this.musica.play();
                    this.musica.pause();
                })
            })
        })

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
        this.nav.dataModal = { reproduzir: this.reproduzir, traducao: this.traducao, audio: this.audio, terco: true }

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

    avancar() {
        this.i++;
        if (this.i == 1) {
            this.oracao = this.creio;
        } else if ([2, 9, 23, 37, 51, 65].indexOf(this.i) > -1) {
            this.misterioPt = null;
            this.oracao = this.paiNosso;
        } else if ([3, 4, 5, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75].indexOf(this.i) > -1) {
            this.oracao = this.aveMaria;
            this.contadorAveMaria++;

            if (this.i == 3 || this.i == 10 || this.i == 24 || this.i == 38 || this.i == 52 || this.i == 65) {
                this.contadorAveMaria = 1;
            } else if (this.i == 19 || this.i == 33 || this.i == 47 || this.i == 61 || this.i == 75) {
                this.contadorAveMaria = 10;
            } else if (this.i == 5) {
                this.contadorAveMaria = 3;
            }
        } else if ([6, 20, 34, 48, 62, 76].indexOf(this.i) > -1) {
            this.oracao = this.gloria;
            this.contadorAveMaria = 0;
        } else if ([7, 21, 35, 49, 63, 77].indexOf(this.i) > -1) {
            this.oracao = this.fatima;
        } else if ([8, 22, 36, 50, 64].indexOf(this.i) > -1) {
            this.oracao = this.listMisterios[this.contadorMisterio];
            this.misterioPt = this.oracao.oracao;

            switch (this.i) {
                case 8:
                    this.contadorMisterio = 1;
                    break;
                case 22:
                    this.contadorMisterio = 2;
                    break;
                case 36:
                    this.contadorMisterio = 3;
                    break;
                case 50:
                    this.contadorMisterio = 4;
                    break;
                case 64:
                    this.contadorMisterio = 5;
                    break;
            }
        } else if (this.i == 78) {
            this.oracao = this.salveRainha;
        } else if (this.i == 79) {
            this.tercoFinalizado = true;
        }

        this.platform.ready().then(() => {
            this.play = false;
            this.tempoMusica = 0;
            this.musica = this.media.create("/android_asset/www/music/" + this.sinalDaCruz.audio);
            this.musica.play();
            this.musica.pause();

            if (this.reproduzir) {
                this.ativarPlay();
            }
        })
    }

    voltar() {
        this.i--;
        if (this.i == -1) {
            this.router.navigateByUrl("/tab/terco");
        } else {
            if (this.i == 0) {
                this.oracao = this.sinalDaCruz;
            } else if (this.i == 1) {
                this.oracao = this.creio;
            } else if ([2, 9, 23, 37, 51, 65].indexOf(this.i) > -1) {
                this.oracao = this.paiNosso;
                this.contadorAveMaria = 0;
            } else if ([3, 4, 5, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75].indexOf(this.i) > -1) {
                this.oracao = this.aveMaria;
                this.contadorAveMaria--;

                if (this.i == 3 || this.i == 10 || this.i == 24 || this.i == 38 || this.i == 52 || this.i == 65) {
                    this.contadorAveMaria = 1;
                } else if (this.i == 19 || this.i == 33 || this.i == 47 || this.i == 61 || this.i == 75) {
                    this.contadorAveMaria = 10;
                } else if (this.i == 5) {
                    this.contadorAveMaria = 3;
                }
            } else if ([6, 20, 34, 48, 62, 76].indexOf(this.i) > -1) {
                this.oracao = this.gloria;
                this.contadorAveMaria = 0;
            } else if ([7, 21, 35, 49, 63, 77].indexOf(this.i) > -1) {
                this.oracao = this.fatima;
                this.misterioPt = null;

                switch (this.i) {
                    case 21:
                        this.contadorMisterio = 1;
                        break;
                    case 35:
                        this.contadorMisterio = 2;
                        break;
                    case 49:
                        this.contadorMisterio = 3;
                        break;
                    case 63:
                        this.contadorMisterio = 4;
                        break;
                    case 76:
                        this.contadorMisterio = 5;
                        break;
                }
            } else if ([8, 22, 36, 50, 64].indexOf(this.i) > -1) {
                this.oracao = this.listMisterios[this.contadorMisterio];
                this.misterioPt = this.oracao.oracao;

                switch (this.i) {
                    case 8:
                        this.contadorMisterio = 1;
                        break;
                    case 22:
                        this.contadorMisterio = 2;
                        break;
                    case 36:
                        this.contadorMisterio = 3;
                        break;
                    case 50:
                        this.contadorMisterio = 4;
                        break;
                    case 64:
                        this.contadorMisterio = 5;
                        break;
                }
            } else if (this.i == 78) {
                this.oracao = this.salveRainha;
            } else if (this.i == 79) {
                this.tercoFinalizado = true;
            }
        }
    }
}
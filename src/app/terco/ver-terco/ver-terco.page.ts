import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavService } from 'src/services/nav/nav.service';
import { Router } from '@angular/router';
import { OracoesService } from 'src/services/oracoes/oracoes.service';
import { MisteriosService } from 'src/services/misterios/misterios.service';
import { PopoverController, Platform, AlertController } from '@ionic/angular';
import { MediaObject, Media } from '@ionic-native/media/ngx';
import { MenuTercoComponent } from 'src/app/components/menu-terco/menu-terco.component';

@Component({
    selector: 'app-ver-terco',
    templateUrl: './ver-terco.page.html',
    styleUrls: ['./ver-terco.page.scss'],
})
export class VerTercoPage implements OnInit, OnDestroy {

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

    interval: any;
    musicaInterval: any;
    pronto: boolean = false;

    musica: MediaObject;
    musicaAveMaria: MediaObject;
    musicaSalveRainha: MediaObject;
    musicaPaiNosso: MediaObject;
    musicaFatima: MediaObject;
    musicaCredo: MediaObject;
    musicaGloria: MediaObject;
    musicaSinalCruz: MediaObject;

    musicaMisterio: any = new Array<MediaObject>();

    constructor(private nav: NavService,
        private router: Router,
        private misterios: MisteriosService,
        private popoverController: PopoverController,
        private alertController: AlertController,
        private platform: Platform,
        private media: Media,
        private oracoes: OracoesService) { }

    ngOnInit() {
        this.terco = this.nav.data;

        this.misterios.getMisteriosById(this.terco.id).subscribe(data => {
            this.listMisterios = data;

            this.oracoes.getOracoes().subscribe(data => {
                this.listOracao = data;

                this.listMisterios.forEach((element: any) => {
                    this.musicaMisterio.push(this.media.create("/android_asset/www/music/" + element.audio));
                })

                this.listOracao.forEach(element => {
                    switch (element.id) {
                        case 1:
                            this.creio = element;

                            this.musicaCredo = this.media.create("/android_asset/www/music/" + this.creio.audio);
                            this.musicaCredo.play();
                            this.musicaCredo.pause();

                            break;
                        case 2:
                            this.gloria = element;

                            this.musicaGloria = this.media.create("/android_asset/www/music/" + this.gloria.audio);
                            this.musicaGloria.play();
                            this.musicaGloria.pause();

                            break;
                        case 3:
                            this.paiNosso = element;

                            this.musicaPaiNosso = this.media.create("/android_asset/www/music/" + this.paiNosso.audio);
                            this.musicaPaiNosso.play();
                            this.musicaPaiNosso.pause();

                            break;
                        case 4:
                            this.sinalDaCruz = element;

                            this.musicaSinalCruz = this.musica = this.media.create("/android_asset/www/music/" + this.sinalDaCruz.audio);
                            this.musicaSinalCruz.play();
                            this.musicaSinalCruz.pause();

                            break;
                        case 5:
                            this.aveMaria = element;

                            this.musicaAveMaria = this.media.create("/android_asset/www/music/" + this.aveMaria.audio);
                            this.musicaAveMaria.play();
                            this.musicaAveMaria.pause();

                            break;
                        case 6:
                            this.salveRainha = element;

                            this.musicaSalveRainha = this.media.create("/android_asset/www/music/" + this.salveRainha.audio);
                            this.musicaSalveRainha.play();
                            this.musicaSalveRainha.pause();

                            break;
                        case 7:
                            this.fatima = element;

                            this.musicaFatima = this.media.create("/android_asset/www/music/" + this.fatima.audio);
                            this.musicaFatima.play();
                            this.musicaFatima.pause();

                            break;
                    }
                });
                this.oracao = this.sinalDaCruz;

                this.platform.ready().then(() => {
                    this.platform.backButton.subscribe(() => {
                        clearInterval(this.interval);
                        clearInterval(this.musicaInterval);
                        this.router.navigateByUrl("/tab/terco");
                    });


                })
            })
        })

    }

    ngOnDestroy() {
        this.musica.stop();
        this.duracao = -1;
        this.tempoMusica = 0;
        this.reproduzir = false;
        this.audio = false;
        this.traducao = false;
        clearInterval(this.interval);
        clearInterval(this.musicaInterval);
    }

    avancarMusica() {
        this.musica.seekTo(this.tempoMusica * 1000);
    }

    ativarPlay(playHtml?) {
        this.tempoMusica = 0;
        this.duracao = -1;
        this.musica.play();
        this.musica.pause();

        if (playHtml)
            this.play = !this.play;

        this.pronto = false

        if (this.play) {
            if (this.reproduzir) {
                this.musica.setVolume(0.0);
                this.musica.play();
                this.interval = setInterval(() => {
                    if (this.duracao == -1 || !this.duracao) {
                        this.duracao = this.musica.getDuration();
                    } else {
                        this.musica.stop();
                        this.musica.setVolume(1.0);
                        this.musica.play();
                        this.pronto = true;
                        clearInterval(this.interval);
                    }
                }, 10);
            } else {
                this.musica.play();
                this.duracao = this.musica.getDuration();
            }

            this.musicaInterval = setInterval(() => {
                this.musica.getCurrentPosition().then(async data => {
                    this.tempoMusica = data;

                    console.log(this.duracao, this.tempoMusica, this.pronto, this.oracao.audio);

                    if (this.tempoMusica < 0 && this.pronto) {
                        this.play = false;

                        clearInterval(this.musicaInterval);

                        if (this.reproduzir) {
                            this.play = true;
                            await this.avancar(true);
                        }
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

    async avancar(reproducaoAutomatica?) {
        this.i++;

        if (this.play && !reproducaoAutomatica) {
            this.play = false;
            this.musica.pause();
            this.duracao = -1;
            this.tempoMusica = 0;
        }

        clearInterval(this.interval);
        clearInterval(this.musicaInterval);

        if (this.i == 1) {
            this.oracao = this.creio;
            this.musica = this.musicaCredo;
        } else if ([2, 9, 23, 37, 51, 65].indexOf(this.i) > -1) {
            this.misterioPt = null;
            this.oracao = this.paiNosso;
            this.musica = this.musicaPaiNosso;
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

            this.musica = this.musicaAveMaria;
        } else if ([6, 20, 34, 48, 62, 76].indexOf(this.i) > -1) {
            this.oracao = this.gloria;
            this.contadorAveMaria = 0;

            this.musica = this.musicaGloria;
        } else if ([7, 21, 35, 49, 63, 77].indexOf(this.i) > -1) {
            this.oracao = this.fatima;

            this.musica = this.musicaFatima;
        } else if ([8, 22, 36, 50, 64].indexOf(this.i) > -1) {

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
            this.oracao = this.listMisterios[this.contadorMisterio - 1];
            this.misterioPt = this.oracao.oracao;

            this.musica = this.musicaMisterio[this.contadorMisterio - 1];
        } else if (this.i == 78) {
            this.oracao = this.salveRainha;

            this.musica = this.musicaSalveRainha;
        } else if (this.i == 79) {
            this.tercoFinalizado = true;
            this.musica.stop();
            this.play = false;

            const alert = await this.alertController.create({
                header: 'Acabou :c',
                subHeader: 'Sair do Terço',
                message: 'Você rezou totalmente o terço, você deseja sair?',
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
        } else if (this.i > 79) {
            this.i = 79;

            this.musica.stop();
            this.play = false;

            const alert = await this.alertController.create({
                header: 'Acabou :c',
                subHeader: 'Sair do Terço',
                message: 'Você rezou totalmente o terço, você deseja sair?',
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

        if (this.play) {
            if (this.reproduzir) {
                this.ativarPlay();
            }
        }
    }

    voltar() {
        this.i--;

        if (this.play) {
            this.play = false;
        }

        clearInterval(this.interval);
        clearInterval(this.musicaInterval);

        if (this.musica) {
            this.musica.pause();
            this.duracao = -1;
            this.tempoMusica = 0;
        }

        if (this.i == -1) {
            this.router.navigateByUrl("/tab/terco");
        } else {
            if (this.i == 0) {
                this.oracao = this.sinalDaCruz;

                this.musica = this.musicaSinalCruz;
            } else if (this.i == 1) {
                this.oracao = this.creio;

                this.musica = this.musicaCredo;
            } else if ([2, 9, 23, 37, 51, 65].indexOf(this.i) > -1) {
                this.oracao = this.paiNosso;
                this.contadorAveMaria = 0;

                this.musica = this.musicaPaiNosso;
            } else if ([3, 4, 5, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75].indexOf(this.i) > -1) {
                this.oracao = this.aveMaria;
                this.contadorAveMaria--;

                this.musica = this.musicaAveMaria;

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

                this.musica = this.musicaGloria;
            } else if ([7, 21, 35, 49, 63, 77].indexOf(this.i) > -1) {
                this.oracao = this.fatima;
                this.misterioPt = null;
                this.musica = this.musicaFatima;

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
                this.oracao = this.listMisterios[this.contadorMisterio - 1];
                this.misterioPt = this.oracao.oracao;
                this.musica = this.musicaMisterio[this.contadorMisterio - 1];
            } else if (this.i == 78) {
                this.oracao = this.salveRainha;
                this.musica = this.musicaSalveRainha;
            } else if (this.i == 79) {
                this.tercoFinalizado = true;
                this.musica.stop();
                this.play = false;
            }

            if (this.play) {
                if (this.reproduzir) {
                    this.ativarPlay();
                }
            }
        }
    }
}
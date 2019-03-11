import { Component, OnInit } from '@angular/core';
import { NavService } from 'src/services/nav/nav.service';
import { Router } from '@angular/router';
import { OracoesService } from 'src/services/oracoes/oracoes.service';
import { MisteriosService } from 'src/services/misterios/misterios.service';
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

    constructor(private nav: NavService,
        private router: Router,
        private misterios: MisteriosService,
        private oracoes: OracoesService) { }

    async ngOnInit() {
        this.terco = this.nav.data;

        this.misterios.getMisteriosById(this.terco.id).subscribe(data => {
            this.listMisterios = data;
        })

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
        })
    }

    avancar() {
        this.i++;
        if (this.i == 1) {
            this.oracao = this.creio;
        } else if ([2, 9, 23, 37, 51, 65].indexOf(this.i) > -1) {
            this.oracao = this.paiNosso;
        } else if ([3, 4, 5, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75].indexOf(this.i) > -1) {
            this.oracao = this.aveMaria;
            this.contadorAveMaria++;
        } else if ([6, 20, 34, 48, 62, 76].indexOf(this.i) > -1) {
            this.oracao = this.gloria;
            this.contadorAveMaria = 0;
        } else if ([7, 21, 35, 49, 63, 77].indexOf(this.i) > -1) {
            this.oracao = this.fatima;
        } else if ([8, 22, 36, 50, 64].indexOf(this.i) > -1) {
            this.oracao = this.listMisterios[this.contadorMisterio];
            this.contadorMisterio++;
        } else if (this.i == 78) {
            this.oracao = this.salveRainha;
        } else if (this.i == 79) {
            this.tercoFinalizado = true;
        }
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
            } else if ([3, 4, 5, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75].indexOf(this.i) > -1) {
                this.oracao = this.aveMaria;
                this.contadorAveMaria++;
            } else if ([6, 20, 34, 48, 62, 76].indexOf(this.i) > -1) {
                this.oracao = this.gloria;
                this.contadorAveMaria = 0;
            } else if ([7, 21, 35, 49, 63, 77].indexOf(this.i) > -1) {
                this.oracao = this.fatima;
            } else if ([8, 22, 36, 50, 64].indexOf(this.i) > -1) {
                this.oracao = this.listMisterios[this.contadorMisterio];
                this.contadorMisterio++;
            } else if (this.i == 78) {
                this.oracao = this.salveRainha;
            } else if (this.i == 79) {
                this.tercoFinalizado = true;
            }
        }
    }
}
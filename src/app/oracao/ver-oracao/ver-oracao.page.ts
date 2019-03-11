import { Component, OnInit } from '@angular/core';
import { NavService } from 'src/services/nav/nav.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-ver-oracao',
    templateUrl: './ver-oracao.page.html',
    styleUrls: ['./ver-oracao.page.scss'],
})
export class VerOracaoPage implements OnInit {

    oracao: any;

    constructor(private nav: NavService,
        private router: Router) { }

    ngOnInit() {
        this.oracao = this.nav.data;
        console.log(this.oracao);
        if (!this.oracao) {
            this.router.navigateByUrl("/tab/oracao")
        }
    }

    voltar(){
        this.router.navigateByUrl("/tab/oracao")
    }

}

import { Component, OnInit } from '@angular/core';
import { OracoesService } from 'src/services/oracoes/oracoes.service';
import { Router } from '@angular/router';
import { NavService } from 'src/services/nav/nav.service';

@Component({
  selector: 'app-oracao',
  templateUrl: './oracao.page.html',
  styleUrls: ['./oracao.page.scss'],
})
export class OracaoPage implements OnInit {

    listOracoes: any = new Array();

    constructor(private oracoes: OracoesService,
        private nav: NavService,
        private router: Router) { }

    ngOnInit() {
        this.oracoes.getOracoes().subscribe(res => {
            this.listOracoes = res;
        });
    }

    abrirOracao(aux){
        this.nav.data = aux;
        this.router.navigateByUrl('/ver-oracao');
    }

}

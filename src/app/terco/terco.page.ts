import { Component, OnInit } from '@angular/core';
import { TercosService } from 'src/services/tercos/tercos.service';
import { Router } from '@angular/router';
import { NavService } from 'src/services/nav/nav.service';

@Component({
    selector: 'app-terco',
    templateUrl: './terco.page.html',
    styleUrls: ['./terco.page.scss'],
})
export class TercoPage implements OnInit {

    listTercos: Array<any> = new Array();

    constructor(private tercos: TercosService,
        private router: Router,
        private nav: NavService) { }

    ngOnInit() {
        this.listTercos = this.tercos.getTercos();
    }

    abrirTerco(aux) {
        this.nav.data = aux;
        this.router.navigateByUrl("/ver-terco");
    }

}

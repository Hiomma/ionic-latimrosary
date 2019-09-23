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

        let date = new Date().getDay();

        if ([0, 3].includes(date)) {
            this.listTercos[0].isHoje = true;
        } else if ([2, 5].includes(date)) {
            this.listTercos[1].isHoje = true;
        } else if (date == 4) {
            this.listTercos[2].isHoje = true;
        } else {
            this.listTercos[3].isHoje = true;
        }
    }

    abrirTerco(aux) {
        this.nav.data = aux;
        this.router.navigateByUrl("/ver-terco");
    }

}

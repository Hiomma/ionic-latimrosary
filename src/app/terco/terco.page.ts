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

    listTercos: any = new Array();

    constructor(private tercos: TercosService,
        private router: Router,
        private nav: NavService) { }

    ngOnInit() {
        this.tercos.getTercos().subscribe(res => {
            this.listTercos = res;
        });
    }

    abrirTerco(aux){
        this.nav.data = aux;
        console.log(aux);
        this.router.navigateByUrl("/ver-terco");
    }

}

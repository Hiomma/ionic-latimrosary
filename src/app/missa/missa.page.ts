import { Component, OnInit } from '@angular/core';
import { MissasService } from 'src/services/missas/missas.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-missa',
    templateUrl: './missa.page.html',
    styleUrls: ['./missa.page.scss'],
})
export class MissaPage implements OnInit {
    listMissas: Array<any> = new Array();

    constructor(private missas: MissasService,
        private router: Router) { }

    ngOnInit() {
        this.missas.getMissas().subscribe((res: any) => {
            this.listMissas = res;
        });
    }

    abrirMissa(aux) {
        this.router.navigate(["ver-missa", aux.id])
    }

}

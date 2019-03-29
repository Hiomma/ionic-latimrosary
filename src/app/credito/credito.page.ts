import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-credito',
    templateUrl: './credito.page.html',
    styleUrls: ['./credito.page.scss'],
})
export class CreditoPage implements OnInit {

    constructor(private router: Router) { }

    ngOnInit() {
    }

    voltar() {
        this.router.navigateByUrl("/");
    }

}

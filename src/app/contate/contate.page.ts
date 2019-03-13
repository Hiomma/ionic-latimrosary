import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-contate',
    templateUrl: './contate.page.html',
    styleUrls: ['./contate.page.scss'],
})
export class ContatePage implements OnInit {

    constructor(private router: Router) { }

    ngOnInit() {
    }

    voltar() {
        this.router.navigateByUrl("/");
    }

    abrirRedeSocial(url){
        window.open(url);
    }

}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule, NavParams } from '@ionic/angular';

import { VerOracaoPage } from './ver-oracao.page';

const routes: Routes = [
    {
        path: '',
        component: VerOracaoPage
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes)
    ],
    declarations: [VerOracaoPage]
})
export class VerOracaoPageModule { }
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { OracaoPage } from './oracao.page';
import { PipeModule } from 'src/pipes/pipes.module';

const routes: Routes = [
    {
        path: '',
        component: OracaoPage,

    }
];

@NgModule({
    imports: [
        PipeModule,
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes)
    ],
    declarations: [OracaoPage]
})
export class OracaoPageModule { }

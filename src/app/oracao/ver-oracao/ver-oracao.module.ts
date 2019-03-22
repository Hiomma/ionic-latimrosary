import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { VerOracaoPage } from './ver-oracao.page';
import { MenuTercoComponent } from 'src/app/menu-terco/menu-terco.component';

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
    declarations: [VerOracaoPage, MenuTercoComponent],
    entryComponents: [MenuTercoComponent]
})
export class VerOracaoPageModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { VerOracaoPage } from './ver-oracao.page';
import { OracaoResolverService } from 'src/resolvers/oracao/oracao-resolver.service';

const routes: Routes = [
    {
        path: ':id',
        component: VerOracaoPage,
        resolve: { oracao: OracaoResolverService }
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes)
    ],
    declarations: [VerOracaoPage],
})
export class VerOracaoPageModule { }

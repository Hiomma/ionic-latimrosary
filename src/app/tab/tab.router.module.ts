import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabPage } from './tab.page';

const routes: Routes = [
    {
        path: 'tab',
        component: TabPage,
        children: [
            {
                path: 'terco',
                children: [
                    {
                        path: '',
                        loadChildren: '../terco/terco.module#TercoPageModule'
                    }
                ]
            },
            {
                path: 'oracao',
                children: [
                    {
                        path: '',
                        loadChildren: '../oracao/oracao.module#OracaoPageModule'
                    }
                ]
            },
            {
                path: '',
                redirectTo: '/tab/terco',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/tab/terco',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class TabPageRoutingModule { }

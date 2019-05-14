import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', loadChildren: './home/home.module#HomePageModule' },
    { path: 'contate', loadChildren: './contate/contate.module#ContatePageModule' },
    { path: 'doe', loadChildren: './doe/doe.module#DoePageModule' },
    { path: 'ver-oracao', loadChildren: './oracao/ver-oracao/ver-oracao.module#VerOracaoPageModule' },
    { path: '', loadChildren: './tab/tab.module#TabPageModule' },
  { path: 'ver-terco', loadChildren: './terco/ver-terco/ver-terco.module#VerTercoPageModule' },
  { path: 'credito', loadChildren: './credito/credito.module#CreditoPageModule' },
  { path: 'missa', loadChildren: './missa/missa.module#MissaPageModule' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

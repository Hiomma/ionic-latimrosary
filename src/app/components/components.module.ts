import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { MenuTercoComponent } from './menu-terco/menu-terco.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule
    ],
    declarations: [MenuTercoComponent],
    entryComponents: [MenuTercoComponent]
})
export class ComponentsModule { }

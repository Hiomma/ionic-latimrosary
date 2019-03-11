import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TabPageRoutingModule } from './tab.router.module';

import { IonicModule } from '@ionic/angular';

import { TabPage } from './tab.page';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        TabPageRoutingModule
    ],
    declarations: [TabPage]
})
export class TabPageModule { }

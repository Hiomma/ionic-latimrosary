import { FiltroPipe } from './filtro/filtro.pipe';
import { NgModule } from '@angular/core';

@NgModule({
    declarations: [FiltroPipe],
    exports: [FiltroPipe]
})
export class PipeModule { }

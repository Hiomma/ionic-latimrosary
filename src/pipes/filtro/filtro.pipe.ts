import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

    transform(value: any[], texto: string): any {
        if (texto.length == 0) { return value; }

        texto = texto.toLocaleLowerCase();

        return value.filter(value => { return value.nome.toLocaleLowerCase().includes(texto) || value.nomeLatim.toLocaleLowerCase().includes(texto) })
    }

}

import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { OracoesService } from 'src/services/oracoes/oracoes.service';

@Injectable({
    providedIn: 'root'
})
export class OracaoResolverService implements Resolve<any> {

    constructor(private oracao: OracoesService) { }

    resolve(route: ActivatedRouteSnapshot) {
        let id = parseFloat(route.paramMap.get("id"));

        return this.oracao.findById(id);
    }
}

import { Injectable } from '@angular/core';
import { MissasService } from 'src/services/missas/missas.service';
import { ActivatedRouteSnapshot } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class MissaResolverService {

    constructor(private missa: MissasService) { }

    resolve(route: ActivatedRouteSnapshot) {
        let id = parseFloat(route.paramMap.get("id"));

        return this.missa.findById(id);
    }
}

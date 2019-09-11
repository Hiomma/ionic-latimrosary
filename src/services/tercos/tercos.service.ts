import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Terco {
    id?: string;
    task: string;
    priority: number;
    createdAt: number;
}


@Injectable({
    providedIn: 'root'
})
export class TercosService {

    private tercos: any = new Array;


    constructor() {


        this.tercos.push(
            {
                descricao: "Qua/Dom",
                id: "B8whCeNXQ8A0GjximZLH",
                imagem: "assets/imgs/coracao.svg",
                nome: "Mistérios Gloriosos",
                nomeLatim: "Mysteria Gloriosa",
                nomeSimplificado: "Mist. Gloriosos",
            },
            {
                descricao: "Ter/Sex",
                id: "QZnOa2BlN7QfNo7Wk2K7",
                imagem: "assets/imgs/cruz.svg",
                nome: "Mistérios Dolorosos",
                nomeLatim: "Mysteria Dolorosa",
                nomeSimplificado: "Mist. Dolorosos",
            },
            {
                descricao: "Qui",
                id: "QkFcWQqSh98hIpkzSTYN",
                imagem: "assets/imgs/eucaristia.svg",
                nome: "Mistérios Luminosos",
                nomeLatim: "Mysteria Luminosa",
                nomeSimplificado: "Mist. Luminosos",
            },
            {
                descricao: "Seg/Sáb",
                id: "tAsMFi6KvGxyC7kAyht2",
                imagem: "assets/imgs/nascimento.svg",
                nome: "Mistérios Gozosos",
                nomeLatim: "Mysteria Gaudiosa",
                nomeSimplificado: "Mist. Gozosos",
            }
        )
    }

    getTercos() {
        return this.tercos;
    }
}

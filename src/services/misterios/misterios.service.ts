import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


export interface Misterio {
    id?: string;
    task: string;
    priority: number;
    createdAt: number;
}


@Injectable({
    providedIn: 'root'
})
export class MisteriosService {

    private misterios: Array<any> = new Array();


    constructor() {


        this.misterios.push(
            {
                id: "1",
                audio: "gloriaprimeiromisterio.mp3",
                idTerco: "B8whCeNXQ8A0GjximZLH",
                oracao: "No primeiro mistério contemplemos a Ressurreição de Cristo Nosso Senhor.",
                oracaoLatim: "Resurrectionis mysterium: Iesus a mortuis resurgit."
            },
            {
                id: "2",
                audio: "gloriasegundomisterio.mp3",
                idTerco: "B8whCeNXQ8A0GjximZLH",
                oracao: "No segundo mistério contemplemos a Ascensão de Nosso Senhor ao Céu.",
                oracaoLatim: "Ascensionis mysterium: Iesus caelos ad Patris gloriam ascendit."
            },
            {
                id: "3",
                audio: "gloriaterceiromisterio.mp3",
                idTerco: "B8whCeNXQ8A0GjximZLH",
                oracao: "No Terceiro Mistério contemplamos a descida do Espírito Santo sobre Nossa Senhora e os Apóstolos no Cenáculo. ",
                oracaoLatim: "Missionis Spiritus Sancti mysterium: Spiritus Paraclitus supra discipulos descendit."
            },
            {
                id: "4",
                audio: "gloriaquartomisterio.mp3",
                idTerco: "B8whCeNXQ8A0GjximZLH",
                oracao: "No quarto mistério contemplemos a Assunção de Nossa Senhora ao Céu.",
                oracaoLatim: "Assumptionis Beatae Mariae Virginis mysterium: Assumpta est Maria in caelum."
            },
            {
                id: "5",
                audio: "gloriaquintomisterio.mp3",
                idTerco: "B8whCeNXQ8A0GjximZLH",
                oracao: "No Quinto Mistério contemplamos a gloriosa coroação de Maria Santíssima como Rainha do Céu e da Terra. ",
                oracaoLatim: "Glorificationis Beatae Mariae Virginis mysterium: Maria Virgo in caelis regina coronatur."
            },
            {
                id: "6",
                audio: "dorprimeiromisterio.mp3",
                idTerco: "QZnOa2BlN7QfNo7Wk2K7",
                oracao: "No primeiro mistério contemplemos a Agonia de Cristo Nosso Senhor, quando suou sangue no Horto.",
                oracaoLatim: "Agoniae mysterium: Iesus in horto Gethsemani orat."
            },
            {
                id: "7",
                audio: "dorsegundomisterio.mp3",
                idTerco: "QZnOa2BlN7QfNo7Wk2K7",
                oracao: "No segundo mistério contemplemos a Flagelação de Jesus Cristo atado à coluna.",
                oracaoLatim: "Flagellationis mysterium: Iesus flagellis caeditur."
            },
            {
                id: "8",
                audio: "dorterceiromisterio.mp3",
                idTerco: "QZnOa2BlN7QfNo7Wk2K7",
                oracao: "No terceiro mistério contemplemos a Coroação de espinho de Nosso Senhor.",
                oracaoLatim: "Ecce homo mysterium: Iesus spinis coronatur."
            },
            {
                id: "9",
                audio: "dorquartomisterio.mp3",
                idTerco: "QZnOa2BlN7QfNo7Wk2K7",
                oracao: "No quarto mistério contemplemos Jesus Cristo carregando a Cruz para o Calvário.",
                oracaoLatim: "Viae crucis mysterium: Iesus cruce oneratus Calvariae locum adit."
            },
            {
                id: "10",
                audio: "dorquintomisterio.mp3",
                idTerco: "QZnOa2BlN7QfNo7Wk2K7",
                oracao: "No quinto mistério contemplemos a Crucificação e morte de Nosso Senhor Jesus Cristo.",
                oracaoLatim: "Mortis mysterium: Iesus in cruce moritur, stabat iuxta crucem Iesu mater eius."
            },
            {
                id: "11",
                audio: "luzprimeiromisterio.mp3",
                idTerco: "QkFcWQqSh98hIpkzSTYN",
                oracao: "No primeiro mistério contemplemos o Batismo de Jesus no rio Jordão.",
                oracaoLatim: "Baptismatis mysterium: Iordane in flumine Iesus a Ioanne baptizatur et Spiritus super eum descendit."
            },
            {
                id: "12",
                audio: "luzsegundomisterio.mp3",
                idTerco: "QkFcWQqSh98hIpkzSTYN",
                oracao: "No segundo mistério contemplemos a Auto-revelação de Jesus nas Bodas de Caná.",
                oracaoLatim: "Nuptiarum in Cana mysterium: Iesus aquam in vinum commutat propter Mariae intercessionem."
            },
            {
                id: "13",
                audio: "luzterceiromisterio.mp3",
                idTerco: "QkFcWQqSh98hIpkzSTYN",
                oracao: "No terceiro mistério contemplemos o Anúncio do Reino de Deus.",
                oracaoLatim: "Proclamationis regni Dei mysterium: Iesus adventum regni Dei nuntiat et ad conversionem hortatur."
            },
            {
                id: "14",
                audio: "luzquartomisterio.mp3",
                idTerco: "QkFcWQqSh98hIpkzSTYN",
                oracao: "No quarto mistério contemplemos a Transfiguração de Jesus.",
                oracaoLatim: "Transfigurationis mysterium: Iesus in monte Tabor transfiguratur."
            },
            {
                id: "15",
                audio: "luzquintomisterio.mp3",
                idTerco: "QkFcWQqSh98hIpkzSTYN",
                oracao: "No quinto mistério contemplemos a Instituição da Eucaristia.",
                oracaoLatim: " Eucharistiae mysterium: Iesus in cenaculo Eucharistiam instituit, corpus ac sanguinem suum nobis donans."
            },
            {
                id: "16",
                audio: "gozosoprimeiromisterio.mp3",
                idTerco: "tAsMFi6KvGxyC7kAyht2",
                oracao: "No primeiro mistério contemplemos a Anunciação do Arcanjo São Gabriel à Nossa Senhora.",
                oracaoLatim: "Incarnationis mysterium: Angelus Gabriel nuntiavit Mariae, Maria concepit de Spiritu Sancto, et verbum caro factum est."
            },
            {
                id: "17",
                audio: "gozososegundomisterio.mp3",
                idTerco: "tAsMFi6KvGxyC7kAyht2",
                oracao: "No segundo mistério contemplemos a Visitação de Nossa Senhora à sua prima Santa Isabel.",
                oracaoLatim: "Visitationis mysterium: Maria Virgo Elisabeth visitat et magnificat Dominum."
            },
            {
                id: "18",
                audio: "gozosoterceiromisterio.mp3",
                idTerco: "tAsMFi6KvGxyC7kAyht2",
                oracao: "No terceiro mistério contemplemos o Nascimento do Menino Jesus em Belém.",
                oracaoLatim: "Nativitatis mysterium: Iesus in Bethlehem nascitur."
            },
            {
                id: "19",
                audio: "gozosoquartomisterio.mp3",
                idTerco: "tAsMFi6KvGxyC7kAyht2",
                oracao: "No Quarto Mistério contemplamos a Apresentação do Menino Jesus no Templo e a Purificação de Nossa Senhora.",
                oracaoLatim: "Praesentationis mysterium: Iesus in templo praesentatur."
            },
            {
                id: "20",
                audio: "gozosoquintomisterio.mp3",
                idTerco: "tAsMFi6KvGxyC7kAyht2",
                oracao: "No quinto mistério contemplemos a Perda e o Encontro do Menino Jesus no templo.",
                oracaoLatim: "Inventionis mysterium: Puer Iesus de iis, qui patres ipsius sunt, sollicitus."
            });
    }

    getMisterios() {
        return this.misterios;
    }

    getMisteriosById(id) {
        return this.misterios.filter((element) => {
            return element.idTerco == id;
        });
    }
}

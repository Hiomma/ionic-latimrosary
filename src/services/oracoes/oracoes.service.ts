import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Oracao {
    id?: string;
    task: string;
    priority: number;
    createdAt: number;
}

@Injectable({
    providedIn: 'root'
})
export class OracoesService {

    private oracoes: any = new Array();

    constructor() {

        this.oracoes.push(
            {
                audio: "credo.mp3",
                id: 1,
                imagem: "assets/imgs/igreja.svg",
                nome: "Credo",
                nomeLatim: "Credo",
                oracao: "Creio em Deus Pai todo-poderoso,<br> criador do céu e da terra;<br> e em Jesus Cristo, seu único Filho, Nosso Senhor;<br> que foi concebido pelo poder do Espírito Santo;<br> nasceu na Virgem Maria,<br> padeceu sob Pôncio Pilatos,<br> foi crucificado morto e sepultado;<br> desceu à mansão dos mortos; <br> ressuscitou ao terceiro dia;<br> subiu aos céus,<br> está sentado à direita de Deus Pai todo-poderoso,<br> donde há de vir a julgar os vivos e os mortos;<br> creio no Espírito Santo,<br> na santa Igreja Católica,<br> na comunhão dos santos,<br> na remissão dos pecados,<br> na ressurreição da carne,<br> na vida eterna.<br><br> Amém",
                oracaoLatim: "Credo in Deum, Patrem omnipoténtem,<br> Creatórem caeli et terrae.<br> Et in Iesum Christum, Filium eius únicum, Dóminùm nostrum;<br> qui concéptus est de Spíritu Sancto,<br> natus ex María Virgine,<br> passus sub Pontio Piláto,<br> crucifíxus, mórtuus, et sepúltus;<br> descéndit ad ínferos;<br> tértia die resurréxit a mórtuis;<br> ascéndit ad caelos;<br> sedet ad déxteram Dei Patris omnipoténtis;<br> inde ventúrus est judicare vivos et mórtuos.<br> Credo in Spiritum Sanctum,<br> sanctam Ecclésiam Cathólicam,<br> Sanctórum communionem,<br> remissiónem peccatórum,<br> carnis resurrectiónem,<br> vitam aetérnam.<br><br> Amen"
            },
            {
                audio: "gloria.mp3",
                id: 2,
                imagem: "assets/imgs/espirito-santo.svg",
                nome: "Glória ao Pai",
                nomeLatim: "Glória Patri",
                oracao: "Glória ao Pai <br> e ao Filho <br> e ao Espírito Santo.<br> Como era, no princípio,<br> agora e sempre. <br><br> Amém",
                oracaoLatim: "Glória Patri <br> et Fílio <br> et Spirítui Sancto. <br> Sicut erat in princípio,<br> et nunc et semper <br> et in saecula saeculórum.<br><br> Amen"
            },
            {
                audio: "painosso.mp3",
                id: 3,
                imagem: "assets/imgs/pai.svg",
                nome: "Pai Nosso",
                nomeLatim: "Pater Noster",
                oracao: "Pai Nosso que estais nos Céus, <br> santificado seja o vosso Nome, <br> venha a nós o vosso Reino, <br> seja feita a vossa vontade <br>  assim na terra como no Céu. <br> O pão nosso de cada dia nos dai hoje, <br> perdoai-nos as nossas ofensas <br> assim como nós perdoamos a quem nos tem ofendido, <br> e não nos deixeis cair em tentação, <br> mas livrai-nos do Mal. <br><br> Amém",
                oracaoLatim: "Pater Noster, qui es in caelis <br> Sanctificétur nomen tuum,<br> Advéniat regnum tuum, <br> Fiat voluntas tua,<br> sicut in caelo, et in terra. <br> Panem nostrum quotidiánum da nobis hódie, <br> et dimítte nobis débita nostra, <br> sicut et nos dimíttimus debitóribus nostris. <br> Et ne nos indúcas in tentatiónem. <br> Sed líbera nos a malo. <br><br> Amen"
            },
            {
                audio: "fatima.mp3",
                id: 7,
                imagem: "assets/imgs/fatima.svg",
                nome: "Oração de Fátima",
                nomeLatim: "Oratio Fatima",
                oracao: "Ó meu bom Jesus,<br> perdoai-nos, livrai-nos do fogo do inferno,<br> levai as almas todas para o céu<br> e socorrei principalmente as que mais precisarem.",
                oracaoLatim: "O mi Iesu,<br> dimitte nobis debita nostra,<br> libera nos ab igne inferni,<br> conduc in caelum omnes animas,<br> praesertim illas quæ maxime indigent misericordia tua."
            },
            {
                audio: "sinaldacruz.mp3",
                id: 4,
                imagem: "assets/imgs/cruz.svg",
                nome: "Sinal da Cruz",
                nomeLatim: "Signum Crucis",
                oracao: "Pelo sinal da santa cruz,<br> livrai-nos, Deus nosso Senhor,<br> dos nossos inimigos.<br><br>  Em nome do Pai,<br> e do Filho<br> e do Espírito Santo.<br> Amém",
                oracaoLatim: "Per signum crucis,<br> de inimicis nostris<br> libera-nos Deus noster.<br><br>  In nonime Patris<br> et Fílii<br> et Spitiui Sancto.<br> Amen"
            },
            {
                audio: "avemaria.mp3",
                id: 5,
                imagem: "assets/imgs/maria.svg",
                nome: "Ave Maria",
                nomeLatim: "Ave Maria",
                oracao: "Ave Maria,<br> cheia de graça,<br> o Senhor é convosco,<br> bendita sois vós entre as mulheres<br> e bendito é o fruto do vosso ventre, Jesus.<br> Santa Maria, Mãe de Deus,<br> rogai por nós pecadores,<br> agora e na hora da nossa morte.<br><br> Amém",
                oracaoLatim: "Ave, María,<br> grátia plena,<br> Dóminus tecum,<br> benedícta tu in muliéribus,<br> et benedictus fructus ventris tui Iesus.<br> Sancta María, Mater Dei,<br> ora pro nobis peccatóribus,<br> nunc et in hora mortis nostrae.<br><br> Amen"
            },
            {
                audio: "salverainha.mp3",
                id: 6,
                imagem: "assets/imgs/coroa.svg",
                nome: "Salve Rainha",
                nomeLatim: "Salve Regina",
                oracao: "Salve, Rainha, Mãe de misericórdia,<br> vida, doçura e esperança nossa, salve!<br> A vós bradamos, os degredados filhos de Eva;<br> a vós suspiramos, gemendo e chorando neste vale de lágrimas.<br> Eia, pois advogada nossa,<br> esses vossos olhos misericordiosos a nós volvei;<br> e depois deste desterro<br> nos mostrai Jesus, bendito fruto do vosso ventre,<br> ó clemente, ó piedosa, ó doce sempre Virgem Maria.<br><br>  Rogai por nós, santa Mãe de Deus.<br>  R: Para que sejamos dignos das promessas de Cristo.",
                oracaoLatim: "Salve, Regina, Mater misericordiae,<br> vita, dulcédo et spes nostra, salve.<br> Ad te clamamus, éxsules filii Evae.<br> Ad te suspirámus geméntes et flentes in hac lacrimárum valle.<br> Eia ergo, advocáta nostra,<br> illos tuos misericórdes óculos ad nos convérte.<br> Et Jesum benedíctum fructum Ventris tui,<br> nobis, post hoc exsílium, osténde.<br> O clemens, o pia, o dulcis Virgo María!<br><br>  Ora pro nobis, sancta Dei Génitrix.<br> R: Ut digni efficiámur promissiónibus Christi."
            }
        )


    }

    getOracoes() {
        return new Observable((observer) => {
            observer.next(this.oracoes);
        })
    }
}

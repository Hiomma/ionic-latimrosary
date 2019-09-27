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

    private oracoes: Array<any> = new Array();

    constructor() {

        this.oracoes.push(
            {
                audio: "credo.mp3",
                id: 1,
                imagem: "assets/imgs/igreja.svg",
                nome: "Credo",
                nomeLatim: "Credo",
                oracao: "Creio em Deus Pai todo-poderoso,<br> criador do céu e da terra;<br> e em Jesus Cristo, seu único Filho, Nosso Senhor;<br> que foi concebido pelo poder do Espírito Santo;<br> nasceu na Virgem Maria,<br> padeceu sob Pôncio Pilatos,<br> foi crucificado morto e sepultado;<br> desceu à mansão dos mortos; <br> ressuscitou ao terceiro dia;<br> subiu aos céus,<br> está sentado à direita de Deus Pai todo-poderoso,<br> donde há de vir a julgar os vivos e os mortos;<br> creio no Espírito Santo,<br> na santa Igreja Católica,<br> na comunhão dos santos,<br> na remissão dos pecados,<br> na ressurreição da carne,<br> na vida eterna.<br><br> Amém",
                oracaoLatim: "Credo in Deum, Patrem omnipoténtem,<br> Creatórem cæli et terræ.<br> Et in Iesum Christum, Filium eius únicum, Dóminùm nostrum;<br> qui concéptus est de Spíritu Sancto,<br> natus ex María Virgine,<br> passus sub Pontio Piláto,<br> crucifíxus, mórtuus, et sepúltus;<br> descéndit ad ínferos;<br> tértia die resurréxit a mórtuis;<br> ascéndit ad cælos;<br> sedet ad déxteram Dei Patris omnipoténtis;<br> inde ventúrus est judicare vivos et mórtuos.<br> Credo in Spiritum Sanctum,<br> sanctam Ecclésiam Cathólicam,<br> Sanctórum communionem,<br> remissiónem peccatórum,<br> carnis resurrectiónem,<br> vitam ætérnam.<br><br> Amen"
            },
            {
                audio: "gloria.mp3",
                id: 2,
                imagem: "assets/imgs/espirito-santo.svg",
                nome: "Glória ao Pai",
                nomeLatim: "Glória Patri",
                oracao: "Glória ao Pai <br> e ao Filho <br> e ao Espírito Santo.<br> Como era, no princípio,<br> agora e sempre. <br><br> Amém",
                oracaoLatim: "Glória Patri <br> et Fílio <br> et Spirítui Sancto. <br> Sicut erat in princípio,<br> et nunc et semper <br> et in sæcula sæculórum.<br><br> Amen"
            },
            {
                audio: "painosso.mp3",
                id: 3,
                imagem: "assets/imgs/pai.svg",
                nome: "Pai Nosso",
                nomeLatim: "Pater Noster",
                oracao: "Pai Nosso que estais nos Céus, <br> santificado seja o vosso Nome, <br> venha a nós o vosso Reino, <br> seja feita a vossa vontade <br>  assim na terra como no Céu. <br> O pão nosso de cada dia nos dai hoje, <br> perdoai-nos as nossas ofensas <br> assim como nós perdoamos a quem nos tem ofendido, <br> e não nos deixeis cair em tentação, <br> mas livrai-nos do Mal. <br><br> Amém",
                oracaoLatim: "Pater Noster, qui es in cælis <br> Sanctificétur nomen tuum,<br> Advéniat regnum tuum, <br> Fiat voluntas tua,<br> sicut in cælo, et in terra. <br> Panem nostrum quotidiánum da nobis hódie, <br> et dimítte nobis débita nostra, <br> sicut et nos dimíttimus debitóribus nostris. <br> Et ne nos indúcas in tentatiónem. <br> Sed líbera nos a malo. <br><br> Amen"
            },
            {
                audio: "fatima.mp3",
                id: 7,
                imagem: "assets/imgs/fatima.svg",
                nome: "Oração de Fátima",
                nomeLatim: "Oratio Fatima",
                oracao: "Ó meu bom Jesus,<br> perdoai-nos, livrai-nos do fogo do inferno,<br> levai as almas todas para o céu<br> e socorrei principalmente as que mais precisarem.",
                oracaoLatim: "O mi Iesu,<br> dimitte nobis debita nostra,<br> libera nos ab igne inferni,<br> conduc in cælum omnes animas,<br> præsertim illas quæ maxime indigent misericordia tua."
            },
            {
                audio: "sinaldacruz.mp3",
                id: 4,
                imagem: "assets/imgs/cruz.svg",
                nome: "Sinal da Cruz",
                nomeLatim: "Signum Crucis",
                oracao: "Pelo sinal da santa cruz,<br> livrai-nos, Deus nosso Senhor,<br> dos nossos inimigos.<br><br>  Em nome do Pai,<br> e do Filho<br> e do Espírito Santo.<br> Amém",
                oracaoLatim: "Per signum crucis,<br> de inimicis nostris<br> libera-nos Deus noster.<br><br>  In nonime Patris<br> et Fílii<br> et Spiritui Sancto.<br> Amen"
            },
            {
                audio: "avemaria.mp3",
                id: 5,
                imagem: "assets/imgs/maria.svg",
                nome: "Ave Maria",
                nomeLatim: "Ave Maria",
                oracao: "Ave Maria,<br> cheia de graça,<br> o Senhor é convosco,<br> bendita sois vós entre as mulheres<br> e bendito é o fruto do vosso ventre, Jesus.<br> Santa Maria, Mãe de Deus,<br> rogai por nós pecadores,<br> agora e na hora da nossa morte.<br><br> Amém",
                oracaoLatim: "Ave, María,<br> grátia plena,<br> Dóminus tecum,<br> benedícta tu in muliéribus,<br> et benedictus fructus ventris tui Iesus.<br> Sancta María, Mater Dei,<br> ora pro nobis peccatóribus,<br> nunc et in hora mortis nostræ.<br><br> Amen"
            },
            {
                audio: "salverainha.mp3",
                id: 6,
                imagem: "assets/imgs/coroa.svg",
                nome: "Salve Rainha",
                nomeLatim: "Salve Regina",
                oracao: "Salve, Rainha, Mãe de misericórdia,<br> vida, doçura e esperança nossa, salve!<br> A vós bradamos, os degredados filhos de Eva;<br> a vós suspiramos, gemendo e chorando neste vale de lágrimas.<br> Eia, pois advogada nossa,<br> esses vossos olhos misericordiosos a nós volvei;<br> e depois deste desterro<br> nos mostrai Jesus, bendito fruto do vosso ventre,<br> ó clemente, ó piedosa, ó doce sempre Virgem Maria.<br><br>  Rogai por nós, santa Mãe de Deus.<br>  R: Para que sejamos dignos das promessas de Cristo.",
                oracaoLatim: "Salve, Regina, Mater misericordiæ,<br> vita, dulcédo et spes nostra, salve.<br> Ad te clamamus, éxsules filii Evæ.<br> Ad te suspirámus geméntes et flentes in hac lacrimárum valle.<br> Eia ergo, advocáta nostra,<br> illos tuos misericórdes óculos ad nos convérte.<br> Et Iesum benedíctum fructum Ventris tui,<br> nobis, post hoc exsílium, osténde.<br> O clemens, o pia, o dulcis Virgo María!<br><br>  Ora pro nobis, sancta Dei Génitrix.<br> R: Ut digni efficiámur promissiónibus Christi."
            },
            {
                audio: "animachristi.mp3",
                id: 7,
                imagem: "assets/imgs/almacristo.svg",
                nome: "Alma de Cristo",
                nomeLatim: "Anima Christi",
                oracao: "Alma de Cristo, santificai-me.<br> Corpo de Cristo, salvai-me.<br>Sangue de Cristo, inebriai-me.<br> Água do lado de Cristo, lavai-me.<br> Paixão de Cristo, confortai-me.<br> Ó bom Jesus, escutai-me.<br> Dentro de Vossas chagas escondei-me.<br> Não permitais que me separe de Vós.<br> Do exército do maligno defendei-me.<br> Na hora da Morte chamai-me.<br> E chamai-me para ir a Vós,<br> para que com Vossos santos Vos louve.<br> pelo séculos dos séculos. <br><br> Ámen.",
                oracaoLatim: "Anima Christi, sanctifica me.<br> Corpus Christi, salva me.<br> Sanguis Christi, inebria me.<br> Aqua lateris Christi, lava me.<br> Passio Christi, conforta me.<br> O bone Iesu, exaudi me.<br> Intra tua vulnera absconde me.<br> Ne permittas me separari a te.<br>  Ab hoste maligno defende me.<br> In hora mortis meæ voca me. <br>Et iube me venire ad te, <br>ut cum Sanctis tuis laudem te<br> in sæcula sæculorum. <br><br>Amen."
            },
            {
                audio: "confiteor.mp3",
                id: 8,
                imagem: "assets/imgs/confessor.svg",
                nome: "Confesso",
                nomeLatim: "Confiteor",
                oracao: "Confesso a Deus Todo-poderoso,<br>  à bem-aventurada sempre Virgem Maria, <br> ao bem-aventurado Miguel Arcanjo, <br> ao bem-aventurado João Batista, <br> aos santos Apóstolos Pedro e Paulo,<br> e a todos os santos, <br> que pequei muitas vezes por pensamentos, palavras e ações, <br> por minha culpa, minha culpa, minha máxima culpa.<br> Por isso, peço à bem-aventurada sempre Virgem Maria,<br> ao bem-aventurado Miguel Arcanjo,<br>  ao bem-aventurado João Batista, <br> aos santos Apóstolos Pedro e Paulo, <br> e a todos os santos, <br> que oreis por mim a Deus, Nosso Senhor. <br><br>  Amém.",
                oracaoLatim: "Confiteor Deo omnipotenti,<br>  beatæ Mariæ semper Virgini, <br>  beato Michæli Archangelo,  <br>  beato Ioanni Baptistæ, <br>  sanctis Apostolis Petro et Paulo, <br>  et omnibus Sanctis,  <br> quia peccavi nimis cogitatione, verbo et opere: <br> mea culpa, mea culpa, mea maxima culpa. <br> Ideo precor beatam Mariam semper Virginem,<br>  beatum Michælem Archangelum,<br>  beatum Ioannem Baptistam, <br> sanctos Apostolos Petrum et Paulum, <br> et omnes Sanctos, <br> orare pro me ad Dominum Deum nostrum. <br><br>  Amen."
            },
            {
                audio: "venicreator.mp3",
                id: 9,
                imagem: "assets/imgs/vemespirito.svg",
                nome: "Vinde Criador",
                nomeLatim: "Veni Creator",
                oracao: "Vinde, Espírito Criador,<br> visitai as almas dos Vossos, <br> enchei de graça celestial, <br> os corações que criastes. <br> Sois o Divino Consolador, <br> o dom do Deus Altíssimo, <br> fonte viva, o fogo, a caridade, <br> a unção dos espirituais. <br> Com os Vossos sete dons, <br> sois o dedo da direita de Deus, <br> Solene promessa do Pai, <br> Inspirando nossas palavras. <br> Acendei a luz nos sentidos; <br> insuflai o amor nos corações, <br> amparai na constante virtude <br> a nossa carne enfraquecida. <br> Afastai para longe o inimigo, <br> Trazei-nos prontamente a paz; <br> Assim guiados por Vós <br> Evitaremos todo o mal. <br> Por Vós explicar-se-á o Pai, <br> E conheceremos o Filho; <br> Dai-nos crer sempre em Vós <br> Espírito do Pai e do Filho. <br> Glória ao Pai, Senhor, <br> Ao Filho que ressuscitou <br> Assim como ao Consolador. <br>  Por todos os séculos. Amém. <br><br>  Amém.",
                oracaoLatim: "Veni, Creator Spíritus,<br> mentes tuórum visita, <br> imple supérna grátia, <br>  quæ tu creásti péctora. <br> Qui díceris Paráclitus, <br> altíssimi donum Dei, <br> fons vivus, ignis, cáritas, <br> et spiritális únctio. <br> Tu septifórmis múnere, <br> dígitus paternæ déxteræ, <br>  tu rite promíssum Patris, <br> sermóne ditans gúttura. <br> Accénde lumen sénsibus; <br> infunde amórem córdibus, <br> infírma nostri córporis <br> virtúte firmans pérpeti. <br> Hostem repéllas lóngius, <br> pacémque dones prótinus; <br> ductóre sic te prævio <br> vitemus omne noxium. <br> Per te sciámus da Patrem, <br> noscamus atque Filium; <br> teque utriúsque Spíritum <br> credamus omni témpore. <br> Deo Patri sit glória, <br> et Fillio, qui a mórtuis <br> surréxit, ac Paráclito, <br> in sæculórum sæcula. <br><br> Amen <br>"
            },
        )


    }

    getOracoes() {
        return this.oracoes.sort((a, b) => { return a.nomeLatim < b.nomeLatim ? -1 : a.nomeLatim > b.nomeLatim ? 1 : 0; });
    }

    findById(id: number) {
        return this.oracoes.find(x => { return x.id == id })
    }
}

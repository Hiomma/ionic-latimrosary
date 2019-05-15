import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class MissasService {
    private missas: any = new Array();


    constructor() {
        this.missas.push(
            {
                id: 1,
                nome: "Santa Missa de São Pio V",
                descricao: "Rito Tridentino/Extraordinário",
                baloes: [
                    {
                        id: 1,
                        titulo: "Rito de Entrada",
                        conteudo: '<p>S/. In nómine Patris † et Filii et Spíritus Sancti. Amen. </p> <p>S/. Introíbo ad altáre Dei.<p style="font-weight: bold">T/. Ad Deum qui laetifícat iuventútem meam.<p></p>'
                    },
                    {
                        id: 2,
                        titulo: "Salmo 42, 1-5",
                        conteudo: '<p>S/. Iúdica me, Deusu, et discérne causam meam de gente non sancta: ab hómine iniquo, et dolósso érue me.</p>' +
                            '<p style="font-weight: bold">T/. Quia tu es, Deus, fortitúdo mea: quare me repulísti, et quare tristis incédo, dum afflígitt me inimícus?</p>' +
                            '<p>S/. Emíttet lucem tuam et veritátem tuam: ipsa me deduxérunt, et adduxérunt in montem sanctum tuum, et in tabernácula tua.</p>' +
                            '<p style="font-weight: bold">T/. Et introíbo ad altáre Dei: ad Deum qui laetificat iu ventútem meam.</p>' +
                            '<p>S/. Confitébor tibi in cíthara, Deus, Deus meus; quare tristis es, ánima mea, ett quare contúrbas me?</p>' +
                            '<p style="font-weight: bold">T/. Spera in Deo, quóniam adhuc confitébor illi: salutáre vultus mei, et Deus meus.</p>' +
                            '<p>S/. Glória Patri et Filio et Spiritui Sancto</p>' +
                            '<p style="font-weight: bold">T/. Sicut erat in princípio et nunc et semper, et in saécula saeculórum. Amen.</p>' +
                            '<p>S/. Introíbo ad altáre Dei.</p>' +
                            '<p style="font-weight: bold">T/. Ad Deum qui laetificat iuventútem meam.</p>' +
                            '<p>S/. Adiutórium nostrum † in nómine Dómini</p>' +
                            '<p style="font-weight: bold">T/. Qui fecit caelum et terram.</p>'
                    },
                    {
                        id: 3,
                        titulo: "Confiteor do Celebrante",
                        conteudo: '<p>S/. Confíteor Deo Omnipoténti,/ Beáte Mariae semper Virgini,/ Beato Michaéli Archángelo,/ Beáto Ioánni Baptistae,/ Sanctis Apostólis Petro et Paulo,/ ómnibus Sanctis et vobis frates,/ ' +
                            'quia peccávi nimis cogitatióne, verbo et ópere:/ <span style="color: #FF6961">(batendo três vezes no peito)</span> mea culpa, mea culpa, mea máxima culpa;/ ideo precor beátatm Maríam ' +
                            'semper Vírginem,/ Beátum Michaélem Archángelum,/ Beátum Ioánnem Baptístam,/ Sanctos Apóstotlos Petrum et Paulum,/ omnes Sanctos, et vos fratres,/ oráre pro me ad Dóminum Deum nostrum. ' +
                            '<p style="font-weight: bold">T/. Misereátur tui Omnípotens Deus, et, dimíssis, peccátis tuis, perdúcat te ad vitam aetérnam.</p>' +
                            '<p>S/. Amen.</p>'
                    },
                    {
                        id: 4,
                        titulo: "Confiteor dos fiéis",
                        conteudo: '<p style="font-weight: bold">T/. Confíteor Deo Omnipoténti,/ Beáte Mariae semper Virgini,/ Beato Michaéli Archángelo,/ Beáto Ioánni Baptistae,/ Sanctis Apostólis Petro et Paulo,/ ómnibus Sanctis et tibi, pater,/ ' +
                            'quia peccávi nimis cogitatióne, verbo et ópere:/ <span style="color: #FF6961">(batendo três vezes no peito)</span> mea culpa, mea culpa, mea máxima culpa;/ ideo precor beátatm Maríam ' +
                            'semper Vírginem,/ Beátum Michaélem Archángelum,/ Beátum Ioánnem Baptístam,/ Sanctos Apóstotlos Petrum et Paulum,/ omnes Sanctos, et te, pater,/ oráre pro me ad Dóminum Deum nostrum. ' +
                            '<p>S/. Misereátur vestri Omnípotens Deus, et, dimíssis, peccátis vestris, perdúcat vos ad vitam aetérnam.</p>' +
                            '<p style="font-weight: bold">T/. Amen.</p>' +
                            '<p>S/. Indulgéntiam, absolutiónem et remissiónem peccatórum nostrorum tribuat nobis Omnípotens et Miséricors Dóminus.</p>' +
                            '<p style="font-weight: bold">T/. Amen.</p>' +
                            '<p style="color: #FF6961">(O celebrante, inclinado-se, diz:)</p></br></br>' +
                            '<p>S/. Deus, tu convérsus vivificábis nos.</p>' +
                            '<p style="font-weight: bold">T/. Et plebs tua laetábitur in te.</p>' +
                            '<p>S/. Osténde nobis, Dómine, misericórdiam tuam.</p>' +
                            '<p style="font-weight: bold">T/. Et salutáre tuum da nobis.</p>' +
                            '<p>S/. Dómine, exáudi oratiónem meam.</p>' +
                            '<p style="font-weight: bold">T/. Et clamor meus ad te véniat.</p>' +
                            '<p>S/. Dóminus vobíscum.</p>' +
                            '<p style="font-weight: bold">T/. Et cum spíritu tuo.</p></br></br>' +
                            '<p>S/. Orémus.</p></br></br>' +
                            '<p style="color: #FF6961">Os fiéis se levantam e permanecem de pé. O sacerdote sobe ao altar.</p>'
                    },
                    {
                        id: 5,
                        titulo: "Kyrie Eleison",
                        conteudo: '<p style="color: #FF6961">Kyrie eleison, palavras gregas que significam: Senhor tende misericórdia.</p>' +
                            '<p>S/. Kyrie, eléison</p>' +
                            '<p style="font-weight: bold">T/. Kyrie, eléison</p' +
                            '<p>S/. Kyrie, eléison</p>' +
                            '<p style="font-weight: bold">T/. Christe, eléison</p>' +
                            '<p>S/. Criste, eléison</p>' +
                            '<p style="font-weight: bold">T/. Christe, eléison</p>' +
                            '<p>S/. Kyrie, eléison</p>' +
                            '<p style="font-weight: bold">T/. Kyrie, eléison</p>' +
                            '<p>S/. Kyrie, eléison</p>'
                    },
                    {
                        id: 6,
                        titulo: "Glória",
                        conteudo: '<p>Glória in excélsis Deo.</p><span style="font- weight: bold">Et in terra pax hominibus bonae voluntátis. Laudámus te. Benedícimus te. Adorámus te. Glorificámus te. </span>' +
                            'Grátias ágimus tibi propter magnam glóriam tuam. Dómine Deus, Rex caeléstis, Deus Pater Omnípotens. Dómine Fili Unigénite, Iesu Christe. Domine Deus, Agnus Dei, Filius Patris. Qui tollis ' +
                            'peccátat mundi, miserére nobis. Qui tollis peccáta mundi, súscipe deprecatiónem nostram. Qui sedes ad déxteram Patris, miserére nobis. Quóniam Te solus Sanctus. Tu solus Dóminus. Tu solus Altíssimus, ' +
                            'Iesu Christe, cum Sancto Spiritu † in glória Dei Patris. Amen.</span>' +
                            '<p>S/. Dóminus vobíscum.</p>' +
                            '<p style="font-weight: bold">T/. Et cum spíritu tuo.</p>' +
                            '<p>S/. Orémus.</p>'
                    },
                    {
                        id: 7,
                        titulo: "Epístola",
                        conteudo: '<p style="color: #FF6961">O texto da Epístola é próprio de cada Santa Missa.</p>' +
                            '<p>S/. Léctio Espístolae</p></br></br>' +
                            '<p style="color: #FF6961">Ao terminar a Epístola, responde-se:</p>' +
                            '<p style="font-weight: bold">T/. Deo grátias.</p>'
                    },
                    {
                        id: 8,
                        titulo: "Gradual e Aleluia",
                        conteudo: '<p>S/. Dóminus vobíscum</p>' +
                            '<p style="font-weight: bold">T/. Et cum spíritu tuo</p></br>' +
                            '<p style="color: #FF6961">Faz-se com o sacerdote o sinal da Cruz, sobre a fronte, sobre a boca e sobre o peito, para mostrar que o Santo Evangelho deve ser a regra de nossos pensamentos, de nossas palavras e de nosso coração</p></br>' +
                            '<p>S/. Sequentia (vel Inítium) sancti † Evangélii secundum N.</p>' +
                            '<p style="font-weight: bold">T/. Glória Tibi, Dómine.</p></br>' +
                            '<p style="color: #FF6961">Ao final do Evangelho, responde-se:</p>' +
                            '<p style="font-weight: bold">T/. Laus ttibi, Christe.</p>'
                    },
                    {
                        id: 9,
                        titulo: "Credo",
                        conteudo: '<p style="font-weight: bold">Credo in unum Deum. Patrem Omnipotentem, factórem cæli et terræ, visibílium ómnium et invisibílium. Et in unum Dóminum, Iesum Christum, Filium Dei Unigénitum. ' +
                            'Et ex Patre natum, ante ómnia sæcula. Deum de Deo, Lumen de Lúmine, Deum verum de Deo vero. Génitum, non factum, consubstatiálem Patri; per Quem ómnia facta sunt. Qui propter nos hómines ' +
                            'et propter nostram salútem descéndit de cælis. <span style="color: #FF6961">(ajoelha-se) </span>ET INCARNÁTUS EST DE SPÍRITU SANCTO EX MARÍA VÍRGINE; ET HOMO FACTUS EST. ' +
                            'Crucifíxus étiam pro nobis; sub Póntio Piláto passus, et sepúltus est. Et resurréxit tértia die, secúndum Scriptúras. Et ascéndit in cælum: sedet ad déxteram Patris. ' +
                            'Et iterum ventúrus est cum glória iudicáre vivos et mórtuos; cuius Regni non erit finis. Et in Spíritum Sanctum, Dóminum et vivificántem, qui ex Patre Filióque procédit. ' +
                            'Qui cum Patre et Fílio simul adorátur et conglorificátur; qui locútus est per Propétas. Et Unam, Sanctam,Cathólicam et Apostólicam Ecclésiam. Confiteor unum Baptísma in remissiónem peccatórum. ' +
                            'Et exspecto resurrectiónem mortuórum. Et vitam ventúri sæculi. Amen</p></br></br>' +
                            '<p>S/. Dóminus vobíscum</p>' +
                            '<p style="font-weight: bold">T/. Et cum spíritu tuo</p>'
                    },
                    {
                        id: 10,
                        titulo: "Ofertório",
                        conteudo: '<p style="color: #FF6961">Antes de iniciar a celebração do mistério com o ofericmento do Pão e do Vinho, que vão ser transformados no Corpo e no Sangue de Jesus Cristo.</p></br>' +
                            '<p style="color: #FF6961">O Sacerdote beija o altar, volta-se para os fiéis e os convida a unirem-se a ele, em oração fervorosa.</p></br>' +
                            '<p>S/. Orate frates, ut meum ac vestrum sacrificium acceptabile fiat apud Deum Patrem omnipotentem.</p>' +
                            '<p style="font-weight: bold">T/. Suscipiat Dominus sacrifium de manibus tuis, ad laudem et gloriam nominis sui, ad utilitatem quoque nostram totiusque Ecclesiae suae sanctae.</p>' +
                            '<p>S/. Amen.</p>'
                    },
                    {
                        id: 11,
                        titulo: "Secreta",
                        conteudo: '<p>S/. Per ómnia saecula saeculórum.</p>' +
                            '<p style="font-weight: bold">T/. Amem</p>'
                    },
                    {
                        id: 12,
                        titulo: "Oração Eucaristica",
                        conteudo: '<p style="color: #FF6961">Em pé.</p></br>' +
                            '<p>S/. Dóminus vobíscum.</p>' +
                            '<p style="font-weight: bold">T/. Et cum spíritu tuo.</p>' +
                            '<p>S/. Sursum corda.</p>' +
                            '<p style="font-weight: bold">T/. Habémus ad Dóminum</p>' +
                            '<p>S/. Grátias agámus Dómino Deo nostro.</p>' +
                            '<p style="font-weight: bold">T/. Dignum et iustum est.</p>' +
                            '<p>S/. Vere dignum et justum est, aequum et salutáre, nos tibi semper et ubíque grátias ágere: Dómine sancte, Pater omnípotens, aetérne Deus: Qui cum Unigénito Fílio tuo et Spíritu Sancto, ' +
                            'unus es Deus, unus es Dóminus, non in uníus singularitáte persónae, sed in uníus Trinitáte substántiae. Quod enim de tua glória, revelánte te, crédimus, hoc de Fílio tuo, hoc de Spíritu Sancto, ' +
                            'sine differéntia discretiónis sentímus; ut in confessióne verae sempiternaéque Deitátis, et  in persónis propríetas et in esséntia únitats et in maiestáte adorétur aequálitas. Quam laudant Angeli ' +
                            'atque Archangeli, Chérubim quoque ac Séraphim, qui non ces sant clamare cotídie, una voce dicéntes:</p>'
                    },
                    {
                        id: 13,
                        titulo: "Sanctus",
                        conteudo: '<p style="color: #FF6961">Em pé.</p></br>' +
                            '<p style="font-weight: bold">Sanctus, Sanctus, Sanctus, Dóminus Deus Sábaoth. Pleni sunt caeli et terra glória tua. Hosánna in excélsis. Benedictus qui venit † in nómine Dómini. Hosánna in excélsis.</p></br>' +
                            '<p style="color: #FF6961">De joelhos.</p></br>'
                    },
                    {
                        id: 14,
                        titulo: "Cânon Romano",
                        conteudo: '<p>Te ígnitur, clementíssime Pater, per Iesum Christum Filium tuum Dóminum nostrum, súpplices rogámus, ac pétimus uti accépta hábeas, et benedícas haec dona, haec múnera, haec sancta sacrifícia ' +
                            'illibáta in primis, quae tibi offérimus pro Ecclésia tua sancta cathólica: quam pacificáre, custodíre, adunáre et régere dignéris toto orbe terrárum: una cum fámulo tuo Papa nostro N., et ' +
                            'Antístite nostro N., et ómnibus orthodóxis, atque cathólicae, et apostólicae fidei cultóribus. </p></br>' +
                            '<p>Meménto, Dómine, famulórum, famularúmque tuáram .et . et ómnium circumstántium, quórum tibi fides cógnita est, et nota devótio, pro quibus tibi offérimus: hoc sacrifícium ' +
                            'láudis, pro se, suísque ómnibus: pro redemptióne animárum suárum, pro spe salútis, et incolumitátis suae: tibíque reddunt vota sua aetérno Deo, vivo et vero.</p></br>' +
                            '<p>Communicántes, et memóriam venerántes, in primís gloriósae semper Virginis Mariae, Genetrícis Dei et Dómini nostri Iesu Christi: sed et beáti Ióseph, eiúsdem Virginis Sponsi, et beatórum ' +
                            'Apostolórum ac Mártyrum tuórum Petri et Pauli, Andréae, Iacóbi, Ioánnis, Thomae, Iacóbi, Philippi, Bartholomaéi, Matthaéi, Simónis et Thaddaéi: Lini, Cleti, Cleméntis, Xysti, Cornélii, Cypriány, ' +
                            'Lauréntii, Chrysógoni, Iioánnis et Pauli, Cosmae et Damiáni: et ómnium Sanctórum tuórum, quórum méritis, precibúsque concédas, ut in ómnibus protectiónis tuae muniámur auxílio. ' +
                            'Per eúmdem Chritum Dóminum nostrum. Amen</p></br>'
                    },
                    {
                        id: 15,
                        titulo: "Nanc Igitur"
                    }
                ]
            },
            {
                id: 2,
                nome: "Santa Missa de Paulo VI",
                descricao: "Atual/Novo Rito"
            }
        );
    }

    getMissas() {
        return new Observable((observer) => {
            observer.next(this.missas);
        })
    }

    getMissasById(id) {
        return new Observable((observer) => {
            observer.next(this.missas.filter((element) => {
                return element.idTerco == id;
            }));
        });
    }
}

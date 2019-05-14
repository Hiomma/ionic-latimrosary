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

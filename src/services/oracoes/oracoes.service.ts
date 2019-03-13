import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';

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

    private oracoesCollection: AngularFirestoreCollection<Oracao>;

    private oracoes: Observable<Oracao[]>;

    constructor(db: AngularFirestore) {
        this.oracoesCollection = db.collection<Oracao>('oracoes');

        this.oracoes = this.oracoesCollection.snapshotChanges().pipe(
            map(actions => {
                return actions.map(a => {
                    const data = a.payload.doc.data();
                    const id = a.payload.doc.id;
                    return { id, ...data };
                });
            })
        );
    }

    getOracoes() {
        this.oracoes = this.oracoesCollection.snapshotChanges().pipe(
            map(actions => {
                return actions.map(a => {
                    const data = a.payload.doc.data();
                    const id = a.payload.doc.id;
                    return { id, ...data };
                });
            })
        );

        return this.oracoes;
    }

    getOracao(id) {
        return this.oracoesCollection.doc<Oracao>(id).valueChanges();
    }

    updateOracao(oracao: Oracao, id: string) {
        return this.oracoesCollection.doc(id).update(oracao);
    }

    addOracao(oracao: Oracao) {
        return this.oracoesCollection.add(oracao);
    }

    removeOracao(id) {
        return this.oracoesCollection.doc(id).delete();
    }
}

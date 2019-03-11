import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

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

    private tercosCollection: AngularFirestoreCollection<Terco>;

    private tercos: Observable<Terco[]>;

    constructor(db: AngularFirestore) {
        this.tercosCollection = db.collection<Terco>('tercos');

        this.tercos = this.tercosCollection.snapshotChanges().pipe(
            map(actions => {
                return actions.map(a => {
                    const data = a.payload.doc.data();
                    const id = a.payload.doc.id;
                    return { id, ...data };
                });
            })
        );
    }

    getTercos() {
        return this.tercos;
    }

    getTerco(id) {
        return this.tercosCollection.doc<Terco>(id).valueChanges();
    }

    updateTerco(terco: Terco, id: string) {
        return this.tercosCollection.doc(id).update(terco);
    }

    addTerco(terco: Terco) {
        return this.tercosCollection.add(terco);
    }

    removeTerco(id) {
        return this.tercosCollection.doc(id).delete();
    }
}

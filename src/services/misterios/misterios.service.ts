import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


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

    private misteriosCollection: AngularFirestoreCollection<Misterio>;

    private misterios: Observable<Misterio[]>;

    constructor(private db: AngularFirestore) {
        this.misteriosCollection = db.collection<Misterio>('misterios');

        this.misterios = this.misteriosCollection.snapshotChanges().pipe(
            map(actions => {
                return actions.map(a => {
                    const data = a.payload.doc.data();
                    const id = a.payload.doc.id;
                    return { id, ...data };
                });
            })
        );
    }

    getMisterios() {
        return this.misterios;
    }

    getMisterio(id) {
        return this.misteriosCollection.doc<Misterio>(id).valueChanges();
    }

    getMisteriosById(id){
        let misterios = this.db.collection<Misterio>('misterios', ref => {
            return ref.where('idTerco', '==', id);
        });

        return misterios.valueChanges();
    }

    updateMisterio(misterio: Misterio, id: string) {
        return this.misteriosCollection.doc(id).update(misterio);
    }

    addMisterio(misterio: Misterio) {
        return this.misteriosCollection.add(misterio);
    }

    removeMisterio(id) {
        return this.misteriosCollection.doc(id).delete();
    }
}

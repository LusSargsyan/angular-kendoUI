import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {AngularFireDatabase} from '@angular/fire/database';

@Injectable({
    providedIn: "root"
})

export class BookService {

    constructor(public db: AngularFireDatabase) {}

    get(): Observable<any> {
        return this.db.list('books').valueChanges();
    }

    save(data: any, isNew?: boolean) {
        if (isNew) {
            let newPostKey = this.db.database.ref().child('books').push().key;
            data.key = newPostKey;
            this.db.database.ref('books/' + newPostKey).set(data);
        } else {
            this.db.database.ref('books/' + data.key).set(data);
        }
    }

    remove(key: any) {
        this.db.database.ref('books/' + key).remove();
    }

}

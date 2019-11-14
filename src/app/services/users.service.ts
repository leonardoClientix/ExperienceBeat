import { Injectable } from '@angular/core';
import { AngularFirestore , AngularFirestoreCollection} from '@angular/fire/firestore';
import { UserModule } from '../models/user.module';
import { QuestionsModule } from '../models/questions.module';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private itemsCollection: AngularFirestoreCollection<QuestionsModule>;
  constructor(
     private afs: AngularFirestore
  ) { }

  addUsers(data){
    for (let i = 1; i < data.length; i++) {
      const param = JSON.parse(JSON.stringify(data[i]));
      this.afs.collection("users").add( param );
    }
  }

  getUser( email ){
    this.itemsCollection = this.afs.collection<QuestionsModule>("users", ref => ref.where('email', '==', email));
    return this.itemsCollection.valueChanges();
  }
}

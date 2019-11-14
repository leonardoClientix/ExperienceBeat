import { Injectable } from '@angular/core';
import { AngularFirestore , AngularFirestoreCollection} from '@angular/fire/firestore';
import { QuestionsModule } from '../models/questions.module';
@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  private itemsCollection: AngularFirestoreCollection<QuestionsModule>;
  constructor(
     private afs: AngularFirestore
  ) { }

  addQuestion(data){
    for (let i = 1; i < data.length; i++) {
      const param = JSON.parse(JSON.stringify(data[i]));
      this.afs.collection("questions").add( param );
    }
  }

  getQuestions(){
    this.itemsCollection = this.afs.collection<QuestionsModule>("questions", ref => ref.orderBy('id','asc'));
    return this.itemsCollection.valueChanges();
  }

  getMessage(){
    this.itemsCollection = this.afs.collection<QuestionsModule>("message", ref => ref);
    return this.itemsCollection.valueChanges();
  }

  addMessage( data ){
    this.afs.collection("message").add( data );
  }

}

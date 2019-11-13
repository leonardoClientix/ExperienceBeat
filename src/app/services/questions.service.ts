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
      console.log(param);
      this.afs.collection("questions").add( param );
    }
  }

  addMessage( data ){

    console.log(data);
    this.afs.collection("message").add( data );

  }

  getQuestions(){
    this.itemsCollection = this.afs.collection<QuestionsModule>("questions", ref => ref.orderBy('id','asc'));
    return this.itemsCollection.valueChanges();
  }

}

import { Injectable } from '@angular/core';
import { AngularFirestore , AngularFirestoreCollection} from '@angular/fire/firestore';
import { CsvModule } from '../models/csv.module';
@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  private itemsCollection: AngularFirestoreCollection<CsvModule>;
  constructor(
     private afs: AngularFirestore
  ) { }

  addQuestion(data){
    console.log(data[0]);
    for (let i = 1; i < data.length; i++) {
      console.log(data[i]);
      const param = JSON.parse(JSON.stringify(data[i]));
      this.afs.collection("questions").add( param );
    }
  }

  getQuestions(){
    this.itemsCollection = this.afs.collection<CsvModule>("questions", ref => ref.orderBy('id','asc'));
    return this.itemsCollection.valueChanges();
  }

}

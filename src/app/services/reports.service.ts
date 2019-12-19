import { Injectable } from '@angular/core';
import { AngularFirestore , AngularFirestoreCollection} from '@angular/fire/firestore';
import { ResponseModule } from '../models/response.module';
import * as firebase from 'firebase';
import { QuestionsModule } from '../models/questions.module';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {

  collection:any = "response";

  private itemsCollection: AngularFirestoreCollection<any>;

  constructor(
    private afs: AngularFirestore
  ) { }

  getData(){
  return this.afs.collection<ResponseModule>(this.collection).get();
  }
  getReports(){
    let start = new Date('2019-12-09');
    let end = new Date('2019-12-17');
    this.itemsCollection = this.afs.collection<ResponseModule>(this.collection, ref => ref);
    return this.itemsCollection.valueChanges();
  }

}

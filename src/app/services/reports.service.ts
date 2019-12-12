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
    this.itemsCollection = this.afs.collection<ResponseModule>(this.collection, ref => ref.limit(100));
    return this.itemsCollection.valueChanges();
  }

}

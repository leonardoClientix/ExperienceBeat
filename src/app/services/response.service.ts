import { Injectable } from '@angular/core';
import { AngularFirestore , AngularFirestoreCollection} from '@angular/fire/firestore';
import { ResponseModule } from '../models/response.module';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class ResponseService {

  collection:any = "response";

  private itemsCollection: AngularFirestoreCollection<any>;

  constructor(
    private afs: AngularFirestore
  ) { }

  getResponse(idQuestion,idDocumentFire){
    return this.afs.collection(this.collection).doc(idDocumentFire).valueChanges();
  }
  addResponse(data){
    console.log(data);
    return this.afs.collection(this.collection).add( JSON.parse(JSON.stringify(data)) );
  }


  updateResponsew(idDocumentFire,data,type,idQuestion){

    if(type  == "add") {
       return this.afs.collection(this.collection).doc(idDocumentFire).set( JSON.parse(JSON.stringify(data)) );
    } else {

      let dataUpdate = [];
      dataUpdate[idQuestion] = data.question[idQuestion];

        console.log(dataUpdate);

      return this.afs.collection(this.collection).doc(idDocumentFire).update({
        question: dataUpdate[idQuestion]
      });

      //return this.afs.collection(this.collection , ref => ref.where('id', '==', idQuestion)).doc(idDocumentFire).update( JSON.parse(JSON.stringify(data)) );
    }

  }
}

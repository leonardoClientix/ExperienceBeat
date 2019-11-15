import { Injectable } from '@angular/core';
import { AngularFirestore , AngularFirestoreCollection} from '@angular/fire/firestore';
import { ResponseModule } from '../models/response.module';

@Injectable({
  providedIn: 'root'
})
export class ResponseService {

  collection:any = "response";

  private itemsCollection: AngularFirestoreCollection<any>;

  constructor(
    private afs: AngularFirestore
  ) { }

  getResponse(idResponse,idDocumentFire){
    return this.afs.collection(this.collection).doc(idDocumentFire).get();

  }
  addResponse(data){
    console.log(data);
    return this.afs.collection(this.collection).add( JSON.parse(JSON.stringify(data)) );
  }

  updateResponsew(idDocumentFire,data){
   return this.afs.collection(this.collection).doc(idDocumentFire).set( JSON.parse(JSON.stringify(data)) );
  }
}

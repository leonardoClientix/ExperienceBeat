import { Injectable } from '@angular/core';
import { AngularFirestore , AngularFirestoreCollection} from '@angular/fire/firestore';
import { ResponseModule } from '../models/response.module';

@Injectable({
  providedIn: 'root'
})
export class ResponseService {

  constructor(
    private afs: AngularFirestore
  ) { }

  addResponse(data){
    console.log(data);
    this.afs.collection("response").add( JSON.parse(JSON.stringify(data)) );
    /*for (let i = 1; i < data.length; i++) {
      const param = JSON.parse(JSON.stringify(data[i]));
      this.afs.collection("response").add( param );
    }*/
  }
}

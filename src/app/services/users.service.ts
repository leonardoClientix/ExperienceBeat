import { Injectable } from '@angular/core';
import { AngularFirestore , AngularFirestoreCollection} from '@angular/fire/firestore';
import { UserModule } from '../models/user.module';
import { QuestionsModule } from '../models/questions.module';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private itemsCollection: AngularFirestoreCollection<QuestionsModule>;
  constructor(
     private afs: AngularFirestore
  ) { }

  addUsers(data){
    for (let i = 0; i < data.length; i++) {
      const param = JSON.parse(JSON.stringify(data[i])); 
      this.afs.collection("users_prueba").add( param ).then((data)=>{
        console.log(data);
      });
    }
  }

  getUser( email ){
    this.itemsCollection = this.afs.collection<QuestionsModule>("users", ref => ref.where('email', '==', email));
    return this.itemsCollection.valueChanges();
  }

  getUserInput( input, value ){
    this.itemsCollection = this.afs.collection<QuestionsModule>("users_prueba", ref => ref.where(input, '==', value));
    return this.itemsCollection.valueChanges();
  }

  getUserQuiz( ){
    
    const data_user = new Observable((observer) => {

      let user = [];
 
      this.afs.collection<QuestionsModule>("users_prueba").valueChanges().subscribe((data:any)=>{
        
        for (let index = 0; index < data.length; index++) {

          let conf = data[index];

          for (let d = 0; d < conf.configQuiz.length; d++) {
            
            if(conf.configQuiz[d].idQuiz == localStorage.getItem('id_quiz')){
              user.push(conf);
            }

          }
        }

        observer.next(user);
      });

   });


   return data_user;

  }

  getFilterUserInput( inputs , name ){

    const data_user = new Observable((observer) => {

      let user = [];
 
      this.afs.collection<QuestionsModule>("users_prueba").valueChanges().subscribe((data:any)=>{
        
        for (let index = 0; index < data.length; index++) {

          let conf = data[index];
              
          for (let d = 0; d < conf.configQuiz.length; d++) {
            
            if(conf.configQuiz[d].idQuiz == localStorage.getItem('id_quiz')){

              if(inputs.indexOf(conf[name]) != -1){
                user.push(conf[name]);
              }
              
            }

          }

        }

        observer.next(user);
      });

   });


   return data_user;

  }

  removeDuplicates(originalArray, prop) {
    let newArray = [];
    let lookupObject  = {};

    for(var i in originalArray) {
       lookupObject[originalArray[i][prop]] = originalArray[i];
    }

    for(i in lookupObject) {
        newArray.push(lookupObject[i]);
    }
     return newArray;
  }

  updateFiltersQuestion(idQuestion,value,input){

      this.afs.collection<QuestionsModule>("users_prueba", ref => ref.where(input, '==', value.pop() ) ).valueChanges({idField: 'idDocument'}).subscribe(( data:any ) => {
        
        for (let index = 0; index < data.length; index++) {
            let liCinfig = data[index].configQuiz.filter( us => us.idQuiz == localStorage.getItem('id_quiz'));
        
          for (let a = 0; a < liCinfig.length; a++) {
           
            if(liCinfig[a].hasOwnProperty('filters') && liCinfig[a].filters.hasOwnProperty('idQuiestions')){
              //liCinfig[a].filters.idQuiestions.push(idQuestion);
            } else {
              liCinfig[a].filters = { idQuiestions: [idQuestion]}
            }
    
          }
          console.log(data[index]);  
          this.afs.collection("users_prueba").doc(data[index].idDocument).update( data[index] ).then((dat)=>{
            return dat;
          });    

        }
    

      });

    //return this.afs.collection("users_prueba", ref => ref.where('configQuiz','array-contains', { idQuiz: localStorage.getItem('id_quiz') })).doc(idDocumentFire).update(JSON.parse(JSON.stringify(data)));
  }

  searchInput(input,value){
      this.itemsCollection = this.afs.collection<QuestionsModule>("users_prueba", ref => ref.where(input, '==', value));
      return this.itemsCollection.valueChanges();
  }

}

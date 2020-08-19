import { Component, OnInit, ViewChild , Renderer2} from '@angular/core';
import { QuestionsModule } from 'src/app/models/questions.module';
import { QuestionsService } from 'src/app/services/questions.service';
import { UserModule } from 'src/app/models/user.module';
import { UsersService } from 'src/app/services/users.service';
import { ResponseService } from 'src/app/services/response.service';
import { ResponseModule } from 'src/app/models/response.module';
import { QuizService } from '../../services/quiz.service';


@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent  implements OnInit {

  stateBox:number;
  dataCheck:number;
  questions:any;
  options:any;
  showQuestions:boolean = false;
  showInput:boolean = false;
  showMessage: boolean = true;
  message: any;
  inputs:any;
  showValUser:boolean = false;
  listResponse: ResponseModule = new ResponseModule();
  svQuestion:any = [];

  idDocumentFire:any;
  trueQuestion:any;
  idTrueQuestion:any;
  actBox: any;
  sentTrue:boolean = false;
  errorValid:boolean = false;
  contValcheck:any = [];
  contRepeat:any = [];
  preNumber:any = 1;
  headTop:any = 1;
  arrayAcum:any = [];
  ad:any = [];
  listIdQues = [];


  public records: any[] = [];
  @ViewChild('camp', { static: false })  camp:any;
  //@ViewChild('dcheck', { static: false })  dcheck:any;


  constructor(
    public _questions:QuestionsService,
    public _quiz:QuizService,
    public _users:UsersService,
    public _response:ResponseService,
    private renderer: Renderer2
  ) {

    this._questions.getMessage().subscribe( ( res:any )=>{
      this.message = res[0].message;
      this.inputs = res[0].data;
    });

    this._questions.getQuestions().subscribe( ( data:any )=>{
      this.questions = data;
    });

  }

  ngOnInit() {

  }

  send(forma){
 
    this.listIdQues = [];
    
    let respOpti = this.listResponse.question;

    for (let i = 0; i < this.questions.length; i++) {

      if(this.questions[i].typeDesign == "textbox"){

        if(this.questions[i].mandatory == "true"){
          this.listIdQues.push(this.questions[i].id);
        }

      } else {

        let listOp = this.questions[i].questions.option;
        for (let d = 0; d < listOp.length; d++) {
          if(listOp[d].mandatory == "true"){
            let daup = listOp[d].id.split(".");

            if(daup[0]){
              this.listIdQues.push(Number(daup[0]));
            } else {
              this.listIdQues.push(listOp[d].id);
            }
                 
          }
        }

      }

    }

    // Cargar respuestas

    let dat;

    if( typeof respOpti !== 'undefined'){
      for (let r = 0; r < respOpti.length; r++) {
      
        try {
          let respSplit = respOpti[r].id.split(".");
          
          dat = this.listIdQues.indexOf(Number(respSplit[0]));
         
        } catch (error) {
          dat = this.listIdQues.indexOf(respOpti[r].id);
        }
        
        if(dat != -1){
          this.listIdQues.splice(dat,1);
        }
      }
    } else {
      this.errorValid = true;
    }
    
    if(this.listIdQues.length != 0){
      this.errorValid = true;
    } else {
      this.errorValid = false;
      this.sentTrue = true;
    }

  }

  validRequired(item){
     if(this.listIdQues.indexOf(item.id) != -1){
      return true;
     }
  }


  saveQuiz( dataQuestion, options , question , idOp, typeQuestion, label?,idtem? ){

      let idQuestion = dataQuestion.id;
      let dataStruct:any;
      let calueOption:any = options.value;

      let datLabel:any;
      this.actBox = idtem+"-"+idOp+"-"+idQuestion;

      if(typeQuestion == "check-mensaje" || typeQuestion == "table-multiple"){

        let idQr = (idQuestion + "").split(".");
        let idLabel:any = parseFloat(idQr[1])-1;
            idLabel = (idQr[0])+'.'+idLabel;

        for (let i = 0; i < label.length; i++) {

            if(label[i].id == idLabel){
              
                if(label[i].typeDesign == 'label'){
                  datLabel = label[i].options;
                }
              
            }
        }

      }
      
      if(typeQuestion == "table" || typeQuestion == "check" || typeQuestion == "check-mensaje" || typeQuestion == "table-multiple"){

            if( typeQuestion == "check-mensaje" || typeQuestion == "table-multiple" ){
              dataStruct = dataQuestion;
            } else {
              dataStruct = dataQuestion.questions;
            }

            if(typeQuestion == "table-multiple"){
              calueOption = options;
            }

           // AGREGAR O QUITAR SELECCION

           let valAction = dataStruct.valcheck.indexOf("databx"+idtem+'-'+idOp+'-'+idQuestion);
            
           if(valAction  != -1){
              
               // ELIMINAR LA SELECCION A LA QUE LE HAGO CLICK              
               dataStruct.valcheck.splice(valAction,1);
               this.listResponse.question = this.pushQuestions(idQuestion,question,calueOption, new Date(),typeQuestion,datLabel,valAction);
              
           } else {
               // VALIDAR CANTIDAD DE OPCIONES POR PREGUNTA
               if(dataStruct.repeat > dataStruct.valcheck.length){
                 
                 // AGREGA LA OPCION
                 dataStruct.valcheck.push("databx"+idtem+'-'+idOp+'-'+idQuestion);
                 
                 this.listResponse.question = this.pushQuestions(idQuestion,question,calueOption, new Date(),typeQuestion,datLabel);
               } else{
                 // SI SE PASA DE LA CANTIDAD DE OPCIONES PERMITIDAS , ELIMINA LA ULTIMA OPCION Y AGREGA LA NUEVA
                 dataStruct.valcheck.splice(dataStruct.valcheck.length-1,1);
                  
                 dataStruct.valcheck.push("databx"+idtem+'-'+idOp+'-'+idQuestion);
                 this.listResponse.question = this.pushQuestions(idQuestion,question,calueOption, new Date(),typeQuestion,datLabel,dataStruct.valcheck.length-1);

               }
           }

           ////////////////////////////

      }  else {
        this.listResponse.question = this.pushQuestions(idQuestion,question,calueOption, new Date(),typeQuestion,datLabel);
      }

      if(typeQuestion == "text"){
        this._response.updateResponsew(this.idDocumentFire,this.listResponse,'add','');
      } else {
        this._response.updateResponsew(this.idDocumentFire,this.listResponse,'add','');
     }

     //this.indexOfElement( dataQuestion,"databx"+idtem+'-'+idOp+'-'+idQuestion,typeQuestion );

  }

  pushQuestions(idQuestion,message,options,date,typeQuestion,label,idSplice?){

      let pass = true;
      let saveQuestion:any = {};

      if(typeQuestion == "table-multiple" || typeQuestion == "table" || typeQuestion == "check" || typeQuestion == "check-mensaje" || typeQuestion == "text" ){
       
        for (let i = 0; i < this.svQuestion.length; i++) {
          
            if(this.svQuestion[i].id == idQuestion){
              
              if( typeof idSplice !== 'undefined'){
                
                if(typeQuestion == "check-mensaje" || typeQuestion == "table-multiple" ){

                  if(this.svQuestion[i].option.options.indexOf(options) != -1){
                    this.svQuestion[i].option.options.splice(idSplice,1);
                  } else {
                    this.svQuestion[i].option.options.splice(idSplice,1);
                    this.svQuestion[i].option.options.push(options);
                  }   
                  
                } else {

                  if(this.svQuestion[i].option.indexOf(options) != -1){
                    this.svQuestion[i].option.splice(idSplice,1);
                  } else {
                    this.svQuestion[i].option.splice(idSplice,1);
                    this.svQuestion[i].option.push(options);
                  }   

                  // this.svQuestion[i].option.splice(idSplice,1);
                  // this.svQuestion[i].option.push(options);
                }
                
              } else {

                if(typeQuestion == "check-mensaje" || typeQuestion == "table-multiple" ){
                  this.svQuestion[i].option.options.push(options);
                } else if(typeQuestion == "text"){
                  this.svQuestion[i].text = options;
                }else {
                  this.svQuestion[i].option.push(options);
                }
                
              }

              pass = false;

            }
          
        }

      }

      if(pass == true){  

        if(typeQuestion == "check-mensaje" || typeQuestion == "table-multiple"){

          saveQuestion.id = idQuestion;
          saveQuestion.message = message;
          saveQuestion.option = { label: label , options: [ options ] };
          saveQuestion.date = date;

        } else if(typeQuestion == "table" || typeQuestion == "check") {
        
          saveQuestion.option = [ options ];
          saveQuestion.id = idQuestion;
          saveQuestion.message = message;
          saveQuestion.date = date;

        } else if(typeQuestion == "text") {
          
          saveQuestion.id = idQuestion;
          saveQuestion.message = message;
          saveQuestion.text = options;
          saveQuestion.date = date;

        } else {

          saveQuestion.id = idQuestion;
          saveQuestion.message = message;
          saveQuestion.options = options;
          saveQuestion.date = date;

        }

        this.svQuestion.push(saveQuestion);

      }
      console.log(this.svQuestion);
      return this.svQuestion;

  }

  openQuiz(){
    let email = this.camp.nativeElement.value;
    this._users.getUser(email).subscribe( ( data:any )=>{
      if( data.length > 0) {
        data = data[0];
        localStorage.setItem("name", data.name);
        localStorage.setItem("email", data.email);
        localStorage.setItem("macro_process", data.macro_process);
        localStorage.setItem("rol", data.rol);
        localStorage.setItem("id", data.id);

        this.listResponse.name = localStorage.getItem("name");
        this.listResponse.email = localStorage.getItem("email");
        this.listResponse.rol = localStorage.getItem("rol");
        this.listResponse.macro_process = localStorage.getItem("macro_process");
        this.listResponse.state = 0;

        this._response.addResponse(this.listResponse).then( (data:any) =>{
          this.idDocumentFire = data.id;
        });

        this.showQuestions = true;
        this.showInput = false;
        this.showValUser = false;

      } else {
        this.showValUser = true;
      }
    });

  }

  indexOfElement( data,element,typeQuestion ){
    data.topB = 0;

    if( typeQuestion != "table-multiple" ){
      
        return data.questions.valcheck.indexOf(element);

      } else {

        return data.valcheck.indexOf(element);

    }

  }

  conditional( data ){

    if(data != ""){
      let typeCondition = data.split('|');
      let optionsCondition = typeCondition[1].split('|');
          optionsCondition = optionsCondition[0].split(',');
        
      let validCondition;
      switch(typeCondition[0]) {
         case 'rol': {
            validCondition = optionsCondition.indexOf(localStorage.getItem('rol'));
            break;
         }
      }
      if(validCondition != -1){

        validCondition = 0;

      }
 
      return validCondition;

    } else {
      return -1;
    }

  }

  openInputs(){
    this.showInput = true;
    this.showMessage = false;
  }

  getHeaderArray(csvRecordsArr: any) {
    let headers = (<string>csvRecordsArr[0]).split(';');
    let headerArray = [];

    for (let j = 0; j < headers.length; j++) {
      headerArray.push(headers[j]);
    }

    return headerArray;
  }

  isValidCSVFile(file: any) {
    return file.name.endsWith(".csv");
  }

  validateQuestion(item,data){

    if(item == 'check-mensaje' || item == 'tabla-multiple' ){
        for (let i = 0; i < data.length; i++) {
          if( this.conditional(data[i].conditional) == 0){
            return 0;
          } 
        }
    } else {
        return 0;
    }

  }

}

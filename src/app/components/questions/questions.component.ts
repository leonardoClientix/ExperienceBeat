import { Component, OnInit, ViewChild , Renderer2} from '@angular/core';
import { QuestionsModule } from 'src/app/models/questions.module';
import { QuestionsService } from 'src/app/services/questions.service';
import { UserModule } from 'src/app/models/user.module';
import { UsersService } from 'src/app/services/users.service';
import { ResponseService } from 'src/app/services/response.service';
import { ResponseModule } from 'src/app/models/response.module';

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
  contValcheck:any = [];
  contRepeat:any = [];


  public records: any[] = [];
  @ViewChild('csvReaderQuestions', { static: false })  csvReaderQuestions:any;
  @ViewChild('csvReaderUsers', { static: false })  csvReaderUsers:any;
  @ViewChild('camp', { static: false })  camp:any;
  //@ViewChild('dcheck', { static: false })  dcheck:any;


  constructor(
    public _questions:QuestionsService,
    public _users:UsersService,
    public _response:ResponseService,
    private renderer: Renderer2
  ) {

    this._questions.getMessage().subscribe( ( res:any )=>{
      this.message = res[0].message;
      this.inputs = res[0].data;
    });

    this._questions.getQuestions().subscribe( ( data:any )=>{
      //console.log(data);
      this.questions = data;
    });

  }

  ngOnInit() {

  }

  send(){
      this.sentTrue = true;
      this.showQuestions = false;
  }


  saveQuiz( dataQuestion, options , question , idOp, typeQuestion, label?,idtem? ){

    console.log(dataQuestion);

      let idQuestion = dataQuestion.id;


      if( typeQuestion == "table-multiple" ){

        let valAction = dataQuestion.valcheck.indexOf("databx"+idtem+'-'+idOp+'-'+idQuestion);

        if(valAction  != -1){
          //  dataQuestion.valcheck.splice(valAction,1);
        } else {
            if(dataQuestion.repeat > dataQuestion.valcheck.length){
              dataQuestion.valcheck.push("databx"+idtem+'-'+idOp+'-'+idQuestion);
            //  console.log(dataQuestion);
            }
        }

      } else {

        let valAction = dataQuestion.questions.valcheck.indexOf("databx"+idtem+'-'+idOp+'-'+idQuestion);

        if(valAction  != -1){
            dataQuestion.questions.valcheck.splice(valAction,1);
        } else {
            if(dataQuestion.questions.repeat > dataQuestion.questions.valcheck.length){
              dataQuestion.questions.valcheck.push("databx"+idtem+'-'+idOp+'-'+idQuestion);
              //console.log(dataQuestion);
            }
        }

      }



      let datLabel:any;
      this.actBox = idtem+"-"+idOp+"-"+idQuestion;

      if(typeQuestion == "check-mensaje" || typeQuestion == "table-multiple"){

        let idQr = (idQuestion + "").split(".");
        let idLabel:any = parseFloat(idQr[1])-1;
            idLabel = (idQr[0])+'.'+idLabel;

        for (let i = 0; i < label.length; i++) {

            if(label[i].id == idLabel){
              if(typeQuestion == "table-multiple"){
                if(label[i].typeDesign == 'label'){
                  datLabel = label[i].options[0];
                }
              } else {
                datLabel = label[i].options[0];
              }
            }
        }

      }

      this._response.getResponse( idQuestion , this.idDocumentFire ).subscribe( ( data:any )=>{
        let liRes = data.question;
        for (let i = 0; i < liRes.length; i++) {
            if(liRes[i].id == idQuestion) {
              this.trueQuestion = liRes[i].id;
              this.idTrueQuestion = i;
            }
        }
      });

      if(typeQuestion == "table-multiple"){
        this.listResponse.question = this.pushQuestions(idQuestion,question,options, new Date(),typeQuestion,datLabel);
      } else {
        this.listResponse.question = this.pushQuestions(idQuestion,question,options.value, new Date(),typeQuestion,datLabel);
      }

      if(typeQuestion == "text"){
        this._response.updateResponsew(this.idDocumentFire,this.listResponse,'add','');
      } else {

        if(this.trueQuestion == idQuestion) {
          console.log('update');
          this._response.updateResponsew(this.idDocumentFire,this.listResponse,'update',this.idTrueQuestion);
        } else {
          console.log('add');
          this._response.updateResponsew(this.idDocumentFire,this.listResponse,'add','');
        }

     }

  }

  pushQuestions(idQuestion,message,options,date,typeQuestion,label){

    for (let i = 0; i < this.svQuestion.length; i++) {
        if(this.svQuestion[i].id == idQuestion){
          this.svQuestion.splice(i,1);
        }
    }

    let saveQuestion:any = {};

    if(typeQuestion == "text") {
      saveQuestion.id = idQuestion;
      saveQuestion.message = message;
      saveQuestion.text = options;
      saveQuestion.date = date;
    }

    if(typeQuestion == "check-mensaje" || typeQuestion == "table-multiple"){
      saveQuestion.id = idQuestion;
      saveQuestion.message = message;
      saveQuestion.option = { label: label , options: options};
      saveQuestion.date = date;
    } else {
      saveQuestion.id = idQuestion;
      saveQuestion.message = message;
      saveQuestion.options = options;
      saveQuestion.date = date;
    }

    this.svQuestion.push(saveQuestion);
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
  //  console.log(element);
  //  console.log(data);
    let resp ;
   if( typeQuestion == "tabla-multiple" ){
      resp = -1;
        if( data.questions.valcheck.indexOf(element) != -1 ){
          resp = 0;
        }
    } else {
      resp = -1;
        if( data.questions.valcheck.indexOf(element) != -1 ){
          resp = 0;
        }
    }
    return resp;
  }

  conditional( data ){

    if(data != ""){
      let typeCondition = data.split('|');
      let optionsCondition = typeCondition[1].split('|');
          optionsCondition = optionsCondition[0].split(',');
        //  console.log(optionsCondition);
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
    //  console.log(validCondition);
      return validCondition;
    } else {
      return -1;
    }

  }

  openInputs(){
    this.showInput = true;
    this.showMessage = false;
  }

  uploadListener($event: any, type): void {

    let text = [];
    let files = $event.srcElement.files;
    if (this.isValidCSVFile(files[0])) {

      let input = $event.target;
      let reader = new FileReader();
      reader.readAsText(input.files[0], 'ISO-8859-1');

      reader.onload = () => {
        let csvData = reader.result;
        let csvRecordsArray = (<string>csvData).split(/\r\n|\n/);
        let headersRow = this.getHeaderArray(csvRecordsArray);

        if( type == "questions") {
          this.records = this.getDataQuestions(csvRecordsArray, headersRow.length);
          this._questions.addQuestion(this.records);
        }

        if( type == "users") {
          this.records = this.getDataUsers(csvRecordsArray, headersRow.length);
          this._users.addUsers(this.records);
        }

      };

      reader.onerror = function () {
        console.log('Ocurrio un error al leer el archivo!');
      };

    } else {
      alert("El archivo no es CSV");
      this.fileReset();
    }
  }

  getDataUsers(csvRecordsArray: any, headerLength: any){

    let csvDataUser = [];
    for (let i = 1; i < csvRecordsArray.length; i++) {
      let curruntRecord = (<string>csvRecordsArray[i]).split(';');
      let csvUsers: UserModule = new UserModule();

      if (curruntRecord.length == headerLength) {

          csvUsers.id = Number(curruntRecord[0]);
          csvUsers.name = curruntRecord[1];
          csvUsers.email = curruntRecord[2];
          csvUsers.rol = curruntRecord[3];
          csvUsers.macro_process = curruntRecord[4];
          csvDataUser.push(csvUsers);

      }
    }
    return csvDataUser;

  }

  getDataQuestions(csvRecordsArray: any, headerLength: any) {

    let csvArr = [];
    let cvInit = [];
    let dataOption = [];
    let csvMessage:any = {};
    let itemInput:any = [];
    let listItems: any = [];
    let inputs = [];
    let list:any = [];

    let dataMessage = csvRecordsArray[1].split(';');
    let dataInput = csvRecordsArray[2].split(';');
    dataInput = dataInput[1].split('|');

    for( let w = 0; w < dataInput.length; w++) {
      itemInput = dataInput[w].split(',');
      inputs.push(itemInput);
    }

    for( let t = 0; t < inputs.length; t++) {
        list.push({ name: inputs[t][0], type: inputs[t][1], placeholder: inputs[t][2] });
    }

    csvMessage.message = dataMessage[1];
    csvMessage.data =  list;
    // agregar mensaje de bienvenida
    this._questions.addMessage(csvMessage);

    for (let i = 1; i < csvRecordsArray.length; i++) {
      let curruntRecord = (<string>csvRecordsArray[i]).split(';');
      //console.log(curruntRecord[0]);

      if (curruntRecord.length == headerLength) {
        let csvRecord: QuestionsModule = new QuestionsModule();
        csvRecord.id = parseFloat(curruntRecord[0]);

        let listOption =  curruntRecord[0].split('.');
        // lista de preguntas
        if(listOption.length == 1){
          // lista de opciones de cada pregunta
          let valueOption = this.getOptions(curruntRecord[0], csvRecordsArray, headerLength );
          //console.log(valueOption);
          csvRecord.questions = { message: curruntRecord[1], option: valueOption, repeat: curruntRecord[4], valcheck: [] };
          csvRecord.mandatory = curruntRecord[2];
          csvRecord.typeDesign = curruntRecord[3];
          csvRecord.assets = curruntRecord[5];
          csvRecord.conditional = curruntRecord[6];
          csvRecord.variable = curruntRecord[7];
          csvRecord.multiple = curruntRecord[8];
          csvRecord.text = curruntRecord[9];
          csvRecord.rack = curruntRecord[10];
          csvRecord.order = curruntRecord[11];
          csvRecord.comparator = curruntRecord[12];
          csvRecord.check = curruntRecord[13];
          csvRecord.matriz = curruntRecord[14];
          csvRecord.miltiCheck = curruntRecord[15];
          csvRecord.alerts = curruntRecord[16];
          csvArr.push(csvRecord);

        }

      }
    }

    return csvArr;
  }

  getOptions( idQuestion, csvRecordsArray: any, headerLength: any ){

    let csvOption = [];

    for (let i = 1; i < csvRecordsArray.length; i++) {

      let curruntRecord = (<string>csvRecordsArray[i]).split(';');

      if (curruntRecord.length == headerLength) {

        let csvRecord:QuestionsModule = new QuestionsModule();
        let listOption =  curruntRecord[0].split('.');

        if(listOption.length == 2 && idQuestion == listOption[0]){

          //csvRecord.id = Number(curruntRecord[0]);
          csvRecord.id = curruntRecord[0];
          if(curruntRecord[3] == "value"){
            csvRecord.options = curruntRecord[1].split(',');
          } else {
            csvRecord.options = curruntRecord[1];
          }
          csvRecord.mandatory = curruntRecord[2];
          csvRecord.valcheck = [];
          csvRecord.repeat = curruntRecord[4];
          csvRecord.typeDesign = curruntRecord[3];
          csvRecord.assets = curruntRecord[5];
          csvRecord.conditional = curruntRecord[6];
          csvRecord.variable = curruntRecord[7];
          csvRecord.multiple = curruntRecord[8];
          csvRecord.text = curruntRecord[9];
          csvRecord.rack = curruntRecord[10];
          csvRecord.order = curruntRecord[11];
          csvRecord.comparator = curruntRecord[12];
          csvRecord.check = curruntRecord[13];
          csvRecord.matriz = curruntRecord[14];
          csvRecord.miltiCheck = curruntRecord[15];
          csvRecord.alerts = curruntRecord[16];
          csvOption.push(csvRecord);

        }
      }

    }

    return csvOption;
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

  fileReset() {
     this.csvReaderQuestions.nativeElement.value = "";
     this.csvReaderUsers.nativeElement.value = "";
     this.records = [];
  }

  validateQuestion(item,data){
    //console.log(data);

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

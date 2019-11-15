import { Component, OnInit, ViewChild } from '@angular/core';
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
export class QuestionsComponent implements OnInit {

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

  public records: any[] = [];
  @ViewChild('csvReaderQuestions', { static: false })  csvReaderQuestions:any;
  @ViewChild('csvReaderUsers', { static: false })  csvReaderUsers:any;
  @ViewChild('camp', { static: false })  camp:any;


  constructor(
    public _questions:QuestionsService,
    public _users:UsersService,
    public _response:ResponseService
  ) {

    this._questions.getMessage().subscribe( ( res:any )=>{
      this.message = res[0].message;
      this.inputs = res[0].data;
    });

    this._questions.getQuestions().subscribe( ( data:any )=>{
      console.log(data);
      this.questions = data;
    });

  }

  ngOnInit() {

  }

  saveQuiz( idQuestion, options , question ){

    let as = this._response.getResponse( idQuestion , this.idDocumentFire );

    this.listResponse.question = this.pushQuestions(idQuestion,question,options.value, new Date());
    this._response.updateResponsew(this.idDocumentFire,this.listResponse);
    console.log(this.svQuestion);
  }

  pushQuestions(idQuestion,message,options,date){

    let saveQuestion:any = {};
    saveQuestion.id = idQuestion;
    saveQuestion.message = message;
    saveQuestion.options = options;
    saveQuestion.date = date;
    this.svQuestion.push(saveQuestion);
    return this.svQuestion;

  }

  openQuiz(){
    let email = this.camp.nativeElement.value;
    console.log(email);
    this._users.getUser(email).subscribe( ( data:any )=>{
      console.log(data.length);
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
          console.log(data);
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

      if (curruntRecord.length == headerLength) {
        let csvRecord: QuestionsModule = new QuestionsModule();
        csvRecord.id = Number(curruntRecord[0]);

        let listOption =  curruntRecord[0].split('.');
        // lista de preguntas
        if(listOption.length == 1){
          // lista de opciones de cada pregunta
          let valueOption = this.getOptions(curruntRecord[0], csvRecordsArray, headerLength );
          csvRecord.questions = { message: curruntRecord[1], option: valueOption };
          csvRecord.mandatory = curruntRecord[2];
          csvRecord.typeDesign = curruntRecord[3];
          csvRecord.assets = curruntRecord[4];
          csvRecord.conditional = curruntRecord[5];
          csvRecord.variable = curruntRecord[6];
          csvRecord.multiple = curruntRecord[7];
          csvRecord.text = curruntRecord[8];
          csvRecord.rack = curruntRecord[9];
          csvRecord.order = curruntRecord[10];
          csvRecord.comparator = curruntRecord[11];
          csvRecord.check = curruntRecord[12];
          csvRecord.matriz = curruntRecord[13];
          csvRecord.miltiCheck = curruntRecord[14];
          csvRecord.alerts = curruntRecord[15];
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
          //csvRecord = curruntRecord[1].split(',');
          csvRecord.id = Number(curruntRecord[0]);
          csvRecord.options = curruntRecord[1].split(',');
          csvRecord.mandatory = curruntRecord[2];
          csvRecord.typeDesign = curruntRecord[3];
          csvRecord.assets = curruntRecord[4];
          csvRecord.conditional = curruntRecord[5];
          csvRecord.variable = curruntRecord[6];
          csvRecord.multiple = curruntRecord[7];
          csvRecord.text = curruntRecord[8];
          csvRecord.rack = curruntRecord[9];
          csvRecord.order = curruntRecord[10];
          csvRecord.comparator = curruntRecord[11];
          csvRecord.check = curruntRecord[12];
          csvRecord.matriz = curruntRecord[13];
          csvRecord.miltiCheck = curruntRecord[14];
          csvRecord.alerts = curruntRecord[15];
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

}

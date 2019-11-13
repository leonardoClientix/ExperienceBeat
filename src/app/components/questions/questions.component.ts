import { Component, OnInit, ViewChild } from '@angular/core';
import { QuestionsModule } from 'src/app/models/questions.module';
import { QuestionsService } from 'src/app/services/questions.service';
import { UserModule } from 'src/app/models/user.module';
import { UsersService } from 'src/app/services/users.service';

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

  public records: any[] = [];
  @ViewChild('csvReaderQuestions', { static: false })  csvReaderQuestions:any;
  @ViewChild('csvReaderUsers', { static: false })  csvReaderUsers:any;

  constructor(
    public _questions:QuestionsService,
    public _users:UsersService
  ) {

    this._questions.getQuestions().subscribe( (data:any)=>{
      console.log(data);
      this.questions = data;
    });

  }

  ngOnInit() {

  }

  stateCheck( id, question:HTMLElement, data ){
    this.stateBox = id;
    this.dataCheck = id;
    question.scrollIntoView({behavior: 'smooth'} );
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

    let csvUsers: UserModule = new UserModule();
    let csvDataUser = [];

    for (let i = 1; i < csvRecordsArray.length; i++) {
      let curruntRecord = (<string>csvRecordsArray[i]).split(';');

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

    let dataMessage = csvRecordsArray[1].split(';');
    let dataInput = csvRecordsArray[2].split(';');

    csvMessage.message = dataMessage[1];
    csvMessage.data = dataInput[1].split(',');
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

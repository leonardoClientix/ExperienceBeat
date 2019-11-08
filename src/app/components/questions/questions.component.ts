import { Component, OnInit, ViewChild } from '@angular/core';
import { CsvModule } from 'src/app/models/csv.module';
import { QuestionsService } from 'src/app/services/questions.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  stateBox:number;
  dataCheck:number;
  questions:any;

  public records: any[] = [];
  @ViewChild('csvReader', { static: false })  csvReader:any;

  constructor(
    public _questions:QuestionsService
  ) {

    this._questions.getQuestions().subscribe( (data)=>{
      console.log(data);
      this.questions = data;
    });
  }

  ngOnInit() {

  }

  stateCheck( id, question:HTMLElement, data ){
  //  console.log( data.value );
    this.stateBox = id;
    this.dataCheck = id;
    question.scrollIntoView({behavior: 'smooth'} );
  }

  uploadListener($event: any): void {

    let text = [];
    let files = $event.srcElement.files;

    if (this.isValidCSVFile(files[0])) {

      let input = $event.target;
      let reader = new FileReader();
      reader.readAsText(input.files[0]);

      reader.onload = () => {
        let csvData = reader.result;
        let csvRecordsArray = (<string>csvData).split(/\r\n|\n/);

        let headersRow = this.getHeaderArray(csvRecordsArray);

      //  console.log(csvRecordsArray);

        this.records = this.getDataRecordsArrayFromCSVFile(csvRecordsArray, headersRow.length);

        this._questions.addQuestion(this.records);

        console.log(this.records);
      };

      reader.onerror = function () {
        console.log('Ocurrio un error al leer el archivo!');
      };

    } else {
      alert("El archivo no es CSV");
      this.fileReset();
    }
  }

  getDataRecordsArrayFromCSVFile(csvRecordsArray: any, headerLength: any) {
    let csvArr = [];

    for (let i = 1; i < csvRecordsArray.length; i++) {
      let curruntRecord = (<string>csvRecordsArray[i]).split(';');
      if (curruntRecord.length == headerLength) {
        let csvRecord: CsvModule = new CsvModule();
        csvRecord.id = curruntRecord[0];
        let listOption =  curruntRecord[0].split('.');

        console.log(listOption);
      //  if(!listOption[1]){
        csvRecord.questions = { message: curruntRecord[1] , option: this.getOptions(listOption[0], csvRecordsArray, headerLength )};
        //  csvRecord.questions = { option: this.getOptions(listOption[0], csvRecordsArray, headerLength )};
        //} else {

        // }

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

    // console.log(csvArr);
    return csvArr;
  }

  getOptions( idQuestion, csvRecordsArray: any, headerLength: any ){

    console.log(idQuestion);

    let csvOption = [];

    for (let i = 1; i < csvRecordsArray.length; i++) {
      let curruntRecord = (<string>csvRecordsArray[i]).split(';');
      if (curruntRecord.length == headerLength) {

        let csvRecord:any;

        let listOption =  curruntRecord[0].split('.');

        console.log(listOption);
        if(idQuestion == listOption[0]){
          csvRecord = curruntRecord[1].split(',');
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
     this.csvReader.nativeElement.value = "";
     this.records = [];
  }



}

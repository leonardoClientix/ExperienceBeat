import { Component, OnInit } from '@angular/core';
import { ReportsService } from 'src/app/services/reports.service';
import { QuestionsService } from 'src/app/services/questions.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  countResponse:any;
  doughnutChartLabels: string[];
  doughnutChartData: number[];
  doughnutChartType: string;
  loading = false;
  dataReport:any;
  dataQuestions:any;


  constructor(
    public _report: ReportsService,
    public _question: QuestionsService
  ) {
    this.countResponse = this._report.getData().subscribe( data => {
      let dataLoad = [];
      this.countResponse = data.size;
      dataLoad =  [655,this.countResponse]; //153
      this.doughnutChartLabels = ['Numero de Encuestas', 'Respondidas'];
      this.doughnutChartData = dataLoad;
      this.doughnutChartType = 'doughnut';
        this.loading = true;
    });

    this._report.getReports().subscribe( data => {
    // console.log(data);
      this.dataReport = data;
    });

    this._question.getQuestions().subscribe( data => {
      this.dataQuestions = data;
    });

   }

  ngOnInit(){

  }

  numQuestion(cont){
    let arrayAcum:any = [];
    for (let i = 0; i < cont.length; i++) {
      let itemSpli = cont[i].id;
          try {
            itemSpli = itemSpli.split(".");
            arrayAcum.push(Number(itemSpli[0]));
          } catch {
            arrayAcum.push(cont[i].id);
          }
    }
    arrayAcum = arrayAcum.filter((valor, indiceActual, arreglo) => arreglo.indexOf(valor) === indiceActual);
    return arrayAcum;
  }



    // events
    public chartClicked(e: any): void {
    //  console.log(e);
    }

    public chartHovered(e: any): void {
    //  console.log(e);
    }

}

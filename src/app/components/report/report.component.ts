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
  /*  this.countResponse = this._report.getData().subscribe( data => {
      let dataLoad = [];
      this.countResponse = data.size;
      dataLoad =  [655,this.countResponse]; //153
      this.doughnutChartLabels = ['Numero de Encuestas', 'Respondidas'];
      this.doughnutChartData = dataLoad;
      this.doughnutChartType = 'doughnut';
        this.loading = true;
    });*/

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
  response(option,idQuestion,response){
    console.log(option);
    console.log(idQuestion);

    if(response !== undefined){
      for (let i = 0; i < response.length; i++) {
          console.log(response[i]);
      }
    }

  }

  dataQuestion(questions , id){
    console.log(questions);
    console.log(id);
    //return questions;
  }

  numQuestion(nums){
    nums = ""+nums+"";
    nums = nums.split(".");
    return nums[0]+"|";
  }

    // events
    public chartClicked(e: any): void {
    //  console.log(e);
    }

    public chartHovered(e: any): void {
    //  console.log(e);
    }

}

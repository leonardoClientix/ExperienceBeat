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
  dataEnd = new Date('12-');


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

   exportTableToExcel(tableID, filename = ''){
    let downloadLink;
    let dataType = 'application/vnd.ms-excel';
    let tableSelect = document.getElementById(tableID);
    let tableHTML = tableSelect.outerHTML.replace(/ /g, '%20');

    // Specify file name
    filename = filename?filename+'.xls':'excel_data.xls';

    // Create download link element
    downloadLink = document.createElement("a");

    document.body.appendChild(downloadLink);

    if(navigator.msSaveOrOpenBlob){
        let blob = new Blob(['ufeff', tableHTML], {
            type: dataType
        });
        navigator.msSaveOrOpenBlob( blob, filename);
    }else{
        // Create a link to the file
        downloadLink.href = 'data:' + dataType + ', ' + tableHTML;

        // Setting the file name
        downloadLink.download = filename;

        //triggering the function
        downloadLink.click();
    }

  }

  dataItem(question){

    let dataQuestion = ['Análisis de negocios ','Planeación Estratégica','Modelo E (Medición, Análisis y mejora, normalización)','Investigación de mercados','Diseño y desarrollo de producto','Infraestructura','Bases de datos','Sistemas de Información','soluciones tecnológicas','Desarrollo','Mesa de ayuda (Soporte de servicios tecnológicos)','Planeación de TI (Proyectos)','Seguridad física','Seguridad de la información','Riesgos','Jurídico','Experiencia de cliente','CMI','Mercadeo','Ventas','Aseguramiento del Canal','Canal retail','Canal Corporativo','Operaciones','Tesorería administrativa','Tesorería operativa','Contabilidad','Compras','Recursos físicos','Planeación financiera','Control financiero (Presupuestos)','Cartera','Impuestos','Costos y multiprecio','Selección','Administración del Talento Humano','Formación y Desarrollo','Calidad de Vida','Seguridad y salud laboral','Gestión Ambiental','Comunicación Interna','Regional Norte','Regional Caribe','Regional Oriente','Regional Occidente','Regional Antioquia','Regional Sur','Regional Centro','Regional Bogotá','Regional Eje'];

    let res;
    let item = {};
    let qsArray = {};
        qsArray = question;

        if(dataQuestion.indexOf(question) != -1){
              res = question;
        } else {

            for (let i = 0; i < dataQuestion.length; i++) {
              item = dataQuestion[i];

              if(question == item[0]){
                res = dataQuestion[i];
              }

            }

        }

        return res;

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

  dateEnd(dateBD , end){

    console.log(dateBD);
    let start = new Date(dateBD);
    let endDate = new Date(end);

    console.log(start);
    console.log(start.getDate());
    console.log(start.getHours());
    if(start.getHours() == 10){
      return true;
    } else {
      return false;
    }
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

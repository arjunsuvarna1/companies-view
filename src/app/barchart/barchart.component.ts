import { Component, OnInit } from '@angular/core';
import { BackendserviceService } from '../backendservice.service';
@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.css']
  
})
export class BarchartComponent  implements OnInit{
  constructor(private backendserviceService: BackendserviceService) {
      
  };
  graphData;
  countArray:any[]=[];
  ngOnInit() {
    
     this.getGraphData();
    
  
  };
  getGraphData(){
    this.backendserviceService.graphData().subscribe(data=>{
      this.graphData = data;
      
      this.mbarChartLabels.forEach(element => {
        this.countArray.push(this.graphData[element])

      });
      console.log(this.countArray);
      this.barChartData.pop();
      this.barChartData.push({data: this.countArray, label: 'Countries'})
    })
   
  
    
    
  }
  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };

    public mbarChartLabels:string[] =  ["India", "United kingdom", "Germany", "United states", "China", "New zealand", "South africa", "Netherlands", "Norway", "Malaysia", "Switzerland", "Denmark", "United arab emirates", "Australia", "Malawi", "Spain", "Canada", "Russia", "Thailand", "Poland", "Israel", "Sweden", "Ireland", "Indonesia", "Belgium", "Greece", "Mexico", "Turkey", "Italy", "Finland", "Hong kong", "France", "Taiwan", "Estonia", "Maldives", "Japan", "Hungary", "Czechia", "Brazil", "Slovakia", "Kuwait", "Ghana", "Portugal", "Seychelles", "Colombia", "Egypt", "Slovenia", "Vietnam", "Peru", "Chile", "Bermuda", "Romania", "Ecuador", "Austria", "Lithuania", "Ukraine", "Argentina", "Singapore", "Pakistan"]
    public barChartType:string = 'bar';
    public barChartLegend:boolean = true;
  
    public barChartColors:Array<any> = [
    {
      backgroundColor: 'rgba(105,159,177,0.2)',
      borderColor: 'rgba(105,159,177,1)',
      pointBackgroundColor: 'rgba(105,159,177,1)',
      pointBorderColor: '#fafafa',
      pointHoverBackgroundColor: '#fafafa',
      pointHoverBorderColor: 'rgba(105,159,177)'
    },
    { 
      backgroundColor: 'rgba(77,20,96,0.3)',
      borderColor: 'rgba(77,20,96,1)',
      pointBackgroundColor: 'rgba(77,20,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,20,96,1)'
    }
  ];
    public barChartData:any[] = [
      //{data: [55, 60, 75, 82, 56, 62, 80], label: 'Company A'}
      
    ];
  
    // events
    public chartClicked(e:any):void {
      console.log(e);
    }
  
    public chartHovered(e:any):void {
      
    }
  
    public randomize():void {
      let data = [
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        (Math.random() * 100),
        Math.round(Math.random() * 100),
        (Math.random() * 100),
        Math.round(Math.random() * 100)];
      let clone = JSON.parse(JSON.stringify(this.barChartData));
      clone[0].data = data;
      this.barChartData = clone;
    }

   
}

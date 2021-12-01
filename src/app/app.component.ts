import { Component, OnInit, Input } from '@angular/core';

import { BackendserviceService } from './backendservice.service';
import * as CanvasJS from '../canvasjs.min';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  implements OnInit{
  
  constructor(private backendserviceService: BackendserviceService) {
    this.config = {
      itemsPerPage: 5,
      currentPage: 1,
      totalItems: 579
    };
  };

ngOnInit(): void {

  this.fetch();
  this.fetchNames();
  this.fetchCountries();


};


fetch(){
  this.backendserviceService.getCompanies().subscribe(data=>{
    console.log(data)
    this.companies = data;
  })
}
fetchNames()
{
  this.backendserviceService.getCompanyNames().subscribe(data=>{
    console.log(data)
    this.companyNames = data;
  })
} 
fetchCountries()
{
  this.backendserviceService.getCountryNames().subscribe(data=>{
    console.log(data)
    this.countries = data;
  })
} 
update(country)
{
  this.backendserviceService.updateList(country).subscribe(data=>{
    console.log(data)
    this.companies = data;
  })
} 
 title = 'Companies Search';
  searchText='';
  companies;
  companyNames;
  countries;
  countrySelected="all";
  modalData= {
    id: 1,
    name: "Sunrise instruments pvt. ltd.",
    website: "https://www.sunriseinstrument.com",
    address: "pune, maharashtra, india",
    country: "India",
    currentemployee: 4,
    description: "Sunrise Systems & Instruments - Exporter of vehicle monitoring system, vehicle tracking system, gps vehicle monitoring system, gps vehicle tracking system, fleet vehicle monitoring system, fleet vehicle tracking system, commercial vehicle monitoring system, commercial vehicle tracking system, India",
    domain: "sunriseinstrument.com",
    foundedyear: 2008,
    industry: "Electrical/electronic manufacturing",
    logourl: "https://tdw.imimg.com/template-tdw/zero.gif",
    totalemployee: 15
};
  config: any;
  pageChanged(event){
    this.config.currentPage = event;
  }
   mdlSampleIsOpen : boolean = false;
 openModal(open : boolean, $event: any) : void {
    this.mdlSampleIsOpen = open;
    this.modalData = $event;
    console.log(this.modalData)
}
btnOKClick(){
  this.mdlSampleIsOpen = false;
}

updateList(event){
  console.log("dropdown"+ this.countrySelected);
  this.update(this.countrySelected);
  this.config.totalItems = this.companies.size;
}


}

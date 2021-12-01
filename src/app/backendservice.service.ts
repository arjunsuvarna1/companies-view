import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class BackendserviceService {

private readonly URL = 'http://localhost:8085/api/companies/';
private readonly URL2 = 'http://localhost:8085/api/companies/names/';
private readonly URL3 = 'http://localhost:8085/api/countries/';
 URL4 ;
 private readonly URL5 = 'http://localhost:8085/api/companies/country/graphData';
constructor(private http: HttpClient) { }


getCompanies() {
  console.log('Request is sent!');
  console.log(this.URL5);
  return this.http.get(this.URL);
}

graphData(){
  console.log('Request is sent!');

  return this.http.get(this.URL5);
}

getCompanyNames() {
  console.log('Request is sent!');

  return this.http.get(this.URL2);
}
getCountryNames() {
  console.log('Request is sent!');

  return this.http.get(this.URL3);
}
updateList(country) {
  console.log('Request is sent!');
  this.URL4 ='http://localhost:8085/api/companies/countrySearch/' + country;
  console.log(this.URL4);
  return this.http.get(this.URL4);
}

}

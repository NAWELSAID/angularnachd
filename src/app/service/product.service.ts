import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http : HttpClient) { }

  server = 'http://localhost:8000/api/'
  lien= "http://localhost/tempadmin/storage/app/public/";

getData(){
  return this.http.get('https://work.alwaysdata.net/public/api/index')
}
getDataStories(){
  return this.http.get(this.server+'datastory')
}
getDataLaststories(){
  return this.http.get(this.server+'datalaststory')
}
getDataLast4stories(){
  return this.http.get(this.server+'datalast4story')
}
getDataLast8stories(){
  return this.http.get(this.server+'datalast8story')
}
getDataAlllaststories(){
  return this.http.get(this.server+'dataalllaststory')
}
getDataCategoristory(){
  return this.http.get(this.server+'dataCategoristory')
}
getDataposts(){
  return this.http.get(this.server+'datapost')
}
getDataLastposts(){
  return this.http.get(this.server+'datalastpost')
}
getDataCategoriposts(){
  return this.http.get(this.server+'dataCategoripost')
}
getDataService(){
  return this.http.get(this.server+'dataservice')
}
getDataprojects(){
  return this.http.get(this.server+'dataproject')
}
getDataLastprojects(){
  return this.http.get(this.server+'datalastproject')
}
getDataCategoriprojects(){
  return this.http.get(this.server+'dataCategoriproject')
}
getDataprofile(){
  return this.http.get(this.server+'dataprofile')
}
getDatanachdums(){
  return this.http.get(this.server+'datanachdums')
}
getDatamembre(){
  return this.http.get(this.server+'datamembre')
}
getDatafeedback(){
  return this.http.get(this.server+'datafeedback')
}
}


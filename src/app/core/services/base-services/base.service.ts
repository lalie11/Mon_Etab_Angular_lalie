import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environmentDev} from '../../../../environments/environment.dev';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  private baseUrl: string = environmentDev.baseUrl;

  constructor(private httpClient: HttpClient) { }

  getOne(endpoint: string, id: string): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/${endpoint}/${id}`);
  }

  getOneBySlug(endpoint: string, slug: string): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/${endpoint}/${slug}`);
  }

  getAll(endpoint: string, id?: any) {
    return id !== null
      ? this.httpClient.get(`${this.baseUrl}/${endpoint}/${id}`)
      : this.httpClient.get(`${this.baseUrl}/${endpoint}`);
  }

  create(endPoint: string, data: any): Observable<any>{
    return  this.httpClient.get('${this.baseUrl}/${endPoint}, data');
}
createById(endPoint: string, data: any, item: any): Observable<any>{
  return this.httpClient.get('${this.baseUrl}/${endPoint}/${item}, data');
}

  /*create(endpoint: string, data: any, id?: null) {
    return id !== null
      ? this.httpClient.post(`${this.baseUrl}/${endpoint}/${id}`, data)
      : this.httpClient.post(`${this.baseUrl}/${endpoint}`, data);
  }*/

  updateData(endpoint: string, data: any, id: string) {
    return this.httpClient.put(`${this.baseUrl}/${endpoint}/${id}`, data);
  }

  deleteData(endpoint: string, id: string) {
    return this.httpClient.delete(`${this.baseUrl}/${endpoint}/${id}`);
  }

  connexion(endPoint: string,data: any): Observable<any>{
    return this.httpClient.post(`${this.baseUrl}/${endPoint}`, data)
  }
}

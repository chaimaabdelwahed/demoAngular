import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private baseUrl = 'http://localhost:8080/clients';
  constructor(private http: HttpClient) { }

  getClientList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}

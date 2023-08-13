import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  baseLink = "http://localhost:8000";
  loginCheck = new BehaviorSubject(0);
  dataFromBackend = new BehaviorSubject([]);
  constructor(public httpClient: HttpClient) { }
  loginUser(userObj: any): Observable<any> {
    return this.httpClient.post(this.baseLink + '/tourism-management-server/api/v1/user/login', userObj);
  }
  // tourism-management-processor/tourism/
  search(criteria, value): Observable<any> {
    let token = localStorage.getItem('token');
    let httpHeaders: HttpHeaders;
    if (token) {
      httpHeaders = new HttpHeaders({
        Authorization: token
      });
    } else {
      httpHeaders = new HttpHeaders({
        Authorization: ""
      });
    }

    console.log(this.baseLink + '/tourism-management-processor/tourism/' + criteria + "/" + value, { headers: httpHeaders });

    return this.httpClient.get(this.baseLink + '/tourism-management-processor/tourism/' + criteria + "/" + value, { headers: httpHeaders });
  }
  logout(): Observable<any> {
    return this.httpClient.get(this.baseLink + '/tourism-management-server/api/v1/user/logout');
  }
}

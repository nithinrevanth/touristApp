import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  baseLink = "http://localhost:8000";
  loginCheck = new BehaviorSubject(0);
  loginStatus: boolean = false;
  dataFromBackend = new BehaviorSubject([
    {
      "branchId": 1,
      "branchName": "Ravi",
      "website": "ravi.com",
      "contactNo": 20,
      "email": "ravi@manage.com",
      "places": [
        {
          "name": "THAILAND",
          "rate": 400
        },
        {
          "name": "SINGAPORE",
          "rate": 400
        },
        {
          "name": "ANDAMAN",
          "rate": 300
        },
        {
          "name": "DUBAI",
          "rate": 500
        },
        {
          "name": "MALASIYA",
          "rate": 501
        }
      ]
    },
    {
      "branchId": 2,
      "branchName": "nithin",
      "website": "nithin.com",
      "contactNo": 201515,
      "email": "nithin@manage.com",
      "places": [
        {
          "name": "THAILAND",
          "rate": 1000
        },
        {
          "name": "SINGAPORE",
          "rate": 1400
        },
        {
          "name": "ANDAMAN",
          "rate": 1300
        },
        {
          "name": "DUBAI",
          "rate": 1500
        },
        {
          "name": "MALASIYA",
          "rate": 1501
        }
      ]
    }
  ]);
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

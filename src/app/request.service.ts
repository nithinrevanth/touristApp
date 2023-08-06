import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  baseLink = "http://localhost:4200";
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
    return this.httpClient.post(this.baseLink + '/login', userObj);
  }
  logout(): Observable<any> {
    return this.httpClient.get(this.baseLink + '/logout');
  }
}

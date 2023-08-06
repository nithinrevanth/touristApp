import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  constructor(public requestService:RequestService) { }

  ngOnInit(): void {
  }
  search(){

  }
  optionChange(selectType,inputText){
    console.log(selectType.value);
    inputText.value = '';

  }

}
// {
//   "branchDetails": [
//       {
//           "branchId": null,
//           "branchName": "Ravi",
//           "website": "ravi.com",
//           "contactNo": 20,
//           "email": "ravi@manage.com",
//           "places": [
//               {
//                   "name": "THAILAND",
//                   "rate": 400
//               },
//               {
//                   "name": "SINGAPORE",
//                   "rate": 400
//               },
//               {
//                   "name": "ANDAMAN",
//                   "rate": 300
//               },
//               {
//                   "name": "DUBAI",
//                   "rate": 500
//               },
//               {
//                   "name": "MALASIYA",
//                   "rate": 501
//               }
//           ]
//       }
//   ],
//   "status": "SUCCESS",
//   "satusText": "Document retrieved successfully",
//   "messages": null
// }

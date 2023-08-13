import { Component } from '@angular/core';
import { RequestService } from './request.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'touristApp';
  name = 'name here';
  constructor(public requestService: RequestService) {

  }
  logout = () => {
    this.requestService.loginCheck.next(0);
    localStorage.setItem("token", "");
    // this.requestService.logout().subscribe({
    //   next:(res:any)=>{
    //     console.log(res);
    //   },
    //   error:(err)=>{
    //     console.log("error",err);
    //   }
    // })
  }
}

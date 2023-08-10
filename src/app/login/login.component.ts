import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { RequestService } from '../request.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userLogin: FormGroup;
  message: Boolean = false;
  constructor(public formBuilderObj: FormBuilder,public requestService:RequestService,public routerObj: Router) { }

  ngOnInit(): void {
    this.userLogin = this.formBuilderObj.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });

  }
  loginFormSubmit() {
    console.log(this.userLogin.value)
    //if user type is user - goto user service
    //console.log(this.userLogin.value.userType);
    this.requestService.loginUser(this.userLogin.value).subscribe({
      next: (res: any) => {
        console.log("res is ", res);
        //if its user,then login success,
        if (res.message == "invalid id and password") {
          this.message = true;
        }
        if (res.message == "jwt-token-message to validate") {
          console.log("login success");
          this.requestService.loginStatus = true;
          //local storage
          localStorage.setItem("token", res.token);
          this.routerObj.navigateByUrl(`tourism/api/v1/admin`);
        }
      },
      error: (err) => {
        console.log("error is ", err)
      }
    })
  }
  get username() {
    return this.userLogin.get("username")
  }
  get password() {
    return this.userLogin.get("password")
  }
}

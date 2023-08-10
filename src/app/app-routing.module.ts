import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NopageComponent } from './nopage/nopage.component';
import { LoginComponent } from './login/login.component';
import { DataComponent } from './data/data.component';

const routes: Routes = [
  { path: "tourism/api/v1/login", component: LoginComponent },
  { path: "tourism/api/v1/admin", component: DataComponent },
  // Empty path
  {path:"",redirectTo:"tourism/api/v1/login",pathMatch:"full"},
  // Invalidpath
  {path:"**",component:NopageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

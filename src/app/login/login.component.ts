import { Component, OnInit } from '@angular/core';
import { UserDataService } from './../user-data.service';
import {Router} from "@angular/router"


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userAuthData = {
    email:"",
    password:""
  }

  constructor(private signupService : UserDataService, private router: Router) { }

  ngOnInit( ): void {
    this.signupService.printUser();
  }
  authUser(): void{
    // console.log("button pressed");
    console.log(this.userAuthData);


    if(this.signupService.authenticateUser(this.userAuthData.email, this.userAuthData.password)){
      this.router.navigate(['/home'])
      console.log("User Authenticated");
    }
    else{

      console.log("Invalid Username/Password")
      alert("Invalid Username/Password")
    }
 
  }

}


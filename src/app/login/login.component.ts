import { Component, OnInit } from '@angular/core';
import { UserDataService } from './../user-data.service';
import {Router} from "@angular/router";
import {  
  CookieService  
} from 'ngx-cookie-service'; 


@Component
({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userAuthData = {
    email:"",
    password:""
  }

  
  constructor(private signupService : UserDataService, private router: Router, private cookieService: CookieService) { }


  ngOnInit( ): void {
    this.signupService.printUser();
    
  }
  authUser(): void{
    console.log(this.userAuthData);

    if(this.signupService.authenticateUser(this.userAuthData.email, this.userAuthData.password)){
      this.cookieService.set( 'email', this.userAuthData.email )
      this.cookieService.set( 'password', this.userAuthData.password )
      this.router.navigate(['/home'])
      console.log("User Authenticated")
    }
    else{

      console.log("Invalid Username/Password")
      alert("Invalid Username/Password")
    }
 
  }

}


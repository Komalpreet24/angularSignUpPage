import { Component, OnInit } from '@angular/core';
import { UserDataService } from './../user-data.service';
import {  
  CookieService  
} from 'ngx-cookie-service'; 
import {Router} from "@angular/router"

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private signupService : UserDataService, public cookieService: CookieService, private router: Router) { }

  ngOnInit(): void {
    this.getUsernamePassword();
    //route gaurd
    if(!this.cookieService.check('email'))
    {this.router.navigate(['/login'])}
  }

  getUsernamePassword() : void {
    console.log(this.cookieService.get('email'))
    console.log(this.cookieService.get('password'))
  }

  logout() : void {
    this.getUsernamePassword();
 
    this.cookieService.delete('email');
    this.cookieService.delete('password');

    console.log(this.cookieService.check('email'));
    console.log(this.cookieService.check('password'));

    this.router.navigate(['/login'])
  }

}

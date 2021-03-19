import { Component, OnInit } from '@angular/core';
import { UserModel } from './../user-model';
import { UserDataService } from './../user-data.service'
import {Router} from "@angular/router"
import {FormGroup, FormBuilder, FormControl, Validators} from "@angular/forms"

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  ngOnInit(): void {


  }

  constructor( private userDataService : UserDataService, private router: Router){

  }

   userModel = new UserModel('','',0,'','','',false)

    onSubmit() : void {
      this.userDataService.addUser(this.userModel);
      this.router.navigate(['/login'])
    }

}

import { Component, OnInit } from '@angular/core';
import { UserModel } from './../user-model';
import { UserDataService } from './../user-data.service'
import {Router} from "@angular/router"
import { FormBuilder, Validators } from '@angular/forms';
import { ConfirmedValidator } from './../confirmed.validator';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  ngOnInit(): void {


  }

  constructor( private userDataService : UserDataService, private router: Router, private fb: FormBuilder){

  }

  submitted:boolean = false;

   userModel = new UserModel('','','','','','',false)

    onSubmit() : void {
      this.submitted = true
      this.userDataService.addUser(this.signupForm.value)
      // console.log('submitted')
      this.router.navigate(['/login'])
    }

    goToLogin() {
      this.router.navigate(['/login'])
    }

    signupForm = this.fb.group({
      username:['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phnumber: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      password: ['', [Validators.required, Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$")]],
      cpassword: ['', [Validators.required,  Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$")]],
    }, { 
      validator: ConfirmedValidator('password', 'cpassword')
    })

}

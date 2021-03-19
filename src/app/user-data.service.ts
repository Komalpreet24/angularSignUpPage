import { Injectable } from '@angular/core';
import { UserModel } from './user-model';


@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  allUsers : Array<UserModel> = [];

  addUser( newUser : UserModel) : void {
    this.allUsers.push(newUser)
  }

  printUser() {
    console.log(this.allUsers);
  }

  authenticateUser(email:string, pasw:string):boolean{
    let flag:boolean = false;
    this.allUsers.find(user =>{
      if(user.email === email){
        if(user.password === pasw){
          flag=true;
          // console.log(flag)

        }
      }
    })
    return flag;
  }

}

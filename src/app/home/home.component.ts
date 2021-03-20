import { Component, OnInit } from '@angular/core';
import { UserDataService } from './../user-data.service';

@Component({
  // providers:[LoginComponent ],
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private signupService : UserDataService) { }

  ngOnInit(): void {

  }

}

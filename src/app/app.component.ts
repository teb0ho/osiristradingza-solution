import { Component, OnInit } from '@angular/core';
import { RandomUserService } from './shared/random-user.service';
import { RandomUser } from './shared/models/random-user';
import { Result } from './shared/models/result';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  userValue: RandomUser;
  profilePicture: string;
  nameSurname: string;
  firstElement: Result;

  constructor(private randomUserService: RandomUserService) {
    
  }

  ngOnInit() {
    this.randomUserService.getUser().subscribe(t => {
      this.userValue = t;
      this.firstElement = this.userValue.results[0];
      this.nameSurname = this.userValue.results[0].name.first + ' ' + this.userValue.results[0].name.last;
      this.profilePicture = this.userValue.results[0].picture.large;
    });
  }


}

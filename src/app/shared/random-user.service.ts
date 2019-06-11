import { Injectable } from '@angular/core';
import { RandomUser } from './models/random-user';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
 
@Injectable({
  providedIn: 'root'
})
export class RandomUserService {

  constructor(private httpClient: HttpClient) { }

  getUser(): Observable<RandomUser> {
    return this.httpClient.get<RandomUser>("https://randomuser.me/api/");
  }
}

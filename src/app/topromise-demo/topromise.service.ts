import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:8085';

export interface User {
  firstName: string;
  lastName: string;
}

@Injectable({
  providedIn: 'root'
})
export class TopromiseService {
  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(baseUrl + '/users');
  }

  addUser(newUser: User) {
    return this.http.post(baseUrl + '/users', newUser);
  }
}

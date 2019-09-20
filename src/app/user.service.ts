import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userUrl = "http://localhost/angular/heroes/?name=Magma";

  constructor(
    private http: HttpClient
  ) { }

  getUser(): Observable<User> {
    return this.http.get<User[]>(this.userUrl).pipe(
      map(user_list => user_list[0]),
      tap(user => console.log(`getUser() : user=${user}`))
    )
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userUrl = "http://localhost/angular/heroes";

  constructor(
    private http: HttpClient
  ) { }

  getUser(term: string): Observable<User[]> {
    let url: string = "";

    // 検索語がなければ全権検索
    if (!term.trim()) {
      url = this.userUrl
    }
    url = `${this.userUrl}/?name=${term}`

    return this.http.get<User[]>(url).pipe(
      map(user_list => user_list),
      tap(_ => console.log(`getUser() : term=${term}`))
    )
  }
}

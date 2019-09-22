import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { User } from './user';
import { Purchase } from './purchase';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userUrl = "http://localhost/angular/heroes";
  private parchaseUrl ="http://localhost/sample/purchases"

  constructor(
    private http: HttpClient
  ) { }

  /** ユーザ情報を取得する */
  getUser(term: string): Observable<User[]> {
    let url: string = "";

    // 検索語がなければ全件`検索
    if (!term.trim()) {
      url = this.userUrl
    }
    url = `${this.userUrl}/?name=${term}`

    return this.http.get<User[]>(url).pipe(
      map(user_list => user_list),
      tap(_ => console.log(`getUser() : term=${term}`))
    )
  }

  /** ユーザの購入履歴を取得する */
  getPurchase(id: string): Observable<Purchase[]> {
    let url: string = "";

    // id指定がなければ全件取得　
    if (!id) {
      url = this.parchaseUrl;
    }
    url = `${this.parchaseUrl}/${id}`

    return this.http.get<Purchase[]>(url).pipe(
      map(purchase_list => purchase_list),
      tap(_ => console.log(`getPurchase(): id=${id}`))
    )
  }
}

import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  user: User[];

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
  }

  getUser(term: string): void {
    this.userService.getUser(term).
    subscribe(user => this.user = user);
  }

  // UserServiceのSubjectにidを送る
  setId(id: number): void {
    this.userService.userSubject.next(id);
    console.log(`user.component: setId(): id=${id}`)
  }
}

import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Purchase } from '../purchase';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.scss']
})
export class PurchaseComponent implements OnInit {
  purchase: Purchase[];

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    // UserServiceのSubjectをsubscribeしてidを取得する
    this.userService.userObservable.subscribe(
      (id: number) => {
        this.getPurchases(`${id}`);
      }
    );
  }

  getPurchases(id: string): void {
    this.userService.getPurchase(id).
    subscribe(purchase => this.purchase = purchase)
  }
}

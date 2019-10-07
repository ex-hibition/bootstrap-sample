import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Billing } from '../billing';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.scss']
})
export class BillingComponent implements OnInit {
  billing: Billing[];

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    // UserServiceのsubjectをsubscribeしてidを取得する
    this.userService.userObservable.subscribe(
      (id: number) => {
        this.getBilling(`${id}`);
      }
    )
  }

  getBilling(id: string): void {
    this.userService.getBilling(id).
    subscribe(billing => this.billing = billing);
  }
}

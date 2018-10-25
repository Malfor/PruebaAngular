import { Component, OnInit, Input } from '@angular/core';

import { Customer } from '../customer';

import { enableProdMode } from '@angular/core';
enableProdMode();

@Component({
  selector: 'customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() customer: Customer;

}

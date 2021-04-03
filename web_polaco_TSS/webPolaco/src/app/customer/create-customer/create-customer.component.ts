import { Component, OnInit } from '@angular/core';
import { Customer } from '../Customer';
import { CustomersService } from '../services/customers.service';
@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {


  NAME_CUSTOMER: string = "";;
  ID_NUMBER: string = "";
  PHONE_NUMBER: string = "";
  E_MAIL: string = "";
  ADDRESS: string = "";
  DESCRIPTION: string = "";

  customer = new Customer();


  constructor(private customersService:CustomersService) { }

  ngOnInit(): void {
  }
  onClose() {
  }
  submit() {
    this.customer.NAME_CUSTOMER = this.NAME_CUSTOMER;
    this.customer.ID_NUMBER = this.ID_NUMBER;
    this.customer.PHONE_NUMBER = this.PHONE_NUMBER;
    this.customer.E_MAIL = this.E_MAIL;
    this.customer.ADDRESS = this.ADDRESS;
    this.customer.DESCRIPTION = this.DESCRIPTION;

    this.customersService.postCustomer(this.customer).subscribe((data => {
      console.log('success');
      this.customersService.filter('Register click');
      this.clearForm();
    }))
  }

  clearForm() {
    this.ADDRESS = "";
    this.DESCRIPTION = "";
    this.E_MAIL = "";
    this.ID_NUMBER = "";
    this.NAME_CUSTOMER = "";
    this.PHONE_NUMBER = "";
  }
}

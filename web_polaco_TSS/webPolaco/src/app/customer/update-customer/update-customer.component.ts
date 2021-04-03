import { Component, OnInit,Input, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Customer } from '../Customer';
import { CustomersService } from '../services/customers.service';
@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {

  customer = new Customer();


  NAME_CUSTOMER: string = "";;
  ID_NUMBER: string = "";
  PHONE_NUMBER: string = "";
  E_MAIL: string = "";
  ADDRESS: string = "";
  DESCRIPTION: string = "";


  constructor(private customerService:CustomersService,@Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit(): void {
    console.log()
    this.loadData();

  }
  loadData() {
    this.customerService.getOneCustomer(this.data._id).subscribe((data => {
      this.NAME_CUSTOMER = data[0].NAME_CUSTOMER;
      this.ID_NUMBER = data[0].ID_NUMBER;
      this.PHONE_NUMBER = data[0].PHONE_NUMBER;
      this.ADDRESS = data[0].ADDRESS;
      this.E_MAIL = data[0].E_MAIL;
      this.DESCRIPTION = data[0].DESCRIPTION;

    }));
  }



  submit() {
    this.customer.NAME_CUSTOMER = this.NAME_CUSTOMER;
    this.customer.ID_NUMBER = this.ID_NUMBER;
    this.customer.PHONE_NUMBER = this.PHONE_NUMBER;
    this.customer.ADDRESS = this.ADDRESS;
    this.customer.E_MAIL = this.E_MAIL;
    this.customer.DESCRIPTION = this.DESCRIPTION;
    this.customerService.updateCustomer(this.customer).subscribe((data => {
      console.log('success');
      this.customerService.filter('Register click');
      this.clearForm();
    }))
   }

  clearForm() {
      this.NAME_CUSTOMER = "";
      this.ID_NUMBER = "";
      this.PHONE_NUMBER ="";
      this.ADDRESS = "";
      this.E_MAIL = "";
      this.DESCRIPTION ="";
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomersService } from '../services/customers.service';
import { Customer } from '../models/Customer';
@Component({
  selector: 'app-show-customer',
  templateUrl: './show-customer.page.html',
  styleUrls: ['./show-customer.page.scss'],
})
export class ShowCustomerPage implements OnInit {
  public id;
  public name;
  public id_numb;
  public phone;
  public address;
  public email;
  public desc;
  private customer = new Customer();
  constructor(private route: ActivatedRoute,  private customerService: CustomersService) {
    
   }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getCustomer(this.id);
  }

  getCustomer(id:string) {
    this.customerService.geCustomer(id).subscribe(customerService => { 
      this.name = customerService[0].NAME_CUSTOMER;
      this.id_numb = customerService[0].ID_NUMBER;
      this.phone = customerService[0].PHONE_NUMBER;
      this.address = customerService[0].ADDRESS;
      this.email = customerService[0].E_MAIL;
      this.desc = customerService[0].DESCRIPTION;

    })
  }
  
  saveCustomer() {
    this.customer.NAME_CUSTOMER = (document.querySelector('#name') as HTMLTextAreaElement).value
    this.customer.ID_NUMBER = this.id_numb;//(document.querySelector('#id_numb') as HTMLTextAreaElement).value;
    this.customer.PHONE_NUMBER = (document.querySelector('#phone') as HTMLTextAreaElement).value;
    this.customer.E_MAIL = (document.querySelector('#email') as HTMLTextAreaElement).value;
    this.customer.ADDRESS = (document.querySelector('#address') as HTMLTextAreaElement).value;
    this.customer.DESCRIPTION = (document.querySelector('#desc') as HTMLTextAreaElement).value;
    
    this.customerService.updateCustomer(this.customer).subscribe(data => {
      console.log("success");
      (document.querySelector('#name') as HTMLTextAreaElement).value = "";
      //(document.querySelector('#id_numb') as HTMLTextAreaElement).value = "";
      (document.querySelector('#phone') as HTMLTextAreaElement).value = "";
      (document.querySelector('#email') as HTMLTextAreaElement).value = "";
      (document.querySelector('#desc') as HTMLTextAreaElement).value = "";
      (document.querySelector('#address') as HTMLTextAreaElement).value = "";
      this.ngOnInit();
    });
  }

}

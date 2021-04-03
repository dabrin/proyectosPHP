import { Component, OnInit } from '@angular/core';
import { Customer } from '../models/Customer';
import { CustomersService } from '../services/customers.service';
import { Router } from '@angular/router';
import { ModalController} from '@ionic/angular';
@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.page.html',
  styleUrls: ['./add-customer.page.scss'],
})
export class AddCustomerPage implements OnInit {
  customer = new Customer();
  constructor(private modalCtrl:ModalController, private customerService: CustomersService, private router:Router) { }

  ngOnInit() {
  }

  addCustomer() {
    this.customer.NAME_CUSTOMER = (document.querySelector('#name') as HTMLTextAreaElement).value;
    this.customer.ID_NUMBER = (document.querySelector('#id_number') as HTMLTextAreaElement).value;
    this.customer.PHONE_NUMBER = (document.querySelector('#phone_number') as HTMLTextAreaElement).value;
    this.customer.E_MAIL = (document.querySelector('#mail') as HTMLTextAreaElement).value;
    this.customer.ADDRESS = (document.querySelector('#address') as HTMLTextAreaElement).value;
    this.customer.DESCRIPTION = (document.querySelector('#description') as HTMLTextAreaElement).value;

    this.customerService.postCustomer(this.customer).subscribe(data => {
      console.log("success");
      (document.querySelector('#name') as HTMLTextAreaElement).value = "";
      (document.querySelector('#id_number') as HTMLTextAreaElement).value = "";
      (document.querySelector('#phone_number') as HTMLTextAreaElement).value = "";
      (document.querySelector('#mail') as HTMLTextAreaElement).value = "";
      (document.querySelector('#description') as HTMLTextAreaElement).value = "";
      (document.querySelector('#address') as HTMLTextAreaElement).value = "";
      this.ngOnInit();
    });
  }
  goCustomers() {
    this.router.navigate(['/tabs/customers'], {});
  }
  closeModal() {
    this.modalCtrl.dismiss();
  }

}

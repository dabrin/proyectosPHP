import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { LoansService } from '../services/loans.service';
import { LoanModel } from '../models/LoanModel';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-add-loan',
  templateUrl: './add-loan.page.html',
  styleUrls: ['./add-loan.page.scss'],
  providers:[DatePipe]
})
export class AddLoanPage implements OnInit {
  id_number: string = "";
  first_amount: string = "";
  description: string = "";
  date_start: string = "";
  date_close: string = "";

  fecha: Date = new Date();
  fecha_;

 myDate = new Date();
  public fecha_Ini: string;

  loan = new LoanModel();
  constructor(private alert: AlertController, private router: Router, private datePipe: DatePipe, private loanService: LoansService, private modalCtrl: ModalController) {
    this.date_start = this.datePipe.transform(this.myDate, 'yyyy-MM-dd HH:mm:ss')
   }

  ngOnInit() {
  }

  async addLoan() {
    console.log(this.fecha);
    this.loan.ID_NUMBER = this.id_number;
    this.loan.FIRST_AMOUNT = parseFloat(this.first_amount);
    this.loan.DESCRIPTION = this.description;
    this.loan.DATE_START = this.date_start;
    this.loan.DATE_CLOSE = this.fecha_;
    this.loan.PAYMENT = 0;
     this.loanService.postLoan(this.loan).subscribe((data => {
      this.ngOnInit();
       this.loanService.filter('Register click');
       this.clean();
       this.dismissModal();
    }))

  }

  clean() { 
    this.id_number = "";
    this.first_amount = "";
    this.description = "";
    this.date_start = "";
    this.fecha_ = "";
    
  }
  
  change(event) { 
    this.fecha_= event.detail.value;
  }

  dismissModal() {
    this.modalCtrl.dismiss();
   }
}

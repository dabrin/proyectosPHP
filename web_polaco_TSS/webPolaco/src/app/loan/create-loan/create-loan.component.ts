import { Component, OnInit } from '@angular/core';
import { Loan } from '../Loan';

import { FormsModule } from '@angular/forms';
import { LoansService } from '../services/loans.service';
@Component({
  selector: 'app-create-loan',
  templateUrl: './create-loan.component.html',
  styleUrls: ['./create-loan.component.css']
})
export class CreateLoanComponent implements OnInit {
  id_number: string = "";
  first_amount: string = "";
  description: string = "";
  date_start: string = "";
  date_close: string = "";
  loan = new Loan();
  constructor(private loanService:LoansService) { }

  ngOnInit(): void {
  }

  submit() {

    this.loan.ID_NUMBER = this.id_number;
    this.loan.FIRST_AMOUNT = parseFloat(this.first_amount);
    this.loan.DATE_START = this.date_start;
    this.loan.DATE_CLOSE = this.date_close;
    this.loan.DESCRIPTION = this.description;
    this.loanService.postLoan(this.loan).subscribe((data => {
      this.ngOnInit();
      this.loanService.filter('Register click');
      this.clearForm();
    }))

  }
  clearForm() {
    this.id_number = "";
    this.first_amount = "";
    this.description = "";
    this.date_close = "";
    this.date_start = "";
  }

}

import { Component, OnInit ,Inject} from '@angular/core';
import { LoansService } from '../services/loans.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-update-loan',
  templateUrl: './update-loan.component.html',
  styleUrls: ['./update-loan.component.css']
})
export class UpdateLoanComponent implements OnInit {

  amount_payment = "";
  constructor(private loanService: LoansService,@Inject(MAT_DIALOG_DATA) public data:any,private dialog:MatDialog) { }

  ngOnInit(): void {
  }
  addPayment() {
    console.log(this.data._id);

    this.loanService.payment(this.data._id, parseFloat(this.amount_payment)).subscribe(data => {
      this.loanService.filter("Register click");

    })
  }
}

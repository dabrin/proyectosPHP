import { Component, OnInit ,Inject} from '@angular/core';
import { SalesService } from '../services/sales.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-update-sale',
  templateUrl: './update-sale.component.html',
  styleUrls: ['./update-sale.component.css']
})
export class UpdateSaleComponent implements OnInit {
  amount_payment = "";
  constructor(private saleService:SalesService, @Inject(MAT_DIALOG_DATA) public data:any,private dialog:MatDialog) { }

  ngOnInit(): void {
  }

  addPayment() {
    this.saleService.payment(this.data._id, parseFloat(this.amount_payment)).subscribe(data => {
      console.log("succ");
      this.saleService.filter('Register click');
      this.ngOnInit();
      this.dialog.closeAll();
    });
  }




}

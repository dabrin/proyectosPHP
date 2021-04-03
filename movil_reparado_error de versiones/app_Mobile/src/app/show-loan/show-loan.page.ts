import { Component, OnInit,Input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { PrintService } from '../services/print.service';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-show-loan',
  templateUrl: './show-loan.page.html',
  styleUrls: ['./show-loan.page.scss'],
  providers: [DatePipe]
})
export class ShowLoanPage implements OnInit {
  @Input() id_customer: string;
  @Input() first_amount: string;
  @Input() payment: string;
  @Input() date_start: string;
  @Input() date_close: string;
  bluetoothList: any = [];
  selectedPrinter: any;

public fecha: string;
  myDate = new Date();
  constructor(private datePipe: DatePipe, private print: PrintService, private modalCtrl: ModalController) {
    this.fecha = this.datePipe.transform(this.myDate, 'yyyy-MM-dd')
   }

  ngOnInit() {
  }

  
  listPrinter() {
    this.print.searchBluetoothPrinter()
      .then(resp => {
        this.bluetoothList = resp;
      });
  }
  selectPrinter(macAddress){
    this.selectedPrinter=macAddress;
  }
  async printStuff() {
    var currentDate = new Date();

    
    var myText = "Fecha Actual: " + this.fecha + "\n\n\nCédula:" + this.id_customer + "\n\n\nPrestamo original: " + this.first_amount + " \n\n\nCancelado: " + this.payment + " \n\n\nFecha para terminar de cancelar:"+this.date_close+"\n\n\n";
    console.log(myText);
    
    this.print.sendToBluetoothPrinter(this.selectedPrinter, myText);
  }

  closeModal() {
    this.modalCtrl.dismiss();
  }

}

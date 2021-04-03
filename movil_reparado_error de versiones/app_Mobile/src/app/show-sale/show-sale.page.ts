import { Component, OnInit,Input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { PrintService } from '../services/print.service';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-show-sale',
  templateUrl: './show-sale.page.html',
  styleUrls: ['./show-sale.page.scss'],
  providers: [DatePipe]
})
export class ShowSalePage implements OnInit {

  @Input() id_customer: string;
  @Input() balance: string;
  @Input() payment: string;
  @Input() date: string;
  @Input() type: string;
  @Input() last_balance: string;
  @Input() last_payment: string;
  @Input() init_amount: string;
  @Input() name_customer: string;
  
  name_user = localStorage.getItem('user');

  bluetoothList: any = [];
  selectedPrinter: any;
  public fecha: string;
  myDate = new Date();
  type_string;
  constructor(private print: PrintService,private datePipe:DatePipe,private modalCtrl:ModalController) {
    this.fecha = this.datePipe.transform(this.myDate, 'yyyy-MM-dd')
   }

  ngOnInit() {
    if (this.type == '1') {
      this.type_string="Pago Semanal"
    } else if (this.type == '2') {
      this.type_string = "Pago Quincenal";
    } else if (this.type == '3') {
      this.type_string="Pago Mensual"
     }
    this.listPrinter();
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

    
    var myText = " Fecha Actual: " + this.fecha +
      "\n\n Facturador:" + this.name_user +
      "\n\n ==============================="+
      "\n\n Nombre cliente:" + this.name_customer +
      "\n\n Cedula: " + this.id_customer +
      "\n\n ==============================="+
      "\n\n Saldo Inicial: " + this.init_amount +
      "\n\n Saldo anterior: " + this.last_balance +
      "\n\n Saldo actual: " + this.balance +
      "\n\n Ultimo abono: " + this.last_payment +
      "\n\n -------------------------------"+
      " \n\n Total: " + this.payment +
      "\n\n ==============================="+
      " \n\n Fecha ultima actualizacion: \n  " + this.date +
      "\n\n\n";
    console.log(myText);
    
    this.print.sendToBluetoothPrinter(this.selectedPrinter, myText);
  }

  closeModal() {
    this.modalCtrl.dismiss();
  }

    
}

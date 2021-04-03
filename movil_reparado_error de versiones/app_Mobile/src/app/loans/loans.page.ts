import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
import { AddLoanPage } from '../add-loan/add-loan.page';
import { ShowLoanPage } from '../show-loan/show-loan.page';
import { LoansService } from '../services/loans.service';
import { Router } from '@angular/router';
import { Loan } from '../models/Loan';

@Component({
  selector: 'app-loans',
  templateUrl: './loans.page.html',
  styleUrls: ['./loans.page.scss'],
})
export class LoansPage implements OnInit {
  loans;
  textSearch = "";
  userName = localStorage.getItem("user");

  constructor( private router:Router, private modalCtrl: ModalController, private alertCtrl: AlertController, private loanService: LoansService) {
    if (this.userName == null) { 
      this.router.navigate(['login']);
    }
   }
  ngOnInit() {
    this.loadData();
  }
  loadData() { 
    this.loanService.getAllLoans().subscribe((data: any) => {
      console.log(data)
      this.loans= data; 
    });
  }

    search(event) {
    this.textSearch = event.detail.value;
  }

  async addSale() { 
  const modal=await this.modalCtrl.create({
      component: AddLoanPage,
      componentProps: {
      }
    });
    await modal.present();
  }

  async printer(loan:Loan) {
    console.log(loan.ID_NUMBER);
    const modal=await this.modalCtrl.create({
      component: ShowLoanPage,
      componentProps: {
        'id_customer': loan.ID_NUMBER,
        'first_amount': loan.FIRST_AMOUNT,
        'payment': loan.PAYMENT,
        'date_start': loan.DATE_START,
        'date_close': loan.DATE_CLOSE,
      }
    });
    await modal.present();
  }

  
  async deleteSale(id:string) {
     const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Atención',
      message: '¿Deseas <strong>eliminar</strong> esta cuenta?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'danger',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Eliminar',
          handler: () => {
            this.loanService.deleteLoan(id).subscribe(data => {
              location.reload();
              console.log("success")});
          }
        }
      ]
    });

    await alert.present();
    
  }

  
  async payment(id_number:string) {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Realizar abono',
      inputs: [
        {
          name: 'monto',
          type: 'number',
          placeholder: 'Monto por abonar'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler:  data  => {
            this.loanService.payment(id_number, data.monto).subscribe(data => {
              this.sleep(300);
              this.ngOnInit();

              console.log("success");
            });
          }
        }
      ]
    });
    await alert.present();
  }

  doRefresh(event) {
    setTimeout(() => {
      this.loanService.getAllLoans().subscribe((data: any) => {
      this.loans= data; 
      });
      event.target.complete();
    }, 1500);
  }
  sleep(ms) {
    return new Promise(
      resolve => setTimeout(resolve, ms));
  }




}

import { Component, OnInit } from '@angular/core';
import { CustomersService } from 'C:/Users/gmg55/Desktop/Proyectos/web_polaco_TSS/webPolaco/src/app/customer/services/customers.service';
import { ProductsService } from 'C:/Users/gmg55/Desktop/Proyectos/web_polaco_TSS/webPolaco/src/app/product/services/products.service';
import { SalesService } from 'C:/Users/gmg55/Desktop/Proyectos/web_polaco_TSS/webPolaco/src/app/sale/services/sales.service';
import { LogService } from '../services/log.service';
import { BackupService } from '../services/backup.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private customerService: CustomersService,
    private prodService: ProductsService,
    private saleService: SalesService,
    private log:LogService,
    private backup: BackupService) { }

  ngOnInit(): void {
  }


  generateXlsProds() {
    this.prodService.getAllProducts().subscribe((data: any) => {
      this.backup.exportToXlsx(data, "productos");
    });
  }

  generateXlsCustomers() {
    this.customerService.getAllCustomer().subscribe((data: any) => {
      this.backup.exportToXlsx(data, "clientes");
    });
  }

  generateXlsSales() {
    this.saleService.getAllSales().subscribe((data: any) => {
      this.backup.exportToXlsx(data, "ventas");
    });
  }



  generateXlsLogPayment() {
    this.log.getLog().subscribe((data: any) => {
      this.backup.exportToXlsx(data, "historico_pagos");
    });
  }

}

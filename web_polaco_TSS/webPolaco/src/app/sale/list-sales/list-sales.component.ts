import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { SalesService } from '../services/sales.service';
import { Sale } from '../Sale';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CreateSaleComponent } from 'src/app/sale/create-sale/create-sale.component';
import { UpdateSaleComponent } from '../update-sale/update-sale.component';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-list-sales',
  templateUrl: './list-sales.component.html',
  styleUrls: ['./list-sales.component.css']
})

export class ListSalesComponent implements OnInit {
  //sale = new Sale();
  displayedColumns: string[] = ['cedula','fecha_venta', 'cuenta', 'pagado', 'opciones'];
  dataSource:Sale[] = [];
  page_size: number = 5;
  page_number: number = 1;
  pageSizeOptions = [5, 10, 20, 50, 100];
  textSearch: string = "";
  userName = localStorage.getItem("user");
  constructor(private saleService: SalesService, private dialog: MatDialog,private route:Router) {
      if (this.userName == null) {
      route.navigate(['login']);
    } else {
     this.saleService.listen().subscribe((data: any) => {
      this.loadData();
    });
    }
  }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.saleService.getAllSales().subscribe((data: any) => {
      console.log(data)
      this.dataSource= data;
  });
  }

  handlePage(e:PageEvent) {
    this.page_size = e.pageSize;
    this.page_number = e.pageIndex+1;
  }

  delete(id: string) {
    console.log(id);
    Swal.fire({
      title: '¿Estas seguro de',
      text: "querer eliminar esta Venta?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar!',
      cancelButtonText:'No, cancelar!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.saleService.deleteSale(id).subscribe(data => {
          this.saleService.filter('Register click');
            Swal.fire(
              'Eliminado!',
              'El elemento ha sido eliminado',
              'success'
          )
        })
      }
    })

  }
  payment(id: string) {
    console.log("---->" + id)
    this.dialog.open(UpdateSaleComponent, { data: {_id:id}});
  }
  create() {
    this.dialog.open(CreateSaleComponent)
  }

  search() {
    if (this.textSearch != "") {
      this.dataSource=this.dataSource.filter(item => {
      return item['ID_NUMBER'].toLocaleLowerCase().includes(this.textSearch.toLocaleLowerCase());
     });
    } else if (this.textSearch == "") {
      this.ngOnInit();
    }
    //console.log(data)
  }





}

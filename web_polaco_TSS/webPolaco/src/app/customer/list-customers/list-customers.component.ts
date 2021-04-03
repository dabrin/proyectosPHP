import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { CustomersService } from '../services/customers.service';
import { Customer } from '../Customer';
import { CreateCustomerComponent } from 'src/app/customer/create-customer/create-customer.component';
import { UpdateCustomerComponent } from '../update-customer/update-customer.component';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-list-customers',
  templateUrl: './list-customers.component.html',
  styleUrls: ['./list-customers.component.css']
})
export class ListCustomersComponent implements OnInit {
  displayedColumns: string[] = ['cedula', 'nombre', 'direccion', 'email','descripcion','opciones'];
  dataSource:Customer[] =[];
  page_size: number = 5;
  page_number: number = 1;
  pageSizeOptions = [5, 10, 20, 50, 100];
  textSearch: string = "";
  userName = localStorage.getItem("user");
  constructor(private customersService: CustomersService, private dialog: MatDialog,private route:Router) {
     if (this.userName == null) {
      route.navigate(['login']);
    } else {
     this.customersService.listen().subscribe((data: any) => {
      console.log(data);
      this.loadData();
    });
    }
  }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
  this.customersService.getAllCustomer().subscribe((data: any) => {
      console.log(data)
      this.dataSource= data;
    });
  }

  handlePage(e:PageEvent) {
    this.page_size = e.pageSize;
    this.page_number = e.pageIndex+1;
  }

  delete(id: string) {
    console.log(id)

     Swal.fire({
      title: '¿Estas seguro de',
      text: "querer eliminar este Cliente?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar!',
      cancelButtonText:'No, cancelar!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.customersService.deleteCustomer(id).subscribe(data => {
          this.customersService.filter('Register click');
            Swal.fire(
              'Eliminado!',
              'El elemento ha sido eliminado',
              'success'
          )
        })
      }
    })
  }
  update(id: string) {
    this.dialog.open(UpdateCustomerComponent, { data: {_id:id}});
    //console.log("---->"+ id)
  }
  create() {
    this.dialog.open(CreateCustomerComponent)
  }

  search() {
     if (this.textSearch != "") {
      this.dataSource=this.dataSource.filter(item => {
      return item['ID_NUMBER'].toLocaleLowerCase().includes(this.textSearch.toLocaleLowerCase());
     });
    } else if (this.textSearch == "") {
      this.ngOnInit();
    }
  }



}

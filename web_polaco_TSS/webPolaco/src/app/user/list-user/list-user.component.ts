import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { UsersService } from '../services/users.service';

import Swal from 'sweetalert2';
import { CreateCustomerComponent } from 'src/app/customer/create-customer/create-customer.component';
//import { UpdateCustomerComponent } from '../update-customer/update-customer.component';
import { Router } from '@angular/router';
import { LogService } from 'src/app/main/services/log.service';
import { CreateUserComponent } from '../create-user/create-user.component';
import { UpdateUserComponent } from '../update-user/update-user.component';
@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  displayedColumns: string[] = ['cedula', 'Nombre Completo', 'nombre usuario', 'email','opciones'];
  dataSource:any[] =[];
  page_size: number = 5;
  page_number: number = 1;
  pageSizeOptions = [5, 10, 20, 50, 100];
  textSearch: string = "";

  userName = localStorage.getItem("user");

  constructor(private user: UsersService, private dialog: MatDialog, private route: Router) {
      if (this.userName == null) {
      route.navigate(['login']);
    } else {
     this.user.listen().subscribe((data: any) => {
      console.log(data);
      this.loadData();
    });
    }
   }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.user.getAllUsers().subscribe((data: any) => {
        console.log(data)
        this.dataSource= data;
      });
  }

    handlePage(e:PageEvent) {
    this.page_size = e.pageSize;
    this.page_number = e.pageIndex+1;
    }


  create() {
    this.dialog.open(CreateUserComponent)
  }
  update(id: string) {

    this.dialog.open(UpdateUserComponent, { data: {_id:id}});

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
        this.user.deleteUser(id).subscribe(data => {
          this.user.filter('Register click');
            Swal.fire(
              'Eliminado!',
              'El elemento ha sido eliminado',
              'success'
          )
        })

      }
    })
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

import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { LoansService } from '../services/loans.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CreateLoanComponent } from '../create-loan/create-loan.component';
import { Loan } from '../Loan';
import Swal from 'sweetalert2';
import { UpdateLoanComponent } from '../update-loan/update-loan.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-loan',
  templateUrl: './list-loan.component.html',
  styleUrls: ['./list-loan.component.css']
})
export class ListLoanComponent implements OnInit {
  displayedColumns: string[] = ['ID_NUMBER', 'FIRST_AMOUNT', 'DESCRIPTION', 'DATE_START','DATE_CLOSE','PAYMENT','opciones'];
  dataSource: Loan[] = [];
  page_size: number = 5;
  page_number: number = 1;
  pageSizeOptions = [5, 10, 20, 50, 100];
  textSearch: string = "";
  userName = localStorage.getItem("user");
  constructor(private loanService: LoansService, private dialog: MatDialog, private route:Router) {

  if (this.userName == null) {
      route.navigate(['login']);
    } else {
    this.loanService.listen().subscribe((data: any) => {
      console.log(data);
      this.loadData();
    });
    }

  }

  ngOnInit(): void {

      this.loadData();
  }

  loadData() {
    this.loanService.getAllLoans().subscribe((data: any) => {
      console.log(data)
      this.dataSource = data;
    });
  }
  handlePage(e:PageEvent) {
    this.page_size = e.pageSize;
    this.page_number = e.pageIndex+1;
  }
  create() {
    this.dialog.open(CreateLoanComponent);
  }
  delete(id: string) {
  Swal.fire({
        title: '¿Estas seguro de',
        text: "querer eliminar este Prestamo?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, eliminar!',
        cancelButtonText:'No, cancelar!'
      }).then((result) => {
        if (result.isConfirmed) {
          this.loanService.deleteLoan(id).subscribe(data => {
            this.loanService.filter('Register clcik');
              Swal.fire(
                'Eliminado!',
                'El elemento ha sido eliminado',
                'success'
            )
          })
        }
      })
    console.log(id)


  }
  payment(id: string) {
    this.dialog.open(UpdateLoanComponent, { data: {_id:id}})
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

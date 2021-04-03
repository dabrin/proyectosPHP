import { Component, OnInit, ViewChild } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ProductsService } from '../services/products.service';
import { Product } from '../Product';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CreateProductComponent } from 'src/app/product/create-product/create-product.component';
import { UpdateProductComponent } from '../update-product/update-product.component';
import { LoginService } from 'src/app/user/services/login.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

// CommonJS



@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

  displayedColumns: string[] = ['codigo', 'nombre', 'precio_costo', 'precio_venta','cantidad','opciones'];
  dataSource:Product[] =[];
  page_size: number = 5;
  page_number: number = 1;
  pageSizeOptions = [5, 10, 20, 50, 100];
  textSearch: string = "";
  user = JSON.parse("" + localStorage.getItem("persona"));
  userName = localStorage.getItem("user");
  constructor(private prodService: ProductsService, private dialog: MatDialog,private logServ:LoginService,private route:Router) {

    console.log(this.userName);
    if (this.userName == null) {
      route.navigate(['login']);
    } else {
      console.log("NEL")
      this.prodService.listen().subscribe((data: any) => {
      console.log(data);
      this.loadData();
    });
    }


  }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
     this.prodService.getAllProducts().subscribe((data: any) => {
      console.log(data)
      this.dataSource= data;
    });
  }
  handlePage(e:PageEvent) {
    this.page_size = e.pageSize;
    this.page_number = e.pageIndex+1;
  }

  delete(id: string) {
    Swal.fire({
      title: '¿Estas seguro de',
      text: "querer eliminar este Producto?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar!',
      cancelButtonText:'No, cancelar!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.prodService.deleteProduct(id).subscribe(data => {
          this.prodService.filter('Register clcik');
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
  update(id: string) {
    //console.log("---->" + id)
    this.dialog.open(UpdateProductComponent, { data: {_id:id}});
  }
  create() {
    this.dialog.open(CreateProductComponent);
   }

  search() {
   if (this.textSearch != "") {
      this.dataSource=this.dataSource.filter(item => {
      return item['NAME_PRODUCT'].toLocaleLowerCase().includes(this.textSearch.toLocaleLowerCase());
     });
    } else if (this.textSearch == "") {
      this.ngOnInit();
    }
  }

}


import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatSliderModule } from '@angular/material/slider';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon'
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { ListProductsComponent } from './product/list-products/list-products.component';
import { ListCustomersComponent } from './customer/list-customers/list-customers.component';
import { ShowProductComponent } from './product/show-product/show-product.component';
import { ShowCustomerComponent } from './customer/show-customer/show-customer.component';
import { ListSalesComponent } from './sale/list-sales/list-sales.component';
import { ShowSaleComponent } from './sale/show-sale/show-sale.component';
import { MenuComponent } from './share/menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { PaginatorPipe } from './pipes/paginator.pipe';
import { ProductsService } from './product/services/products.service';
import { SalesService } from './sale/services/sales.service';
import { CustomersService } from './customer/services/customers.service';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,FormControl } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { CreateProductComponent } from './product/create-product/create-product.component';
import { CreateCustomerComponent } from './customer/create-customer/create-customer.component';
import { CreateSaleComponent } from './sale/create-sale/create-sale.component';
import { CreateLoanComponent } from './loan/create-loan/create-loan.component';
import { UpdateProductComponent } from './product/update-product/update-product.component';
import { UpdateCustomerComponent } from './customer/update-customer/update-customer.component';
import { UpdateSaleComponent } from './sale/update-sale/update-sale.component';
import { ListLoanComponent } from './loan/list-loan/list-loan.component';
import { UpdateLoanComponent } from './loan/update-loan/update-loan.component';
import { LoginComponent } from './user/login/login.component';
import { HomeComponent } from './main/home/home.component';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { ListUserComponent } from './user/list-user/list-user.component';
import { CreateUserComponent } from './user/create-user/create-user.component';
import { UpdateUserComponent } from './user/update-user/update-user.component';

@NgModule({
  declarations: [
    AppComponent,
    ListProductsComponent,
    ListCustomersComponent,
    ShowProductComponent,
    ShowCustomerComponent,
    ListSalesComponent,
    ShowSaleComponent,
    MenuComponent,
    PaginatorPipe,
    CreateProductComponent,
    CreateCustomerComponent,
    CreateSaleComponent,
    CreateLoanComponent,
    UpdateProductComponent,
    UpdateCustomerComponent,
    UpdateSaleComponent,
    ListLoanComponent,
    UpdateLoanComponent,
    LoginComponent,
    HomeComponent,
    ListUserComponent,
    CreateUserComponent,
    UpdateUserComponent

  ], entryComponents: [
    CreateProductComponent,
    CreateCustomerComponent,
    CreateSaleComponent,
    CreateLoanComponent,
    UpdateProductComponent,
    UpdateCustomerComponent,
    UpdateSaleComponent,
    UpdateLoanComponent,LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,FormsModule,
    MatMenuModule,
    HttpClientModule,
    MatButtonModule,
    MatSliderModule,
    MatToolbarModule,
    MatIconModule,
    MatTableModule,
    NoopAnimationsModule,
    MatPaginatorModule,
    MatInputModule,
    MatCardModule,
    MatDialogModule,
    MatSelectModule,
    MatListModule
    ,MatGridListModule],
  providers: [
    ProductsService
    , CustomersService
    , SalesService]
  ,
  bootstrap: [AppComponent]
})
export class AppModule {

 }

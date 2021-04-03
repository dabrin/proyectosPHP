import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProductsComponent } from '../app/product/list-products/list-products.component';
import { ListCustomersComponent } from '../app/customer/list-customers/list-customers.component';
import { ListSalesComponent } from '../app/sale/list-sales/list-sales.component';
import { ListLoanComponent } from './loan/list-loan/list-loan.component';
import {LoginComponent } from './user//login/login.component'
import { HomeComponent } from './main/home/home.component';
import { ListUserComponent } from './user/list-user/list-user.component';



const routes: Routes = [
  { path: 'list-products', component: ListProductsComponent },
  {path:'list-customers',component:ListCustomersComponent},
  {path:'list-sales',component:ListSalesComponent},
  { path: 'list-loan', component: ListLoanComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'list-users', component: ListUserComponent }





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

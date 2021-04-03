import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'show-product',
    loadChildren: () => import('./show-product/show-product.module').then( m => m.ShowProductPageModule)
  },
  {
    path: 'add-product',
    loadChildren: () => import('./add-product/add-product.module').then( m => m.AddProductPageModule)
  },
  {
    path: 'add-customer',
    loadChildren: () => import('./add-customer/add-customer.module').then( m => m.AddCustomerPageModule)
  },
  {
    path: 'show-customer',
    loadChildren: () => import('./show-customer/show-customer.module').then( m => m.ShowCustomerPageModule)
  },
  {
    path: 'add-sale',
    loadChildren: () => import('./add-sale/add-sale.module').then( m => m.AddSalePageModule)
  },
  {
    path: 'show-sale',
    loadChildren: () => import('./show-sale/show-sale.module').then( m => m.ShowSalePageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  
  {
    path: 'add-loan',
    loadChildren: () => import('./add-loan/add-loan.module').then( m => m.AddLoanPageModule)
  },
  {
    path: 'show-loan',
    loadChildren: () => import('./show-loan/show-loan.module').then( m => m.ShowLoanPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'add-user',
    loadChildren: () => import('./add-user/add-user.module').then( m => m.AddUserPageModule)
  },
  {
    path: 'users',
    loadChildren: () => import('./users/users.module').then( m => m.UsersPageModule)
  },
  {
    path: 'show-user',
    loadChildren: () => import('./show-user/show-user.module').then( m => m.ShowUserPageModule)
  },
 
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

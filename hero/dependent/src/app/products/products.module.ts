import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDashboardComponent } from './product-dashboard/product-dashboard.component';
import { RouterModule, Routes, RoutesRecognized } from '@angular/router';

const routes:Routes=[{path:"",component:ProductDashboardComponent}]
@NgModule({
  declarations: [ProductDashboardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  // exports:[ProductDashboardComponent]
})
export class ProductsModule { }

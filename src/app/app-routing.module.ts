import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChefDetailsComponent } from './chefs/chef-details/chef-details.component';
import { ChefsComponent } from './chefs/chefs.component';
import { MenuComponent } from './menu/menu.component';
import { OrdersComponent } from './orders/orders.component';

const routes: Routes = [
  {path:"",component:MenuComponent},
  {path:"orders",component:OrdersComponent},
  {path:"chefs",component:ChefsComponent},
  {path:"chefs/:id",component:ChefDetailsComponent},
  {path:"",component:MenuComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

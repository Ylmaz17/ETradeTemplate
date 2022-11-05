import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { LoginComponent } from './components/login/login.component';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { ProductComponent } from './components/product/product.component';
import { UserregisterComponent } from './components/userregister/userregister.component';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  //{path:"",pathMatch:"full",component:ProductComponent},
  {path:"",pathMatch:"full",component:HomepageComponent},
  {path:"products",component:ProductComponent},
  {path:"products/category/:categoryId",component:ProductComponent},
  {path:"products/add",component:ProductAddComponent, canActivate:[LoginGuard]},
  {path:"login",component:LoginComponent},
  {path:"register",component:UserregisterComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

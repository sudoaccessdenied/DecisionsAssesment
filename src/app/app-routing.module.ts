import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AddProductComponent } from './products/add-product/add-product.component';
import { ProductResolverService } from './products/add-product/product-resolver.service';
import { ErrorPageComponent } from './products/error-page/error-page.component';
import { ListResolverService } from './products/show-product/list-resolver.service';
import { ShowProductComponent } from './products/show-product/show-product.component';


const routes: Routes = [  
  // { path:'',component: AppComponent},
  { path:'home',component: ShowProductComponent, resolve:{data:ListResolverService}},
  { path:'add',component:AddProductComponent,resolve:{data:ProductResolverService}},
  { path :'',redirectTo : 'home',pathMatch :'full' },
  { path:"**",component:ErrorPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

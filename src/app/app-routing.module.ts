import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { ProductComponent }  from './product/product.component';

const routes: Routes = [
     {
       path: '',
       redirectTo:'/login',
       pathMatch:'full'
      },
     {
      path: 'login',
     component: LoginComponent
    },
   {
  path: 'userdetails/:myUserName',
    component: UserDetailsComponent
  },
  {path:'product',  component:ProductComponent},
  
  {path:"**",
    component: LoginComponent
  }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { FormularioComponent } from './pages/formulario/formulario.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { PermissionsGuard } from './guard/permissions.guard';
import { PostComponent } from './pages/post/post.component';

const routes: Routes = [
  {path:'home',component:HomeComponent, canActivate:[PermissionsGuard]},
  {path:'formulario',component:FormularioComponent, canActivate:[PermissionsGuard]},
  {path:'login',component:LoginComponent},
  {path:'post',component:PostComponent},
  {path:'', redirectTo:'/login', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

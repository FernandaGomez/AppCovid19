import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { NgChartsModule } from 'ng2-charts';



const routes: Routes = [
  //Sistema de rutas
  {path:'', redirectTo:'/inicio', pathMatch:'full'},
  {path:'inicio', component:DashboardComponent},
  {path:'iniciar-sesion', component:LoginComponent},
  {path:'log-out', component: DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), NgChartsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }


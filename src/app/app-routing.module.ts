import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {StagiairesComponent} from "./components/stagiaires/stagiaires.component";

const routes: Routes = [
  { path:'', component: DashboardComponent },
  { path: 'satgiaires', component: StagiairesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

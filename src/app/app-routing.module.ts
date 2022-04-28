import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {StagiairesComponent} from "./components/stagiaires/stagiaires.component";
import {FormateursComponent} from "./components/formateurs/formateurs.component";
import {GroupesComponent} from "./components/groupes/groupes.component";
import {SpecialitesComponent} from "./components/specialites/specialites.component";

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'stagiaires', component: StagiairesComponent},
  { path: 'formateurs', component: FormateursComponent},
  { path: 'groupes', component: GroupesComponent},
  { path: 'specialites', component: SpecialitesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

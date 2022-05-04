import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {StagiairesComponent} from "./components/stagiaires/stagiaires.component";
import {FormateursComponent} from "./components/formateurs/formateurs.component";
import {GroupesComponent} from "./components/groupes/groupes.component";
import {SpecialitesComponent} from "./components/specialites/specialites.component";
import {AjouterSpecialiteComponent} from "./components/specialites/ajouter-specialite/ajouter-specialite.component";
import {LoginComponent} from "./components/login/login.component";
import {AjouterGroupeComponent} from "./components/groupes/ajouter-groupe/ajouter-groupe.component";

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'stagiaires', component: StagiairesComponent},
  { path: 'formateurs', component: FormateursComponent},
  { path: 'groupes', component: GroupesComponent},
  { path: 'specialites', component: SpecialitesComponent},
  { path: 'specialites/ajouter', component: AjouterSpecialiteComponent},
  { path: 'groupes/ajouter', component: AjouterGroupeComponent},
  { path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

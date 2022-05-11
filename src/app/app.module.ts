import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { CardComponent } from './components/card/card.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { MenuItemComponent } from './components/menu-item/menu-item.component';
import { CardsComponent } from './components/cards/cards.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { StagiairesComponent } from './components/stagiaires/stagiaires.component';
import { FormateursComponent } from './components/formateurs/formateurs.component';
import { GroupesComponent } from './components/groupes/groupes.component';
import { SpecialitesComponent } from './components/specialites/specialites.component';
import { AjouterSpecialiteComponent } from './components/specialites/ajouter-specialite/ajouter-specialite.component';
import { LoginComponent } from './components/login/login.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AjouterGroupeComponent } from './components/groupes/ajouter-groupe/ajouter-groupe.component';
import { MessageComponent } from './components/message/message.component';
import { AjouterStagiaireComponent } from './components/stagiaires/ajouter-stagiaire/ajouter-stagiaire.component';
import { MatieresComponent } from './components/matieres/matieres.component';
import { AjouterMatiereComponent } from './components/matieres/ajouter-matiere/ajouter-matiere.component';
import { AjouterFormateurComponent } from './components/formateurs/ajouter-formateur/ajouter-formateur.component';
import { SeancesComponent } from './components/seances/seances.component';
import { AjouterSeanceComponent } from './components/seances/ajouter-seance/ajouter-seance.component';
import {AuthInterceptor} from "./services/AuthInterceptor";
import { AbsenceComponent } from './components/seances/absence/absence.component';
import { TypeExamComponent } from './components/modals/type-exam/type-exam.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    CardComponent,
    SideBarComponent,
    MenuItemComponent,
    CardComponent,
    CardsComponent,
    DashboardComponent,
    StagiairesComponent,
    FormateursComponent,
    GroupesComponent,
    SpecialitesComponent,
    AjouterSpecialiteComponent,
    LoginComponent,
    AjouterGroupeComponent,
    MessageComponent,
    AjouterStagiaireComponent,
    MatieresComponent,
    AjouterMatiereComponent,
    AjouterFormateurComponent,
    SeancesComponent,
    AjouterSeanceComponent,
    AbsenceComponent,
    TypeExamComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule
    ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }

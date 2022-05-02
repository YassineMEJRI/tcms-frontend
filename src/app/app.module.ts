import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
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
import {FormsModule} from "@angular/forms";

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
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

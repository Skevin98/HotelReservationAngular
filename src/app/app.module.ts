import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConnexionComponent } from './header/connexion/connexion.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { ReservationComponent } from './reservation/reservation.component';


import { ChambresComponent } from './chambres/chambres.component';
import { SingleReservationComponent } from './single-reservation/single-reservation.component';
import { MdbAccordionModule } from 'mdb-angular-ui-kit/accordion';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { MdbDropdownModule } from 'mdb-angular-ui-kit/dropdown';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { MdbPopoverModule } from 'mdb-angular-ui-kit/popover';
import { MdbRadioModule } from 'mdb-angular-ui-kit/radio';
import { MdbRangeModule } from 'mdb-angular-ui-kit/range';
import { MdbRippleModule } from 'mdb-angular-ui-kit/ripple';
import { MdbScrollspyModule } from 'mdb-angular-ui-kit/scrollspy';
import { MdbTabsModule } from 'mdb-angular-ui-kit/tabs';
import { MdbTooltipModule } from 'mdb-angular-ui-kit/tooltip';
import { MdbValidationModule } from 'mdb-angular-ui-kit/validation';
import { ProfilComponent } from './profil/profil.component';
import { DetailChambreComponent } from './detail-chambre/detail-chambre.component';
import { DetailReservationComponent } from './detail-reservation/detail-reservation.component';
import { CreateReservationComponent } from './create-reservation/create-reservation.component';
import { FooterComponent } from './footer/footer.component';
import { CategoriesComponent } from './categories/categories.component';
import { HttpClientModule } from '@angular/common/http';
import { ModalComponent } from './modal/modal.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ConnexionComponent,
    SignupComponent,
    HomeComponent,
    ReservationComponent,
    ChambresComponent,
    SingleReservationComponent,
    ProfilComponent,
    DetailChambreComponent,
    DetailReservationComponent,
    CreateReservationComponent,
    FooterComponent,
    CategoriesComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'reservations', component: ReservationComponent },

      { path:'reservations/:id', component: DetailReservationComponent },
      { path: '', pathMatch: 'full', redirectTo: 'home' },

      { path: 'home', component: HomeComponent },
      { path: 'inscription', component: SignupComponent },
      { path: 'categories', component: CategoriesComponent },
      { path:'categories/:id', component: CreateReservationComponent },
      { path: 'profil', component: ProfilComponent }

    ]),

    BrowserAnimationsModule,
    MdbAccordionModule,
    MdbCarouselModule,
    MdbCheckboxModule,
    MdbCollapseModule,
    MdbDropdownModule,
    MdbFormsModule,
    MdbModalModule,
    MdbPopoverModule,
    MdbRadioModule,
    MdbRangeModule,
    MdbRippleModule,
    MdbScrollspyModule,
    MdbTabsModule,
    MdbTooltipModule,
    MdbValidationModule,
    
    ReactiveFormsModule,

    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }

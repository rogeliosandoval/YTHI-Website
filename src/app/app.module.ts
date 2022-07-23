import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router'
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { Reviews } from './components/reviews/reviews.component';
import { Services } from './components/services/services.component';
import { Careers } from './components/careers/careers.component';
import { About } from './components/about/about.component';
import { FAQ } from './components/faq/faq.component';
import { Contact } from './components/contact/contact.component';
import { Guaranteed } from './components/guaranteed/guaranteed.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, data: { animation: 'fader' } },
  { path: 'reviews', component: Reviews, data: { animation: 'fader' } },
  { path: 'services', component: Services, data: { animation: 'fader' } },
  { path: 'careers', component: Careers, data: { animation: 'fader' } },
  { path: 'about', component: About, data: { animation: 'fader' } },
  { path: 'faq', component: FAQ, data: { animation: 'fader' } },
  { path: 'contact', component: Contact, data: { animation: 'fader' } },
  { path: 'guaranteed', component: Guaranteed, data: { animation: 'fader' } }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    Reviews,
    Services,
    Careers,
    About,
    FAQ,
    Contact,
    Guaranteed
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

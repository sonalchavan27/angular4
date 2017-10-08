import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injectable, APP_INITIALIZER, ApplicationRef, Type, ComponentFactoryResolver } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent }   from './header.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NgbDropdownConfig} from '@ng-bootstrap/ng-bootstrap';
//import { NgbdModalComponent, NgbdModalContent } from './modal-component';

import { AppRoutingModule } from './app-routing.module';
import { ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { SliderComponent } from './slider/slider.component';
import { CarouselModule } from 'angular4-carousel';
import { ShippingComponent } from './shipping/shipping.component';
import { OrdersComponent } from './orders/orders.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ShippingHistoryModalComponent } from './shipping-history-modal/shipping-history-modal.component';
import {HttpClientModule} from '@angular/common/http';
import { NgbdPopoverBasic } from './popover-basic';

/* import { ModalDialogModule } from 'ngx-modal-dialog';
import {ModalModule} from "ngx-modal"; */

/* const appRoutes: Routes = [
   /*{ path: 'crisis-center', component: CrisisListComponent },
  { path: 'hero/:id',      component: HeroDetailComponent },
  {
    path: 'heroes',
    component: HeroListComponent,
    data: { title: 'Heroes List' }
  },
  { path: '',
    redirectTo: '/heroes',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent } 

  { path: 'home', component: HomeComponent },
  { path: 'about',      component: AboutComponent },
  { path: 'contact',      component: ContactComponent },
]; */

const components = [AppComponent, HeaderComponent];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    SliderComponent,
    ShippingComponent,
    OrdersComponent,
    ShippingHistoryModalComponent,
    NgbdPopoverBasic
   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    CarouselModule,
    BrowserAnimationsModule
    //ModalModule
  ],
  entryComponents: [components],
  providers: [NgbDropdownConfig]
})
export class AppModule {

  constructor(private resolver: ComponentFactoryResolver) { }
  ngDoBootstrap(appRef: ApplicationRef) {
      components.forEach((componentDef: Type<{}>) => {
          const factory = this.resolver.resolveComponentFactory(componentDef);
          if (document.querySelector(factory.selector)) {
              appRef.bootstrap(factory);
          }
      });
  }

 }

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

import { AppRoutingModule } from './app-routing.module';


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
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  entryComponents: components,
  providers: []
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

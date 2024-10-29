import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PEcommerceComponent } from './p-ecommerce/p-ecommerce.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { IntersectionObserverDirective } from './intersection-observer.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PEcommerceComponent,
    TechnologiesComponent,
    IntersectionObserverDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

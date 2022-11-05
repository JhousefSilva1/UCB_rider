import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { IndexComponent } from './components/index/index.component';
import { FooterComponent } from './components/footer/footer.component';
import { MotorcycleComponent } from './components/motorcycle/motorcycle.component';
import { QuotationComponent } from './components/quotation/quotation.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { FormsModule } from '@angular/forms';
import { routing } from './app.routing';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    IndexComponent,
    FooterComponent,
    MotorcycleComponent,
    QuotationComponent,
    ContactUsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routing,
    FormsModule,
    HttpClientModule,
    NgbCarouselModule,

  

   // NgModule,
    
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

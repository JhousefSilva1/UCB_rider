import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { IndexComponent } from './components/index/index.component';
import { FooterComponent } from './components/footer/footer.component';
import { MotorcycleComponent } from './components/motorcycle/motorcycle.component';
import { QuotationComponent } from './components/quotation/quotation.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    IndexComponent,
    FooterComponent,
    MotorcycleComponent,
    QuotationComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { ModuleWithProviders } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { FooterComponent } from './components/footer/footer.component';
import { IndexComponent } from './components/index/index.component';
import { MotorcycleComponent } from './components/motorcycle/motorcycle.component';
import { NavComponent } from './components/nav/nav.component';
import { QuotationComponent } from './components/quotation/quotation.component';


const appRoutes: Routes = [
    { path: 'nav', component: NavComponent},
    { path: 'footer', component:FooterComponent},
    { path: 'contact-us', component: ContactUsComponent },
    { path: 'motorcycle', component:MotorcycleComponent},
    { path: 'quotation', component:QuotationComponent},
    { path: '', component:IndexComponent},


]
export const approutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);
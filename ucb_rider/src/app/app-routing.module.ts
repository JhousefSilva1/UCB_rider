import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { routing, approutingProviders} from './app.routing';
const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,
    ]
})
export class AppRoutingModule { }

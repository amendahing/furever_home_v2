import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { AdoptionComponent } from "./adoption/adoption.component";

const routes: Routes = [
  { path: "", component: AppComponent },
  { path: "home", component: HomeComponent },
  { path: "adoption", component: AdoptionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

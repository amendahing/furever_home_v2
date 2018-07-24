import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";
import { AppRoutingModule } from "./app-routing.module";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { AdoptionComponent } from "./adoption/adoption.component";

import { AdoptionService } from "./services/adoption.service";
import { ContactComponent } from "./contact/contact.component";

@NgModule({
  declarations: [
    AppComponent,
    AdoptionComponent,
    HomeComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
      { path: "", component: HomeComponent },
      { path: "home", component: HomeComponent },
      { path: "adoption", component: AdoptionComponent },
      { path: "contact", component: ContactComponent }
    ])
  ],
  providers: [AdoptionService],
  bootstrap: [AppComponent]
})
export class AppModule {}

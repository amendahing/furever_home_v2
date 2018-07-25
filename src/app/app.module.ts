import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";
import { AppRoutingModule } from "./app-routing.module";
import { RouterModule } from "@angular/router";
import { AgmCoreModule } from "@agm/core";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { AdoptionComponent } from "./adoption/adoption.component";
import { ContactComponent } from "./contact/contact.component";

import { AdoptionService } from "./services/adoption.service";
import { GmapService } from "./services/gmap.service";

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
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyComDx4blD1hD6FgUej0R-NfXNJMiDWAx4"
    }),
    RouterModule.forRoot([
      { path: "", component: HomeComponent },
      { path: "home", component: HomeComponent },
      { path: "adoption", component: AdoptionComponent },
      { path: "contact", component: ContactComponent }
    ])
  ],
  providers: [AdoptionService, GmapService],
  bootstrap: [AppComponent]
})
export class AppModule {}

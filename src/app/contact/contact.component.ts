import { Component, OnInit } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { GmapService } from "../services/gmap.service";
declare var google: any;

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.scss"]
})
export class ContactComponent implements OnInit {
  zoom: number = 10;
  lat: number = 37.3382;
  lng: number = -121.8863;

  constructor(private _gmapService: GmapService) {}

  ngOnInit() {}

  getMap() {}
}

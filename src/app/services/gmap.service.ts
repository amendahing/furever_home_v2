import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import "rxjs/add/operator/map";

@Injectable()
export class GmapService {
  constructor(public http: Http) {
    console.log("Google Map Service connected...");
  }
}

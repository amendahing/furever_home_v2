import { Component, OnInit } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AdoptionService } from "../services/adoption.service";

@Component({
  selector: "app-adoption",
  templateUrl: "./adoption.component.html",
  styleUrls: ["./adoption.component.scss"]
})
export class AdoptionComponent implements OnInit {
  constructor(private adoptionService: AdoptionService) {}

  ngOnInit() {
    this.adoptionService.getPosts().subscribe(posts => {
      console.log(posts);
    });
  }
}

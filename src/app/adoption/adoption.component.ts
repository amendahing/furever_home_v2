import { Component, OnInit } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AdoptionService } from "../services/adoption.service";

@Component({
  selector: "app-adoption",
  templateUrl: "./adoption.component.html",
  styleUrls: ["./adoption.component.scss"]
})
export class AdoptionComponent implements OnInit {
  children: any;
  expanded = [false, false, false];

  constructor(private adoptionService: AdoptionService) {}

  ngOnInit() {
    // this.adoptionService.getPosts().subscribe(posts => {
    //   console.log(posts);
    // });
  }

  expandInfo(index) {
    var dropDown = document.getElementsByClassName("adoption-drop-down")[index];
    // if (this.expanded[index] === false) {
    //   dropDown.style.display = "block";
    //   this.expanded[index] = true;
    // } else {
    //   dropDown.style.display = "none";
    //   this.expanded[index] = false;
    // }
  }
}

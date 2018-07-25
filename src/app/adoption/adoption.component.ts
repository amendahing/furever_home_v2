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
    if (this.expanded[index] === true) {
      var icon = document.getElementsByClassName("collapse")[index];
      var dropBox = document.getElementsByClassName("adoption-drop-down")[
        index
      ];

      dropBox.style.display = "none";
      icon.setAttribute("class", "expand");

      this.expanded[index] = false;
    } else if (this.expanded[index] === false) {
      var icon = document.getElementsByClassName("expand")[index];
      var dropBox = document.getElementsByClassName("adoption-drop-down")[
        index
      ];

      dropBox.style.display = "block";
      icon.setAttribute("class", "collapse");
      this.expanded[index] = true;
    }
  }
}

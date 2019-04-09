import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-author",
  templateUrl: "./author.component.html",
  styles: []
})
export class AuthorComponent implements OnInit {
  public authorId = "";
  constructor(activateRoute: ActivatedRoute) {
    this.authorId = activateRoute.snapshot.params["id"];
  }

  ngOnInit() {}
}

import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HeroesComponent } from "./heroes/heroes.component";
import { NotFoundComponent } from "./core/not-found/not-found.component";

const routes: Routes = [
  {
    path: "",
    loadChildren: "./home/home.module#HomeModule"
  },
  {
    path: "about",
    loadChildren: "./about/about.module#AboutModule"
  },
  {
    path: "heroes",
    component: HeroesComponent
  },
  {
    path: "contacts",
    loadChildren: "./contacts/contacts.module#ContactsModule"
  },
  {
    path: "converter",
    loadChildren: "./converter/converter.module#ConverterModule"
  },
  {
    path: "car",
    loadChildren: "./car/car.module#CarModule"
  },

  {
    path: "not-found",
    component: NotFoundComponent
  },
  {
    path: "**",
    redirectTo: "not-found"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

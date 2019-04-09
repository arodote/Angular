import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ShellComponent } from "./shell/shell.component";
import { HeaderComponent } from "./shell/header/header.component";
import { FooterComponent } from "./shell/footer/footer.component";
import { MainComponent } from "./shell/main/main.component";
import { RouterModule } from "@angular/router";
import { NotFoundComponent } from "./not-found/not-found.component";

@NgModule({
  declarations: [
    ShellComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    NotFoundComponent
  ],
  imports: [CommonModule, RouterModule],
  exports: [ShellComponent]
})
export class CoreModule {}

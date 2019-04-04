import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellComponent } from './shell/shell.component';
import { HeaderComponent } from './shell/header/header.component';
import { FooterComponent } from './shell/footer/footer.component';
import { MainComponent } from './shell/main/main.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ShellComponent, HeaderComponent, FooterComponent, MainComponent],
  imports: [CommonModule, RouterModule],
  exports: [ShellComponent]
})
export class CoreModule {}

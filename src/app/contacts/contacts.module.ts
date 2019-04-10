import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { ContactsRoutingModule } from "./contacts-routing.module";
import { ContactsComponent } from "./contacts/contacts.component";

@NgModule({
  declarations: [ContactsComponent],
  imports: [CommonModule, ContactsRoutingModule, FormsModule]
})
export class ContactsModule {}

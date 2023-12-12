import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactManagerComponent } from './contact-manager/contact-manager.component';
import { AddContactsComponent } from './add-contacts/add-contacts.component';
import { ViewContactComponent } from './view-contact/view-contact.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { PagenotFoundComponent } from './pagenot-found/pagenot-found.component';


const routes: Routes = [
  {
    //localhost:4200 -> localhost:4200/contactManager
    path:'',redirectTo:'contactManager',pathMatch:'full'
  
  },  {
     //listing all contact details
    path:'contactManager',component:ContactManagerComponent,
  }
 ,
 {
  //Add a new contact
  path:'contactManager/addContact',component:AddContactsComponent,
 

 },
 {
  //view a particular contact
  path:'contactManager/viewContact/:id',component:ViewContactComponent,
 },
 {
  //edit a particular contact
  path:'contactManager/editContact/:contactId',component:EditContactComponent ,

 },
 {
  path:'**',component:PagenotFoundComponent,
 }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

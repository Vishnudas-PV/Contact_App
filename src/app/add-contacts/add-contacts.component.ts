import { Component, OnInit } from '@angular/core';
import { MyContact } from 'src/model/myContact';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-contacts',
  templateUrl: './add-contacts.component.html',
  styleUrls: ['./add-contacts.component.css']
})
export class AddContactsComponent  implements OnInit{
contact:MyContact={}; //all contacts details as in the form of object
allGroups:any=[]; //to hold group information

constructor (private api:ApiService, private router:Router){
  this.contact.GroupId='Select the GroupId';
}

  ngOnInit(): void {
   this.api.getAllGroups().subscribe((data:any)=>{
    console.log(data);
    this.allGroups=data;
    
   }) ;
  }
addcontact(){
  this.api.addContact(this.contact).subscribe((result:any)=>{
  this.router.navigateByUrl('')

  })
}
}

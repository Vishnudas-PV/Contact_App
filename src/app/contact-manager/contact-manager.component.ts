import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { MyContact } from 'src/model/myContact';

@Component({
  selector: 'app-contact-manager',
  templateUrl: './contact-manager.component.html',
  styleUrls: ['./contact-manager.component.css']
})


export class ContactManagerComponent implements OnInit {
  //To hold the search input value
  searchKey:string='';

  //to hold the system current date

  loginDate:any;
   
  //to hold the contact details
  allContacts:any=[];

  //string interpolation
  heading:string='The Contacts Details';

 //api dependency injection
 constructor (private api:ApiService){}
  ngOnInit(): void {
    this.getAllContact()
  }
  getAllContact(){
    this.api.getAllContact().subscribe((data:MyContact)=>{
              console.log(data);
              this.allContacts=data;
              this.loginDate=new Date()
              
    })
    //  new Error('Method not implemented.');
  }
 
  

search(event:any){
  console.log(event.target.value);
  this.searchKey=event.target.value;
  
}
deleteContact(contactId:any){
  this.api.deleteContact(contactId).subscribe((result:any)=>{
    alert('Delete successfully');
    this.getAllContact();
  })
}

}

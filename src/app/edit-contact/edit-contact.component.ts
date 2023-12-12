import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { MyContact } from 'src/model/myContact';
import { MyGroup } from 'src/model/myGroup';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {
  //To hold the id of the contact
  contactId:string='';
  //To hold the contact details
  contact:MyContact={};
  //To hold the group details
  group:MyGroup[]=[];

  constructor (private activateddRoute:ActivatedRoute, private api:ApiService,private route:Router){}
  ngOnInit(): void {
    this.activateddRoute.params.subscribe((data:any)=>{
      console.log(data); //contactId:"2"
      console.log(data.contactId); // "2"
      this.contactId=data.contactId;
      
      //call API for getting particular contact details 
      this.api.viewContactDetails(this.contactId).subscribe((result:any)=>{
        console.log(result); //contact details as object 
        this.contact=result;
        //call API for getting information 
        this.api.getAllGroups().subscribe((data:any)=>{
          console.log(data);
          this.group=data;
   
          
        })
   
        
      })

      
    })

  }
  updateContact(){
    
    this.api.updateContact(this.contactId,this.contact).subscribe((result:any)=>{
      console.log(result); 
      this.route.navigateByUrl('/') 
      
    })
  }

}

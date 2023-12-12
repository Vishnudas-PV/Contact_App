import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MyContact } from 'src/model/myContact';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
//dependency injection
  constructor(private http:HttpClient) { }

  //get function for getting all contact details 
   getAllContact():Observable<MyContact> {
    
    return this.http.get('http://localhost:3000/contacts')
  }
  //View particular contact details - http://localhost:3000/contacts
  viewContactDetails(contactId:string){
    return this.http.get(`http://localhost:3000/contacts/${contactId}`)
  }

  //API call for getting group name
 getGroupName(GroupId:string){
  return this.http.get(`http://localhost:3000/groups/${GroupId}`)
 }
 //API call for contact information
 addContact(contactBody:any){
  return this.http.post('http://localhost:3000/contacts',contactBody)
 }
 //API call for get the group details
 getAllGroups(){
 return this.http.get(' http://localhost:3000/groups') 
 }
//API call for delete a particular contact
deleteContact(contactId:any){
return this.http.delete(`http://localhost:3000/contacts/${contactId}`)
}

//API call for update particular contact
updateContact(contactId:any,contactBody:any){
  return this.http.put(`http://localhost:3000/contacts/${contactId}`,contactBody)

}
 
}

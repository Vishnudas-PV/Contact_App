import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(allContacts:any[],seacrhTerm:string,propsName:string):any[] {
    const result:any[]=[];
    if(!allContacts || seacrhTerm=='' || propsName==''){
      return allContacts;
    }
    allContacts.forEach((contact:any)=>{
      if(contact[propsName].trim().toLowerCase().includes(seacrhTerm.trim().toLowerCase())){
        result.push(contact)
      }
    })

    return result;
  }

}

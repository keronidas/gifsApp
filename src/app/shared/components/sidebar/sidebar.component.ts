import { Component } from '@angular/core';
import { GifsServiceService } from 'src/app/gifs/services/gifs-service.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})


export class SidebarComponent {
  
 
  constructor(private service:GifsServiceService){}

  searchTag(tag :string):void{
    this.service.searchTag(tag);
  }
  get tags(){
    return this.service.tagshistory;
  }

  public deleteLocalStorage(){
    this.service.deleteLocalStorage();
    this.service.deleteTag();

  }


}

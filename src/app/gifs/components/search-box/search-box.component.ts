import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsServiceService } from '../../services/gifs-service.service';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent {
@ViewChild('txtTagInput')
public tagInput!:ElementRef<HTMLInputElement>;
constructor(private gifsService: GifsServiceService){}


searchTag(){
  const newTag=this.tagInput.nativeElement.value;
  this.gifsService.searchTag(newTag);
  this.tagInput.nativeElement.value='';
}

}

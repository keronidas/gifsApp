import { Component } from '@angular/core';
import { GifsServiceService } from '../../services/gifs-service.service';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'app-homePage',
  templateUrl: './home-page.component.html'
})
export class HomePageComponent {
  constructor(private gifsService:GifsServiceService){}

  get gifs(): Gif[]{
    return this.gifsService.gisList;
  }

}

import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';




@Injectable({
  //Servicio inyectable en toda la app
  providedIn: 'root'
})
export class GifsServiceService {
  public gisList: Gif[]=[];

  private _tagsHistory: string[] = [];
  private serviceURL:string='http://api.giphy.com/v1/gifs';
  private apiKey:string='OlptHygd350P6MOHjeIhnhWhp36phewu';
  

  private organizeHistory(tag: string) {
    tag = tag.toLowerCase();
    if (this._tagsHistory.includes(tag)) {
      this._tagsHistory = this._tagsHistory.filter((oldTag) => oldTag !== tag);
    }

    this._tagsHistory.unshift(tag);
    this._tagsHistory=this._tagsHistory.splice(0,10);
    this.saveLocalStorage();
  }

  private saveLocalStorage():void{
    localStorage.setItem('history',JSON.stringify(this._tagsHistory));
  }

  private loadLocalStorage():void{
    if(!localStorage.getItem('history')) return;
    this._tagsHistory=JSON.parse(localStorage.getItem('history')!);
    // Not null operator  !
  }
  public deleteLocalStorage():void{
    localStorage.removeItem('history');
  }
  constructor(private http:HttpClient) {
    this.loadLocalStorage();
   }

  get tagshistory(): string[] {
    return [...this._tagsHistory];
  }

public deleteTag(){
  this._tagsHistory=[];
}
searchTag(tag: string):void{
    if (tag.length === 0) return;
    this.organizeHistory(tag);

    const params=new HttpParams()
    .set('api_key', this.apiKey)
    .set('limit','10')
    .set('q',tag)

    this.http.get<SearchResponse>(`${this.serviceURL}/search`,{params})
    .subscribe((resp)=>{
      this.gisList=resp.data;
      console.log(this.gisList);
    });
   
  }
}

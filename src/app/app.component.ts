import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  
  constructor(private http: HttpClient)
  {

  }

  fetched:any = "hello";
  result : any;
  custom()
  {
    this.http.get<any>('https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=395006&date=05-05-2021').subscribe(
      
      value => {
           this.fetched = value;
           if(this.fetched["sessions"].length!=0)
           {
                // play music
                let audio = new Audio();
                audio.src = "../../../assets/audio/file.mp3";
                audio.load();
                audio.play();
               this.result.unsubscribe();
           }
          else{
               console.log("not find out");
           }
         }
     );
  }

  call()
  {
    this.result = interval(30000).subscribe((func => {
      this.custom();
    }))

    
  }
  

}

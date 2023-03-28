import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-qr-data',
  templateUrl: './qr-data.component.html',
  styleUrls: ['./qr-data.component.css']
})
export class QrDataComponent implements OnInit {
  inputUrl:string = "https://www.youtube.com/results?search_query=Angular+web";
  constructor(){}
  ngOnInit(): void {
      
  }

}

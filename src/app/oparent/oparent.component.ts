import { Component,OnInit} from '@angular/core';

@Component({
  selector: 'oparent',
  templateUrl: './oparent.component.html',
  styleUrls: ['./oparent.component.css']
})
export class OparentComponent implements OnInit{
    
   message:string = '';

    constructor(){}
    ngOnInit(): void {
        
    }

   public setMessage(msg:string){
        this.message = msg;
    }



}

import { Component, OnInit,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-ochild',
  templateUrl: './ochild.component.html',
  styleUrls: ['./ochild.component.css']
})
export class OchildComponent implements OnInit {

  @Output() messageFromChild = new EventEmitter();

   


   constructor(){}
   ngOnInit(): void {
       
   }

   passMessage(msg:string){
    this.messageFromChild.emit(msg);
   }

   clearMessage(){
     this.messageFromChild.emit('');
   }

}

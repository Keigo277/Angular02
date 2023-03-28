import { Component,OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-ob-parent',
  templateUrl: './ob-parent.component.html',
  styleUrls: ['./ob-parent.component.css']
})
export class ObParentComponent implements OnInit {

   eventsSubject: Subject<string> = new Subject();
    text = ""
    constructor(){};
    ngOnInit(): void {
        
    }

    onAction(text:string){
      this.eventsSubject.next(text);
    }
   
}

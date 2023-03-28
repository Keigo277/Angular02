import { Component,OnInit,Input } from '@angular/core';
import { Subscription,Observable } from 'rxjs';

@Component({
  selector: 'app-ob-child',
  templateUrl: './ob-child.component.html',
  styleUrls: ['./ob-child.component.css']
})
export class ObChildComponent implements OnInit{

  @Input() events!: Observable<string>;

  private eventSubscription!: Subscription;

  message!: string;

  constructor(){}
  ngOnInit(): void {
      this.eventSubscription = this.events.subscribe(
        (test)=>(this.message=test)
      )
  }
  
  ngOnDestroy() {
    // ページ遷移する際に購読を停止
    this.eventSubscription.unsubscribe();
  }

}

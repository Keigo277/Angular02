import { Component,OnInit,Input } from '@angular/core';
import { User } from 'src/main';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit{

      @Input()
  user!: User;


      constructor(){}
      ngOnInit(): void {
          
      }


}

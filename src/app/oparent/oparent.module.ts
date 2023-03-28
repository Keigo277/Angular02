import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OparentComponent } from './oparent.component';
import { OchildModule } from '../ochild/ochild.module';


@NgModule({
  declarations: [OparentComponent],
  imports: [
    CommonModule,
    OchildModule,
    
  ],
  exports:[
    OparentComponent,
  ]
})
export class OparentModule { }

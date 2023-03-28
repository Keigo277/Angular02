import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OchildComponent } from './ochild.component';




@NgModule({
  declarations: [OchildComponent],
  imports: [
    CommonModule
  ],
  exports:[
    OchildComponent,
  ]
})
export class OchildModule { }

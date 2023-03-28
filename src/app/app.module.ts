import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OchildModule } from './ochild/ochild.module';
import { OparentModule } from './oparent/oparent.module';
import { UsersComponent } from './users/users.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { FormsModule } from '@angular/forms';
import { QRCodeModule } from 'angularx-qrcode';
// import { QrDataModule } from './qr-data/qr-data.module';
import { QrDataComponent } from './qr-data/qr-data.component';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { Comp3Component } from './comp3/comp3.component';
import { ObParentComponent } from './ob-parent/ob-parent.component';
import { ObChildComponent } from './ob-child/ob-child.component';
// import { OchildComponent } from './ochild/ochild.component';
// import { OparentComponent } from './oparent/oparent.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserDetailComponent,
    QrDataComponent,
    Comp1Component,
    Comp2Component,
    Comp3Component,
    ObParentComponent,
    ObChildComponent,
    // QrCodeComponent,
    // OparentComponent,
    // OchildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OchildModule,
    OparentModule,
    FormsModule,
    QRCodeModule,
    // QrDataModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {routing,appRoutingProviders} from './app.routing';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SingInComponent } from './components/sing-in/sing-in.component';
import { ClientComponent } from './components/client/client.component';
import { CreditComponent } from './components/credit/credit.component';
import { ErrorComponent } from './components/error/error.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule} from '@angular/material/menu';
import { MatSidenavModule} from '@angular/material/sidenav';
import { PaymentsComponent } from './components/payments/payments.component';



@NgModule({
  declarations: [
    AppComponent,
    SingInComponent,
    ClientComponent,
    CreditComponent,
    ErrorComponent,
    PaymentsComponent
  ],
  imports: [
    BrowserModule,
    routing,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

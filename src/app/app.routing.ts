import { ModuleWithProviders } from "@angular/core";
import { Routes,RouterModule, Router } from "@angular/router";

import { SingInComponent } from "./components/sing-in/sing-in.component";
import { ErrorComponent } from "./components/error/error.component";
import { ClientComponent } from './components/client/client.component';
import { CreditComponent } from './components/credit/credit.component';
import { PaymentsComponent } from './components/payments/payments.component';

const appRoutes: Routes=[
  {path: '', component: SingInComponent},
  {path: 'Client', component: ClientComponent},
  {path: 'Credit', component: CreditComponent},
  {path: 'Payment', component: PaymentsComponent},
  {path: '**', component: SingInComponent}
];

export const appRoutingProviders: any[]=[];
export const routing: ModuleWithProviders<any>=RouterModule.forRoot(appRoutes);
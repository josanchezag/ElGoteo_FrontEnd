import { ModuleWithProviders } from "@angular/core";
import { Routes,RouterModule, Router } from "@angular/router";

import { SingInComponent } from "./components/sing-in/sing-in.component";
import { ErrorComponent } from "./components/error/error.component";

const appRoutes: Routes=[
  {path: '', component: SingInComponent},
  {path: 'SingInComponent', component: SingInComponent},
  {path: '**', component: ErrorComponent}
];

export const appRoutingProviders: any[]=[];
export const routing: ModuleWithProviders<any>=RouterModule.forRoot(appRoutes);
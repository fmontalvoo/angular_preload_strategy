import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CuatroCeroCuatroComponent } from './cuatro-cero-cuatro-component/cuatro-cero-cuatro.component';

const routes: Routes = [
  {
    path: '',
    component: CuatroCeroCuatroComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CuatroCeroCuatroRoutingModule { }

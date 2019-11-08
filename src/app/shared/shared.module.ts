import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { InicioComponent } from '../pages/inicio/inicio-component/inicio.component';
import { UsuarioComponent } from '../pages/usuario/usuario-component/usuario.component';
import { DetalleUsuarioComponent } from '../pages/detalle-usuario/detalle-usuario-component/detalle-usuario.component';
import { CuatroCeroCuatroComponent } from '../pages/errors/cuatro-cero-cuatro/cuatro-cero-cuatro-component/cuatro-cero-cuatro.component';

import { UsuarioService } from '../services/usuario/usuario.service';



@NgModule({
  declarations: [InicioComponent, UsuarioComponent, DetalleUsuarioComponent, CuatroCeroCuatroComponent],
  imports: [
    CommonModule, RouterModule
  ],
  exports: [CommonModule, RouterModule, InicioComponent, UsuarioComponent, DetalleUsuarioComponent, CuatroCeroCuatroComponent]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [UsuarioService]
    };
  }
}

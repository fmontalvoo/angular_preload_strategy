import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PreloadStrategyService } from './services/preload/preload-strategy.service';

const routes: Routes = [
  {
    path: 'inicio',
    loadChildren: './pages/inicio/inicio.module#InicioModule',
    data: { preload: false }
  },
  {
    path: 'usuarios',
    loadChildren: './pages/usuario/usuario.module#UsuarioModule',
    data: { preload: true }
  },
  {
    path: 'usuario',
    loadChildren: './pages/detalle-usuario/detalle-usuario.module#DetalleUsuarioModule',
    data: { preload: true }
  },
  {
    path: '404',
    loadChildren: './pages/errors/cuatro-cero-cuatro/cuatro-cero-cuatro.module#CuatroCeroCuatroModule',
    data: { preload: true }
  },
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '404',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    enableTracing: true, // <-- debugging purposes only
    preloadingStrategy: PreloadStrategyService
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

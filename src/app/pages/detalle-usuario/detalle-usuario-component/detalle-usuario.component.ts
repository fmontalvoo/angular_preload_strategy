import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detalle-usuario',
  templateUrl: './detalle-usuario.component.html',
  styleUrls: ['./detalle-usuario.component.css']
})
export class DetalleUsuarioComponent implements OnInit {

  usuario: any;

  constructor(private _route: ActivatedRoute,
    private _router: Router,
    private _service: UsuarioService) {
    this._route.params.subscribe(param => {
      this.usuario = this._service.retornaUsuario(param['id']);
      if (this.usuario == 404)
        this.goto404();
    });
  }

  ngOnInit() {
  }

  goto404() {
    this._router.navigate(['/404']);
  }

}

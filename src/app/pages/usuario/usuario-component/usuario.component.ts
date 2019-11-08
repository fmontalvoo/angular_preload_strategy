import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  usuarios: Array<any>;

  constructor(private _service: UsuarioService) {
    this.usuarios = _service.retornaUsuarios();
  }

  ngOnInit() {
  }

}

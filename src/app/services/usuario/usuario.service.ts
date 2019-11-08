import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  usuarios: Array<any> = [
    {
      id: 1,
      nombre: "Fulano",
      edad: 21,
      descripcion: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste vero debitis dicta laborum. Earum laboriosam recusandae esse reprehenderit nesciunt repellat, error impedit vel exercitationem ipsam doloremque ducimus dolorem cumque quidem.'
    },
    {
      id: 2,
      nombre: "Alguien",
      edad: 28,
      descripcion: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem vero, hic nam, velit sint atque praesentium obcaecati tempora in dignissimos fugiat a tenetur ea. Dolor, obcaecati quisquam. In, a esse!'
    },
    {
      id: 3,
      nombre: "Desconocido",
      edad: "???",
      descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quas voluptatum fuga adipisci dolor quisquam corporis quod pariatur praesentium molestias eligendi, repellendus asperiores eum tempore laboriosam tenetur earum itaque? Quas.'
    }
  ];

  constructor() { }

  retornaUsuarios() {
    return this.usuarios;
  }

  retornaUsuario(id) {
    let aux = 404;
    this.usuarios.forEach(usuario => {
      if (usuario.id == id)
        aux = usuario;
    });
    return aux;
  }
}

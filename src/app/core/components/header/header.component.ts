import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { AsyncPipe, CommonModule } from '@angular/common';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterOutlet,RouterModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  menuEsVisible = false;

  menuItems = [
    { label: 'Inicio', link: '#' },
    { label: 'Productos',
      subMenu: [
        { label: 'Producto 1', link: '#' },
        { label: 'Producto 2', link: '#' },
        { label: 'Producto 3', link: '#' }
      ]
    },
    { label: 'Servicios',
      subMenu: [
        { label: 'Servicio 1', link: '#' },
        { label: 'Servicio 2', link: '#' },
        { label: 'Servicio 3', link: '#' }
      ]
    },
    { label: 'Contacto', link: '#' }
  ];

  expandedMenuItems: { [key: number]: boolean } = {};

  toggleSubMenu(index: number): void {
    this.expandedMenuItems[index] = !this.expandedMenuItems[index];
    console.log(this.expandedMenuItems[index]);
  }
}

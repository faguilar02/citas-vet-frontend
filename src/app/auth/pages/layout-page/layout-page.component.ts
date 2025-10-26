import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

interface ButtonsValue {
  value: string;
  route: string;
}
@Component({
  selector: 'app-layout-page',
  standalone: true,
  imports: [RouterOutlet, NgClass, RouterLink],
  templateUrl: './layout-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutPage {
  activeButton = signal<string>('Iniciar Sesión');

  buttons: ButtonsValue[] = [
    {
      value: 'Iniciar Sesión',
      route: '/auth/login',
    },
    {
      value: 'Registrarse',
      route: '/auth/register',
    },
  ];

  setButtonValue(value: string) {
    this.activeButton.set(value);
  }
}

import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  effect,
  inject,
  signal,
} from '@angular/core';
import {
  RouterOutlet,
  RouterLink,
  Router,
  NavigationEnd,
} from '@angular/router';
import { filter } from 'rxjs';

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
  router = inject(Router);

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

  activeButton = signal<string>('Iniciar Sesión');

  constructor() {
    this.updateActiveButton(this.router.url);

    this.router.events
      .pipe(
        filter(
          (event): event is NavigationEnd => event instanceof NavigationEnd
        )
      )
      .subscribe((event) => {
        this.updateActiveButton(event.urlAfterRedirects);
      });
  }

  private updateActiveButton(url: string): void {
    if (url.includes('/auth/login')) {
      this.activeButton.set('Iniciar Sesión');
    } else if (url.includes('/auth/register')) {
      this.activeButton.set('Registrarse');
    }
  }

  setButtonValue(value: string) {
    this.activeButton.set(value);
  }
}

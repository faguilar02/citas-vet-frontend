import { Component, inject, OnInit, signal } from '@angular/core';
import { NgClass } from '@angular/common';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { filter, Subscription } from 'rxjs';

type ButtonSelected = 'Nosotros' | 'Servicios' | 'Contacto' | 'Reseñas' | '';

@Component({
  selector: 'landing-navbar',
  standalone: true,
  imports: [NgClass, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export default class NavbarComponent implements OnInit {
  private router = inject(Router);
  private subscription!: Subscription;

  public buttonSelected = signal<ButtonSelected>('');

  ngOnInit(): void {
    this.subscription = this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        if (event.url !== '/') this.buttonSelected.set('');
      });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import NavbarComponent from '../../shared/navbar/navbar.component';

@Component({
  standalone: true,
  imports: [RouterOutlet,NavbarComponent ],
  templateUrl: './public-page.component.html',
  styles: ``
})
export default class PublicPageComponent {

}

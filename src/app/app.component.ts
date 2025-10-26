import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Heart, LucideAngularModule, PawPrint, Stethoscope } from 'lucide-angular';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LucideAngularModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'citas-vet-front';
  readonly pawPrint = PawPrint;
  readonly heart = Heart;
  readonly stethoscope = Stethoscope;
}

import { Component, output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ArrowBigRight, ArrowRight, Calendar, Clock4, Heart, LucideAngularModule, MoveRight, PawPrint, Star, Stethoscope } from 'lucide-angular';

@Component({
  standalone: true,
  imports: [RouterLink, LucideAngularModule],
  templateUrl: './landing-page.component.html',
  styles: ``,
})
export default class HomePageComponent {
  readonly pawPrint = PawPrint;
  readonly heart = Heart
  readonly stethoscope = Stethoscope
  readonly star = Star
  readonly calendar = Calendar
  readonly arrow = ArrowRight
  readonly clock = Clock4
}

import { Component, computed, inject } from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  standalone: true,
  imports: [],
  templateUrl: './onboarding.component.html',
  styles: ``
})
export default class OnboardingComponent {

  public authService = inject(AuthService)
  public user = computed( () => this.authService.currentUser())
}

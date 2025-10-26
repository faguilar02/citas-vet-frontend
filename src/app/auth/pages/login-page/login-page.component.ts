import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { NgClass } from '@angular/common';
import { Lock, LucideAngularModule, Mail, User } from 'lucide-angular';

@Component({
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, NgClass, LucideAngularModule],
  templateUrl: './login-page.component.html',
  styles: ``,
})
export default class LoginPageComponent {
  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  private router = inject(Router);

  readonly user = User
  readonly mail = Mail
  readonly lock = Lock

  public myForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  login() {}
}

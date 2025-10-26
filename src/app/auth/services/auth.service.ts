import { computed, inject, Injectable, signal } from '@angular/core';
import { environment } from '../../../environments/environments';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, tap, throwError } from 'rxjs';
import { LoginResponse } from '../interfaces/login-response';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly baseUrl: string = environment.baseUrl;
  private http = inject(HttpClient);
  private _currentUser = signal<any>(null);
  public currentUser = computed ( () => this._currentUser())

  constructor() {}

  private setValidAuthentication(token: string) {
    localStorage.setItem('token', token);
    return true;
  }

  login(email: string, password: string): Observable<boolean> {
    const body = { email, password };
    const url = `${this.baseUrl}/auth/login`;

    return this.http.post<LoginResponse>(url, body).pipe(
      tap((response) => this._currentUser.set(response)),
      map(({ token }) => this.setValidAuthentication(token)),
      catchError((err) => throwError(() => err.error.message))
    );
  }
}

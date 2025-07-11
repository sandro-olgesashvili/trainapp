import { Component } from '@angular/core';
import { AuthService } from '../../../core/auth/auth.service';
import { Router, RouterLink } from '@angular/router';
import { LoginRequest } from '../../../core/models/auth.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  username = '';
  password = '';
  error: string | null = null;

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    const request: LoginRequest = {
      username: this.username,
      password: this.password,
    };

    this.authService.login(request).subscribe({
      next: () => {
        this.router.navigate(['/trains']);
      },
      error: () => {
        this.error = 'Invalid credentials. Please try again.';
      },
    });
  }
}

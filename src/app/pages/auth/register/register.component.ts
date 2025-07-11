import { Component } from '@angular/core';
import { AuthService } from '../../../core/auth/auth.service';
import { Router, RouterLink } from '@angular/router';
import { RegisterRequest } from '../../../core/models/auth.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  username = '';
  password = '';
  error: string | null = null;

  constructor(private authService: AuthService, private router: Router) {}

  register() {
    const request: RegisterRequest = {
      username: this.username,
      password: this.password,
    };

    this.authService.register(request).subscribe({
      next: () => {
        this.router.navigate(['/trains']);
      },
      error: (err) => {
        this.error = 'Username already taken';
      },
    });
  }
}

import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { TrainService } from '../../../core/services/train.service';
import { AdminService } from '../../../core/services/admin.service';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-train',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputTextModule,
    InputNumberModule,
    ButtonModule,
  ],
  templateUrl: './add-train.component.html',
  styleUrl: './add-train.component.css',
})
export class AddTrainComponent {
  trainForm: FormGroup;
  router = inject(Router);

  constructor(private fb: FormBuilder, private adminService: AdminService) {
    this.trainForm = this.fb.group({
      name: ['', Validators.required],
      source: ['', Validators.required],
      destination: ['', Validators.required],
      totalSeats: [1, [Validators.required, Validators.min(1)]],
    });
  }

  onSubmit() {
    if (this.trainForm.invalid) return;

    this.adminService.addTrain(this.trainForm.value).subscribe({
      next: () => {
        this.trainForm.reset({ totalSeats: 1 });
        this.router.navigate(['trains']);
      },
      error: () => {},
    });
  }
}

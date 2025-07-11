import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

import {
  TrainResponse,
  TrainSearchRequest,
} from '../../core/models/train.model';
import { TrainService } from '../../core/services/train.service';
import { BookingService } from '../../core/services/booking.service';
@Component({
  selector: 'app-trains',
  imports: [
    CommonModule,
    FormsModule,
    TableModule,
    InputTextModule,
    ButtonModule,
    DialogModule,
    DropdownModule,
    ToastModule,
  ],
  providers: [MessageService],
  templateUrl: './trains.component.html',
  styleUrl: './trains.component.css',
})
export class TrainsComponent implements OnInit {
  ngOnInit(): void {
    this.searchTrains();
  }

  source = '';
  destination = '';
  trains: TrainResponse[] = [];

  displayDialog = false;
  selectedTrain: TrainResponse | null = null;
  availableSeats: { label: string; value: number }[] = [];
  selectedSeat: { label: string; value: number } | null = null;

  constructor(
    private trainService: TrainService,
    private bookingService: BookingService
  ) {}

  searchTrains() {
    const req: TrainSearchRequest = {
      source: this.source,
      destination: this.destination,
    };

    this.trainService.searchTrains(req).subscribe({
      next: (data) => (this.trains = data),
      error: (err) => console.error(err),
    });
  }

  openBookingDialog(train: TrainResponse) {
    this.selectedTrain = train;
    this.displayDialog = true;
    this.selectedSeat = null;

    const seats = Array.from({ length: train.totalSeats }, (_, i) => i + 1);
    const available = seats.filter((seat) => !train.bookedSeats.includes(seat));
    this.availableSeats = available.map((seat) => ({
      label: `Seat ${seat}`,
      value: seat,
    }));
    this.availableSeats.unshift({ label: 'Random Seat', value: 0 });
  }

  bookSeat() {
    if (!this.selectedTrain || !this.selectedSeat) return;

    this.bookingService
      .bookSeat(this.selectedTrain.id, this.selectedSeat.value)
      .subscribe({
        next: () => {
          this.displayDialog = false;
          this.searchTrains();
        },
        error: () => {},
      });
  }
}

import { Component } from '@angular/core';
import { BookingResponse } from '../../../core/models/booking.model';
import { AdminService } from '../../../core/services/admin.service';
import { Observable } from 'rxjs';
import { AsyncPipe, CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-view-bookings',
  imports: [CommonModule, AsyncPipe, TableModule],
  templateUrl: './view-bookings.component.html',
  styleUrl: './view-bookings.component.css',
})
export class ViewBookingsComponent {
  bookings!: Observable<BookingResponse[]>;
  constructor(private adminService: AdminService) {
    this.bookings = adminService.getBookings();
  }
}

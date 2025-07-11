import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BookingResponse } from '../models/booking.model';

@Injectable({
  providedIn: 'root',
})
export class BookingService {
  private readonly apiUrl = 'http://localhost:5178/api/User/';

  constructor(private http: HttpClient) {}

  bookSeat(trainId: string, seatNumber: number): Observable<any> {
    return this.http.post(`${this.apiUrl}book`, {
      trainId: trainId,
      seatNumber: seatNumber,
    });
  }

  getUserBookings(): Observable<BookingResponse[]> {
    return this.http.get<BookingResponse[]>(`${this.apiUrl}bookings`);
  }
}

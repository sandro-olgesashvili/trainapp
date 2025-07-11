import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BookingResponse } from '../models/booking.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  private apiUrl = 'http://localhost:5178/api/Admin/';
  constructor(private http: HttpClient) {}

  getBookings(): Observable<BookingResponse[]> {
    return this.http.get<BookingResponse[]>(`${this.apiUrl}bookings`);
  }

  addTrain(train: {
    name: string;
    source: string;
    destination: string;
    totalSeats: number;
    availableSeats: number;
  }): Observable<any> {
    return this.http.post(`${this.apiUrl}trains`, train);
  }
}

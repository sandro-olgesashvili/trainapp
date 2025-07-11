export interface BookingRequest {
  trainId: string;
  seatNumber: number;
}

export interface BookingResponse {
  bookingId: string;
  trainName: string;
  source: string;
  destination: string;
  seatNumber: number;
  bookingDate: string;
}

export interface TrainResponse {
  id: string;
  name: string;
  source: string;
  destination: string;
  totalSeats: number;
  availableSeats: number;
  bookedSeats: number[];
}

export interface TrainSearchRequest {
  source: string;
  destination: string;
}

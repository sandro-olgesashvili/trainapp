import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TrainResponse, TrainSearchRequest } from '../models/train.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TrainService {
  private readonly apiUrl = 'http://localhost:5178/api/User/search';

  constructor(private http: HttpClient) {}

  searchTrains(request: TrainSearchRequest): Observable<TrainResponse[]> {
    return this.http.post<TrainResponse[]>(`${this.apiUrl}`, request);
  }
}

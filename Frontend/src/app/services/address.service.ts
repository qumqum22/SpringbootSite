import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Address } from '../models/address';

@Injectable({
  providedIn: 'root'
})

export class AddressService {


  private apiServerUrl = environment.apiBaseUrl;
  
  constructor(private http:HttpClient) { }

  getAddresses(userId: number):Observable<Address[]> {
    return this.http.get<Address[]>(`${this.apiServerUrl}/addresses/${userId}`).pipe(
      tap(console.log)
  );
  }

}

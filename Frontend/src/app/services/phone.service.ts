import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Phone } from '../models/phone';

@Injectable({
  providedIn: 'root'
})

export class PhoneService {

  private apiServerUrl = environment.apiBaseUrl;
  
  constructor(private http:HttpClient) { }

  public getPhones(userId: number):Observable<Phone[]> {
    return this.http.get<Phone[]>(`${this.apiServerUrl}/phones/${userId}`).pipe(
        tap(console.log)
    );
}
  public deletePhone(phoneId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/phones/delete/${phoneId}`);
  }

  public addPhone(user_id:number, phone: Phone ):Observable<Phone> {
    return this.http.post<Phone>(`${this.apiServerUrl}/phones/add/${user_id}`, phone);
  }
}

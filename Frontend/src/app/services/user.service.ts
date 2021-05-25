import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    private apiServerUrl = environment.apiBaseUrl;

    constructor(private http:HttpClient) {
    }

    public getUsers():Observable<User[]> {
        
        return this.http.get<User[]>(`${this.apiServerUrl}/users`).pipe(
            tap(console.log)
        );
    }

    public getUser(id: number):Observable<User> {
        
        return this.http.get<User>(`${this.apiServerUrl}/users/${id}`).pipe(
            tap(console.log)
        );
    }

    public addUser(user: User):Observable<User> {
        return this.http.post<User>(`${this.apiServerUrl}/users/add`, user);
    }

    public updateUser(user: User):Observable<User> {
        return this.http.put<User>(`${this.apiServerUrl}/users/update`, user);
    }

    public deleteUser(userId: number): Observable<void> {
        return this.http.delete<void>(`${this.apiServerUrl}/users/delete/${userId}`);
    }
}
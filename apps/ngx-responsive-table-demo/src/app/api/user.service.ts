import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User, UserResponse } from './user.model';
import { delay, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly baseUrl = 'https://reqres.in/api/users?page=2&per_page=5';

  constructor(private readonly httpClient: HttpClient) {}

  users$: Observable<User[]> = this.httpClient
    .get<UserResponse>(this.baseUrl)
    .pipe(
      map(({ data }: UserResponse) => data ?? []),
      delay(3000)
    );
}

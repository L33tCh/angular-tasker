import { Injectable } from '@angular/core';
import { Observable, pipe } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private _http: HttpClient) { }

  public test(): Observable<any> {
    return this._http.get<any>(environment.routes.apiUrl + 'test/')
      pipe(
        map((res: any) => {
          setTimeout(() => {
            return res;
            }, 1000);
        }));
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService<T> {
  constructor(
    private http: HttpClient,
  ) { }

  async get<T>(url: string) {
    const authHeader: { headers: HttpHeaders } = await this.getHeaders() as { headers: HttpHeaders };

    return this.http.get<T>(url, authHeader).toPromise<T>()
      .then(res => {
        return res;
      })
      .catch(err => {
        return Promise.reject(err.error);
      });
  }

  async post<T>(url: string, model: T) {
    const authHeader: { headers: HttpHeaders } = await this.getHeaders() as { headers: HttpHeaders };

    return this.http.post<T>(url, model).toPromise<T>()
      .then(res => {
        return res;
      })
      .catch(err => {
        return Promise.reject(err.error);
      });
  }

  async put<T>(url: string, model: T) {
    const authHeader: { headers: HttpHeaders } = await this.getHeaders() as { headers: HttpHeaders };

    return this.http.put<T>(url, model, authHeader).toPromise<T>()
      .then(res => {
        return res;
      })
      .catch(err => {
        return Promise.reject(err.error);
      });
  }

  private async getHeaders(): Promise<{ headers: HttpHeaders }> {
    const token = '';

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    return { headers };
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }
}
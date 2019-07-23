import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse, HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from './../../../environments/environment';

const API_DOMAIN = environment.api;

export const ENDPOINT = {
  users: 'users',
  events: 'events'
};

@Injectable()
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

  /**
   * Get api
   * @param url : path from ENDPOINT
   * @param params : ex: {key: value}
   */
  get(url: string, params?: any): Promise<any> {
    return this.http.get(API_DOMAIN + url, { params}).pipe(
      catchError(this.handleError)
    ).toPromise();
  }

  /**
   * Post api
   * @param url : path from ENDPOINT
   * @param body : ex: {key: value}
   */
  post(url: string, body?: any): Promise<any> {
    return this.http.post(API_DOMAIN + url, body).pipe(
      catchError(this.handleError)
    ).toPromise();
  }

  /**
   * Put api
   * @param url : path from ENDPOINT
   * @param body : ex: {key: value}
   */
  put(url: string, body?: any): Promise<any> {
    return this.http.put(API_DOMAIN + url, body).pipe(
      catchError(this.handleError)
    ).toPromise();
  }

  /**
   * Patch api
   * @param url : path from ENDPOINT
   * @param body : ex: {key: value}
   */
  patch(url: string, body?: any): Promise<any> {
    return this.http.patch(API_DOMAIN + url, body).pipe(
      catchError(this.handleError)
    ).toPromise();
  }

  /**
   * Get file from assets folder
   * @param url : path from assets folder
   */
  getAssets(url: string): Promise<any> {
    return this.http.get('assets/' + url).pipe(
      catchError(this.handleError)
    ).toPromise();
  }

  /**
   * Get api with full response
   * include: headers, body, ...
   * @param url : string
   * @param params : ex: {key: value}
   */
  getFullRespone(url: string, params?: any): Promise<HttpResponse<any>> {
    return this.http.get(API_DOMAIN + url, {observe: 'response', params}).pipe(
      catchError(this.handleError)
    ).toPromise();
  }

  /**
   * Handle error from Response
   * @param error: any
   */
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  }
}

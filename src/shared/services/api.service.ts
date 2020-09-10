import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap, filter } from 'rxjs/operators';
import * as qs from 'qs';
// import { LocalStorageService } from './local-storage.service';

const API_URL = environment.backendUrl;
@Injectable({
  providedIn: 'root'
})

export class ApiService {
  private extractData(res: Response): any {
    const body = res;
    return body || {};
  }
  constructor(private http: HttpClient,
    // private setUpload: LocalStorageService
  ) { }

  // API: Get /URL
  public get(url, par = null): Observable<any> {
    if (par === null) {
      return this.http.get(API_URL + '/' + url).pipe(map(this.extractData));
    }

    const params = qs.stringify(par);
    return this.http.get(API_URL + '/' + url + '?' + params).pipe(map(this.extractData));
  }

}

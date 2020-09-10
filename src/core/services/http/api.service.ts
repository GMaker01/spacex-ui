import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http';
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
    constructor(private http: HttpClient) { }

    // API: Get /URL
    public get(url: string, params = null): Observable<any> {
        if (params === null) {
            return this.http.get(API_URL + '/' + url).pipe(
                catchError((err: HttpErrorResponse) => {
                    throw err;
                }),
                map(this.extractData)
            );
        }

        params = qs.stringify(params);
        return this.http.get(API_URL + '/' + url + '?' + params).pipe(
            catchError((err: HttpErrorResponse) => {
                throw err;
            }),
            map(this.extractData)
        );
    }

}

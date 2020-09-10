import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
// import { LocalStorageService } from './local-storage.service';
import { Router } from '@angular/router';

// import { NgxSpinnerService } from 'ngx-spinner';
// import { NzMessageService } from 'ng-zorro-antd';


@Injectable()
export class ResponseInterceptor implements HttpInterceptor {
  constructor(
    // private spinner: NgxSpinnerService,
    // private auth: LocalStorageService,
    private router: Router
    // ,
    // private message: NzMessageService
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(map((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse) {
        // this.spinner.hide();
        return event;
      }
    }), catchError(err => {
      // this.spinner.hide();
      if (err.status === 401) {
        // auto logout if 401 response returned from api
        // this.auth.clear();
        this.router.navigateByUrl('/home');
      }
      const error = err.error.message || err.statusText;
      console.log(error);
      // this.message['error'](error);
      return throwError(error);
    }));
  }
}

import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
// import 'rxjs/add/operator/do';
// import { LocalStorageService } from './local-storage.service';
// import { NgxSpinnerService } from 'ngx-spinner';


@Injectable()
export class RequestInterceptor implements HttpInterceptor {
  // constructor(private auth: LocalStorageService, private spinner: NgxSpinnerService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // this.spinner.show();
    const setHeaders: any = {};

    // if (this.auth.get('callApi') !== null) {
    //     this.auth.remove('callApi');
    //     setHeaders = { ...setHeaders, 'content-type': 'application/json' };
    // }
    // if (this.auth.getAuth() !== null) {
    //     setHeaders = { ...setHeaders, 'x-access-token': this.auth.getAuth() };
    // }

    return next.handle(
      req.clone({
        setHeaders
      })
    );
  }
}

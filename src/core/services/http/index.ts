import { RequestInterceptor } from './request.interceptor';
import { ResponseInterceptor } from './response.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

export * from './api.service';
export const INTERCEPTOR_PROVIDERS = [
    { provide: HTTP_INTERCEPTORS, useClass: RequestInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ResponseInterceptor, multi: true },
];

import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from '../home/home.component';
import { INTERCEPTOR_PROVIDERS } from '../../../core/services/http';
import {
    HttpClientModule
} from '@angular/common/http';
import { FilterComponent } from '../../components/filter/filter.component';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        FilterComponent,
        HeaderComponent,
        FooterComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        HttpClientModule,
        NgxSpinnerModule
    ],
    providers: [
        INTERCEPTOR_PROVIDERS
        // { provide: HTTP_INTERCEPTORS, useClass: RequestInterceptor, multi: true },
        //     { provide: HTTP_INTERCEPTORS, useClass: ResponseInterceptor, multi: true },
        // { provide: ErrorHandler, useClass: SentryErrorHandlerService },
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    bootstrap: [AppComponent]
})
export class AppModule { }

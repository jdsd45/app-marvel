import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { ResponseInterceptor } from "./response-interceptor";
import { SecurityInterceptor } from "./security.interceptor";

export const httpInterceptorProviders = [
    {
        provide: HTTP_INTERCEPTORS,
        useClass: SecurityInterceptor,
        multi: true
    },
    {
        provide: HTTP_INTERCEPTORS,
        useClass: ResponseInterceptor,
        multi: true
    }
];
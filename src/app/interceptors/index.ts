import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { MarvelInterceptor } from "./marvel-interceptor";

export const httpInterceptorProviders = [
    {
        provide: HTTP_INTERCEPTORS,
        useClass: MarvelInterceptor,
        multi: true
    }
];
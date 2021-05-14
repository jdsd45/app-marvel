import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Md5 } from 'ts-md5';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable()
export class SecurityInterceptor implements HttpInterceptor {

    private timeStamp: string = '';
    private hash: any;

    intercept(originalReq: HttpRequest<any>, next: HttpHandler) {

        this.generateTimeStamp();
        this.generateHash(environment.apiPublicKey, environment.apiPrivateKey);
        const req = originalReq.clone({
            params: originalReq.params.appendAll({
                apikey: environment.apiPublicKey,
                ts: this.timeStamp,
                hash: this.hash
            })
        });

        return next.handle(req)
    }

    /**
     * Génère le hash pour accéder à l'API
     * @param publicKey 
     * @param privateKey // TODO - ne doit pas être côté front
     */
    generateHash(publicKey: string, privateKey: string): void {
        const strToHash: string = this.timeStamp + privateKey + publicKey;
        this.hash = Md5.hashStr(strToHash);
    }

    /**
     * Génère un Timestamp
     */
    generateTimeStamp(): void {
        this.timeStamp = Date.now().toString();
    }


}

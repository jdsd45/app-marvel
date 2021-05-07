import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from 'rxjs/operators';
import { environment } from "src/environments/environment";
import { Md5 } from "ts-md5";


@Injectable()
export class MarvelInterceptor implements HttpInterceptor {

    private publicKey: string = 'a5a0013bca6f119629675f89e7518ecf';
    private privateKey: string = '55b06e4d4d03a3a8984f853abf90e18b967a8e03';
    private timeStamp: string = '';
    private hash: any;


    intercept(originalReq: HttpRequest<any>, next: HttpHandler) {

        this.generateTimeStamp();
        this.generateHash(this.publicKey, this.privateKey);
        const req = originalReq.clone({
            params: originalReq.params.appendAll({
                apikey: this.publicKey,
                ts: this.timeStamp,
                hash: this.hash
            })
        });

        return next.handle(req).pipe(
            map((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {
                    return event.clone({
                        body: event.body.data.results
                    })
                }
                return event;
            })
        );
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

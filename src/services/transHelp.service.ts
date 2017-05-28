
import { TranslateService } from "@ngx-translate/core";
import { Injectable } from "@angular/core";

@Injectable()
export class TransHelpService {

    constructor(  private translate: TranslateService){}

    get(key): string {
        let value= '';
        let valTrObsrv=this.translate.get(key);
        valTrObsrv.subscribe(val=>value=val);
        return value;
    }

}
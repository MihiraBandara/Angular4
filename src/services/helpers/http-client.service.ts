import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { GlobalItems } from '../../utilities/index';
import { LocalStorageService } from './local-storage.service';


@Injectable()
export class HttpClientService {

    private _localStorage: LocalStorageService;

    constructor(private http: Http) {
        this._localStorage = new LocalStorageService();
    }

    get(url: string): Observable<any> {
        const options = this._getAuthOptions();
        const apiEndPointUrl = GlobalItems.API_ENDPOINT + url;
        return this.http.get(apiEndPointUrl, options).map(res => res.json());
    }

    post(url: string, data: any): Observable<any> {
        const apiEndPointUrl = GlobalItems.API_ENDPOINT + url;
        const options = this._getAuthOptions();
        return this.http.post(apiEndPointUrl, data, options).map(res => res.json());
    }

    put(url: string, data: any): Observable<any> {
        const options = this._getAuthOptions();
        const apiEndPointUrl = GlobalItems.API_ENDPOINT + url;
        return this.http.put(apiEndPointUrl, data, options).map(res => res.text() ? res.json() : res);
    }

    delete(url: string): Observable<any> {
        const options = this._getAuthOptions();
        const apiEndPointUrl = GlobalItems.API_ENDPOINT + url;
        return this.http.delete(apiEndPointUrl, options).map(res => res.json());
    }

    private _getAuthOptions(): RequestOptions {

        const headers = new Headers({ 'Accept': 'application/json' });
        const ACCESS_TOKEN: string = window.sessionStorage.getItem('access_token');
        if (ACCESS_TOKEN) {
            headers.append('Authorization', 'Bearer ' + ACCESS_TOKEN);
        }

        headers.append('Content-Type', 'application/json');
        const options = new RequestOptions({ headers: headers });
        return options;
    }
}


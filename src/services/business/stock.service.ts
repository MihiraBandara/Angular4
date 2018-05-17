import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { HttpClientService } from '../helpers/index';

/**
 * The StockService which includes client side stock service
 * implementation.
 *
 * @summary StockService class.
 *
 * @classdesc implement the stock service.
 */
@Injectable()
export class StockService {
    private _httpAuthClient: HttpClientService;
    private _controller = 'api/stocks';

    constructor(private http: Http) {
        this._httpAuthClient = new HttpClientService(http);
    }

    /**
    * saving the stock data.
    * @param {stock} [stockInfo] - stock object that want to save.
    */
    SaveStock(stockInfo: any): Observable<any> {
        return this._httpAuthClient.post(this._controller, stockInfo).map(res => {
        });
    }

}

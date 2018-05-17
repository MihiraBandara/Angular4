import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { HttpClientService } from '../helpers/index';

/**
 * The ProductService which includes client side product service
 * implementation.
 *
 * @summary ProductService.
 *
 * @classdesc implement the project service.
 */
@Injectable()
export class ProductService {
    private _httpAuthClient: HttpClientService;
    private _controller = 'api/products';

    constructor(private http: Http) {
        this._httpAuthClient = new HttpClientService(http);
    }

    /**
    * saving the product data.
    * @param {product} [productInfo] - product object that want to save.
    */
    SaveProduct(productInfo: any): Observable<any> {
        return this._httpAuthClient.post(this._controller, productInfo).map(res => {
            productInfo.productName = res.productName;
        });
    }

    /**
    * updating the product data.
    * @param {product} [productInfo] - product object that want to update.
    */
    UpdateProduct(productInfo: any): Observable<any> {
        return this._httpAuthClient.put(this._controller, productInfo).map(res => {
            productInfo.productName = res.productName;
        });
    }

    /**
    * get all products list.
    */
    getAllProducts(): Observable<any> {
        return this._httpAuthClient.get(this._controller).map(res => res);
    }

    /**
    * get product details by id.
    */
    getProductData(id: number): Observable<any> {
        return this._httpAuthClient.get(this._controller + '/GetById?id=' + id).map(res => res);
    }
}

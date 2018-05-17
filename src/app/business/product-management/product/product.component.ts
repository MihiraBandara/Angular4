import { Component, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/table';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from '../../../../services/business/index';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import { NgForm } from '@angular/forms';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { GlobalItems } from '../../../../utilities/global-items';


@Component({
  selector: 'app-create-project',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ProductService]
})

/**
 * The product component which includes details
 * of the product
 *
 * @summary product component class.
 *
 * @classdesc This includes product implementation.
 */

export class ProductComponent implements OnInit {

  product: any = {};
  isInEditView = false;
  isEditTissueTypeFormVisible = true;

  constructor(
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private _productService: ProductService) { }

  ngOnInit() {
    this._initializeProduct();
    this._activatedRoute.params.subscribe(params => {
      const CURRENT_PRODUCT_OPERATION = params['operation'];
      const CURRENT_PRODUCT_ID = params['id'];
      if (CURRENT_PRODUCT_ID === 'new') {
      }
      if (CURRENT_PRODUCT_OPERATION === 'edit') {
        this._initializeProductEdit(CURRENT_PRODUCT_ID);
      }
    });
  }

  /**
   * initializing the product object.
   */
  private _initializeProduct(): any {
    this.product.productId = 0;
    this.product.guid = '';
    this.product.productName = '';
    this.product.ingrediants = '';
    this.product.descriptions = '';
    this.product.quantity = 0;
  }

  /**
   * saving the product object
   */
  saveProduct() {

    const PRODUCT_DETAILS = {

      'productId': this.product.productId,
      'productName': this.product.productName,
      'ingrediants': this.product.ingrediants,
      'descriptions': this.product.descriptions,
      'quantity': this.product.quantity,
    };

    if (PRODUCT_DETAILS.productId === 0) {
      this._productService.SaveProduct(PRODUCT_DETAILS).subscribe(res => {
        window.open(GlobalItems.WEB_APP_URL + '/business/product-management/product-index', '_self');
      }, error => {
      });
    } else {
      this._productService.UpdateProduct(PRODUCT_DETAILS).subscribe(res => {
        window.open(GlobalItems.WEB_APP_URL + '/business/product-management/product-index', '_self');
      }, error => {
      });

    }
  }

  /**
   * initializing the product edit view.
   * @param {number} id - product id.
   */
  private _initializeProductEdit(id: number): any {
    this.isInEditView = true;
    this._getProductData(id);
  }

  /**
   * initializing the product edit view.
   * @param {number} id - product id.
   */
  private _getProductData(id: number): any {
    this._productService.getProductData(id).subscribe(res => {
      this.product.productId = res.productId;
      this.product.productName = res.productName;
      this.product.ingrediants = res.ingrediants;
      this.product.descriptions = res.descriptions;
      this.product.quantity = res.quantity;
    }, error => {
    });
  }
}

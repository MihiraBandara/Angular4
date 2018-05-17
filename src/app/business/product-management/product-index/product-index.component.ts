import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { DataSource } from '@angular/cdk/table';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import { CdkTableModule } from '@angular/cdk/table';
import { ProductService } from '../../../../services/business/index';
import { TableDatabase, TableDataSource } from '../../../../utilities/table-data-manager';
import { NgClass } from '@angular/common';
import { GlobalItems } from '../../../../utilities/global-items';

@Component({
  selector: 'app-project-index',
  templateUrl: './product-index.component.html',
  styleUrls: ['./product-index.component.css'],
  providers: [ProductService]
})

/**
 * The product-index component which includes details
 * of the product-index.
 *
 * @summary product-indexcomponent class.
 *
 * @classdesc This includes product-index implementation.
 */
export class ProductIndexComponent implements OnInit {

  displayedColumns = ['productId', 'productName', 'quantity', 'ingrediants', 'descriptions', 'label'];
  productsDatabase: any;
  dataSource: TableDataSource | null;
  GET_PRODUCTS: any= [];
  product: any = {};
  products: any = {};

  constructor(private _productService: ProductService) {
    this._productService.getAllProducts();
  }

  ngOnInit() {
    this.getAllProducts();
    this._initializeProduct();
  }

  /**
   * get all product list.
   */
  private getAllProducts(): any {
    this._productService.getAllProducts().subscribe(res => {
      for (let i = 0; i < res.length; i++) {
        res.recievedDate = Date.now();
        res.LastUpdatedDate = Date.now();
      }
      this.productsDatabase = new TableDatabase(res);
      this.dataSource = new TableDataSource(this.productsDatabase);
    }, error => { });
  }

  /**
   * initializing the product object
   */
  private _initializeProduct(): any {
    this.products = [];
    this.product.id = 0;
    this.product.guid = '';
    this.product.projectName = '';

    this.product.recievedDate = '';
    this.product.lastUpdatedDate = '';
    this.product.institutionProjectRefNumber = '';
    this.product.totalNumberofSlides = 0;
    this.product.projectStatus = 0;
  }

  /**
   * navigating to the create product page.
   */
  gotoCreateProduct(): any {
    window.open(GlobalItems.WEB_APP_URL + '/business/product-management/product/new/0', '_self');
 }
}

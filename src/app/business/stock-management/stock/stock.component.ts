import { Component, OnInit } from '@angular/core';
import { Headers, RequestOptions } from '@angular/http';
import { GlobalItems } from '../../../../utilities/global-items';
import { ProductService } from '../../../../services/business/index';
import { StockService } from '../../../../services/business/index';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css'],
  providers: [ProductService, StockService]

})

/**
 * The stock component which includes details
 * of the stock
 *
 * @summary stock component class.
 *
 * @classdesc This includes stock implementation.
 */
export class StockComponent implements OnInit {

  product: any = {};
  stock: any = {};
  updatedQuantity = 0;
  productList: any = [];

  constructor(private _productService: ProductService,
    private _stockService: StockService) { }

  ngOnInit() {
    this._getAllProducts();
    this._initializeStock();
    this._initializeProduct();

  }

  /**
   * saving the stock object
   */
  saveStock(): any {
    const STOCK_DETAILS = {
      'totalQuantity': this.stock.totalQuantity,
      'totalPrice': this.stock.totalPrice,
      'products': this.productList
    };
    this._stockService.SaveStock(STOCK_DETAILS).subscribe(res => {
      window.open(GlobalItems.WEB_APP_URL + '/business/product-management/product-index', '_self');
    }, error => { });
  }

  /**
    * initializing the product object.
    */
  private _initializeProduct(): any {
    this.product.productId = 0;
    this.product.productName = '';
    this.product.ingrediants = '';
    this.product.descriptions = '';
    this.product.quantity = 0;
    this.updatedQuantity = 0;
  }

  /**
  * initializing the stock object.
  */
  private _initializeStock(): any {
    this.stock.StockId = 0;
    this.stock.TotalQuantity = 0;
    this.stock.TotalPrice = 0;
  }

  /**
   * get all product list.
   */
  private _getAllProducts(): any {
    this._productService.getAllProducts().subscribe(res => {
      for (let i = 0; i < res.length; i++) {
        res.recievedDate = Date.now();
        res.LastUpdatedDate = Date.now();
        this.productList.push(res[i]);
      }
      this.product = res;
    }, error => { });
  }

  /**
  * initializing the product edit view.
  * @param {product} updatedProducts - updated product object.
  * @param {product} updatedQuantity - updated product quantity.
  */
  editProducts(updatedProducts: any, updatedQuantity: any): any {
    const updatedTissueTypeItem = this.productList.find(this.findIndexToUpdate, updatedProducts.productId);
    const index = this.productList.indexOf(updatedTissueTypeItem);
    this.productList[index].quantity = updatedQuantity.value;
  }

  /**
  * finding the product index.
  * @param {product} updatedProducts - updated product object.
  */
  findIndexToUpdate(updatedProducts: any): any {
    return updatedProducts.productId === this;
  }
}

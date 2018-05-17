import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { StockComponent } from './stock.component';
import stockRoutes from './stock.routes';
import {
  MdInputModule,
  MdButtonModule,
  MdToolbarModule,
  MdCardContent,
  MdGridListModule,
  MdCardModule,
  MdTabsModule,
  MdListModule,
  MdTableModule,
  MdIconModule,
  MdMenuModule,
  MdSelectModule
} from '@angular/material';
import { CdkTableModule } from '@angular/cdk/table';

@NgModule({
  imports: [
    CommonModule,
    stockRoutes,
    FormsModule,
    FormsModule,
    MdInputModule,
    MdButtonModule,
    FormsModule,
    MdToolbarModule,
    MdGridListModule,
    MdCardModule,
    MdTabsModule,
    MdListModule,
    CdkTableModule,
    MdIconModule,
    MdMenuModule,
    MdSelectModule
  ],
  declarations: [StockComponent]
})

/**
 * The stock  module which includes the stock details.
 *
 * @summary stock module class.
 *
 * @classdesc manage the stock module details.
 */
export default class StockModule {
}

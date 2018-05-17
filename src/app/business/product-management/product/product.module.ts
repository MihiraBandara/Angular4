import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductComponent } from './product.component';
import productRoutes from './product.routes';
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
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
    imports: [
        CommonModule,
        productRoutes,
        FormsModule,
        CommonModule,
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
        MdIconModule,
        MdMenuModule,
        MdSelectModule,
        FlexLayoutModule
    ],
    declarations: [ProductComponent]
})

/**
 * The product module which includes the product details.
 *
 * @summary product  module class.
 *
 * @classdesc manage the product  module details.
 */
export default class ProductModule  {
}

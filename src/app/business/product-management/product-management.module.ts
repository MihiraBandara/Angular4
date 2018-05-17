import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ProductManagementComponent } from './product-management.component';
import productManagementRoutes from './product-management.routes';

@NgModule({
    imports: [
        CommonModule,
        productManagementRoutes,
        FormsModule,
    ],
    declarations: [ProductManagementComponent]
})

/**
 * The product management module which includes the product management details.
 *
 * @summary product management module class.
 *
 * @classdesc manage the product management module details.
 */
export default class ProductManagementModule {
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { StockManagementComponent } from './stock-management.component';
import stockManagementRoutes from './stock.management.routes';

@NgModule({
    imports: [
        CommonModule,
        stockManagementRoutes,
        FormsModule,
    ],
    declarations: [StockManagementComponent]
})

/**
 * The stock management module which includes the stock management details.
 *
 * @summary stock management module class.
 *
 * @classdesc manage the stock management module details.
 */
export default class StockManagementModule {
}

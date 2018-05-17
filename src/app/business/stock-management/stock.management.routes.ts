import { Route, RouterModule } from '@angular/router';
import {StockManagementComponent } from './stock-management.component';
import StockModule from './stock/stock.module';

const stockManagementRoutes: Route[] = [
    {
        path: '', component: StockManagementComponent,
        children: [
            { path: 'stock', loadChildren: () => StockModule },
        ]
    },
];

/**
 * The stock management routes which includes the routing details of the
 * stock management.
 *
 * @summary stock management routes class.
 *
 * @classdesc stock management routes implementation.
 */
export default RouterModule.forChild(stockManagementRoutes);
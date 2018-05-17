import { Route, RouterModule } from '@angular/router';
import { BusinessComponent } from './business.component';
import ProductManagementModule from './product-management/product-management.module';
import StockManagementModule from './stock-management/stock-management.module';

const businessRoutes: Route[] = [
    {
        path: '', component: BusinessComponent,
        children: [
            { path: 'product-management', loadChildren: () => ProductManagementModule },
            { path: 'stock-management', loadChildren: () => StockManagementModule },
        ]
    },
];

/**
 * The business routes which includes the routing details of the
 * business.
 *
 * @summary business routes class.
 *
 * @classdesc business routes implementation.
 */
export default RouterModule.forChild(businessRoutes);


import { Route, RouterModule } from '@angular/router';
import {ProductManagementComponent } from './product-management.component';
import ProductIndexModule from './product-index/product-index.module';
import ProductModule from './product/product.module';

const productManagementRoutes: Route[] = [
    {
        path: '', component: ProductManagementComponent,
        children: [
            { path: 'product-index', loadChildren: () => ProductIndexModule },
            { path: 'product/:operation/:id', loadChildren: () => ProductModule},
        ]
    },
];

/**
 * The product management routes which includes the routing details of the
 * product management.
 *
 * @summary product management routes class.
 *
 * @classdesc product management routes implementation.
 */
export default RouterModule.forChild(productManagementRoutes);

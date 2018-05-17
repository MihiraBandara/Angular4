
import { Route, RouterModule } from '@angular/router';
import { ProductIndexComponent } from 'app/business/product-management/product-index/product-index.component';

const productIndexRoutes: Route[] = [
    { path: '', component: ProductIndexComponent }
];

/**
 * The product index routes which includes the routing details of the
 * product index.
 *
 * @summary product index routes class.
 *
 * @classdesc product index routes implementation.
 */
export default RouterModule.forChild(productIndexRoutes);

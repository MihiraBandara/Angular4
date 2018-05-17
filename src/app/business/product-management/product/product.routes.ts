import { Route, RouterModule } from '@angular/router';
import { ProductComponent } from './product.component';


const productRoutes: Route[] = [
    { path: '', component: ProductComponent }
];

/**
 * The product routes which includes the routing details of the
 * product.
 *
 * @summary product routes class.
 *
 * @classdesc product routes implementation.
 */
export default RouterModule.forChild(productRoutes);

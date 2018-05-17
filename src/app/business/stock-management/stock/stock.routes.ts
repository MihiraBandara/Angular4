import { Route, RouterModule } from '@angular/router';
import { StockComponent } from './stock.component';

const stockRoutes: Route[] = [
    { path: '', component: StockComponent }
];

/**
 * The stock routes which includes the routing details of the
 * stock.
 *
 * @summary stock routes class.
 *
 * @classdesc stock routes implementation.
 */
export default RouterModule.forChild(stockRoutes);

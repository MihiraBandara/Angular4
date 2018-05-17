import { Route, RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import { LoginCallbackComponent } from './login-callback/login-callback.component';


const loginRoutes: Route[] = [
    { path: '', component: LoginComponent },
    { path: 'callback', component: LoginCallbackComponent }
];

/**
 * The login routes which includes the routing details of the
 * login.
 *
 * @summary login routes class.
 *
 * @classdesc login routes implementation.
 */
export default RouterModule.forChild(loginRoutes);

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LoginComponent } from './login.component';
import loginRoutes from './login.routes';
import { LoginCallbackComponent } from './login-callback/login-callback.component';


@NgModule({
    imports: [
        CommonModule,
        loginRoutes,
        FormsModule,
    ],
    declarations: [LoginComponent, LoginCallbackComponent]
})

/**
 * The login module which includes login details of the
 * login.
 *
 * @summary login module class.
 *
 * @classdesc login module implementation.
 */
export default class LoginModule {
}

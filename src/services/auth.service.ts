import { Injectable } from '@angular/core';
import { UserManager, UserManagerSettings, User } from 'oidc-client';
import { GlobalItems } from '../utilities/global-items';
import { Observable } from 'rxjs/Observable';

/*
 * Defines open id connect authentication implementation.
 */
/**
 *Defines open id connect authentication implementation.
 *
 * @summary AuthService.
 *
 * @classdesc implement the auth service.
 */
@Injectable()
export class AuthService {

    private manager: UserManager = new UserManager(GlobalItems.OIDC_CONFIGURATION);

    private user: User = null;

    constructor() {
        this.manager.getUser().then(user => {
            this.user = user;
        });
    }

    /**
     * Returns whether user is logged in or not.
     * @returns {Observable<boolean>} Whether user is logged in or not.
     */
    public isLoggedIn(): Observable<boolean> {
        return Observable.fromPromise<boolean>(
            this.manager.getUser().then(user => {
                if (user && !user.expired) {
                    return true;
                } else {
                    this.startAuthentication();
                    return false;
                }
            })
        );
    }

    /**
     * Initiate oidc authentication.
     * @returns {Promise<void>} authentication operation completion.
     */
    public startAuthentication(): Promise<void> {
        return this.manager.signinRedirect();
    }

    /**
     * Store user data and complete the authentication.
     * @returns {Promise<void>} authentication operation completion.
     */
    public completeAuthentication(): Promise<void> {
        return this.manager.signinRedirectCallback().then(user => {
            this.user = user;
            window.sessionStorage.setItem('access_token', user.access_token);
            window.location.href = '/';
        });
    }

    /**
     * Initiate logout.
     */
    public logout(): void {
        this.manager.signoutRedirect();
        window.sessionStorage.removeItem('access_token');
    }

}

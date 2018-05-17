import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs/observable';

/*
 * Authentication validator for project and slide components. 
 */
@Injectable()
export class AuthGuardService implements CanActivate {
    constructor(private authService: AuthService) { }

    /*
     * Implements @angular/router/CanActivate.canActivate
     */
    public canActivate(): Observable<boolean> {
        return this.authService.isLoggedIn();
    }
}
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductIndexComponent } from './business/product-management/product-index/product-index.component';
import { ProductManagementComponent } from './business/product-management/product-management.component';
import { BusinessComponent } from './business/business.component';
import { AuthGuardService } from './auth-guard.service';

const appRoutes: Routes = [
    { path: '', canActivate:[AuthGuardService], pathMatch: 'full', redirectTo: 'business/product-management/product-index' },
    { path: 'login', loadChildren: 'app/login/login.module' },
    { path: 'business', canActivate:[AuthGuardService], loadChildren: 'app/business/business.module' },
];

/**
 * The app routes which includes the routing details of the
 * app.
 *
 * @summary app routes class.
 *
 * @classdesc app routes implementation.
 */
 export const routes: ModuleWithProviders = RouterModule.forRoot(appRoutes);
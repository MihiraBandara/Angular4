import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { BusinessComponent } from './business.component';
import businessRoutes from './business.routes';

@NgModule({
    imports: [
        CommonModule,
        businessRoutes,
        FormsModule,
    ],
    declarations: [BusinessComponent]
})

/**
 * The business module which includes the business  module details.
 *
 * @summary business module class.
 *
 * @classdesc manage the business module details.
 */
export default class BusinessModule {
}

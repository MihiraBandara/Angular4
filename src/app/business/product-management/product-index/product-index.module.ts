import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ProductIndexComponent } from './product-index.component';
import projectIndexRoutes from './product-index.routes';
import {
  MdInputModule,
  MdButtonModule,
  MdToolbarModule,
  MdCardContent,
  MdGridListModule,
  MdCardModule,
  MdTabsModule,
  MdListModule,
  MdTableModule,
  MdIconModule,
  MdMenuModule,
  MdSelectModule
} from '@angular/material';
import { CdkTableModule } from '@angular/cdk/table';

@NgModule({
  imports: [
    CommonModule,
    projectIndexRoutes,
    FormsModule,
    FormsModule,
    MdInputModule,
    MdButtonModule,
    FormsModule,
    MdToolbarModule,
    MdGridListModule,
    MdCardModule,
    MdTabsModule,
    MdListModule,
    CdkTableModule,
    MdIconModule,
    MdMenuModule,
    MdSelectModule
  ],
  declarations: [ProductIndexComponent]
})

/**
 * The product index module which includes the product index details.
 *
 * @summary product index module class.
 *
 * @classdesc manage the product index module details.
 */
export default class ProjectIndexModule {
}

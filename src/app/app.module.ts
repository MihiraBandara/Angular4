import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';
import {
  MdInputModule, MdButtonModule, MdToolbarModule, MdCardContent,
  MdGridListModule, MdCardModule, MdTabsModule, MdListModule,
  MdTableModule, MdIconModule, MdMenuModule, MdSelectModule
} from '@angular/material';
import { CdkTableModule } from '@angular/cdk/table';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ToastModule } from 'ng2-toastr/ng2-toastr';
import { AuthGuardService } from './auth-guard.service';
import { AuthService } from '../services/auth.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes,
    BrowserModule,
    BrowserAnimationsModule,
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
    MdSelectModule,
    FlexLayoutModule,
    ToastModule.forRoot()
  ],
  providers: [AuthGuardService, AuthService],
  bootstrap: [AppComponent]
})

/**
 * The app module which includes the app module details.
 *
 * @summary app module class.
 *
 * @classdesc manage app module details.
 */
export class AppModule { }


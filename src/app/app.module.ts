import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { ColorPickerModule } from 'ngx-color-picker';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/partials/header/header.component';
import { HomeComponent } from './components/pages/home/home.component';
import { DetailViewComponent } from './components/partials/detail-view/detail-view.component';
import { EmployeeListComponent } from './components/partials/employee-list/employee-list.component';
import { EmployeeDialogComponent } from './components/partials/employee-dialog/employee-dialog.component';
import { ToggleSortButtonComponent } from './components/partials/toggle-sort-button/toggle-sort-button.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    DetailViewComponent,
    EmployeeListComponent,
    EmployeeDialogComponent,
  ],
  imports: [
    BrowserModule,
    ToggleSortButtonComponent,
    ReactiveFormsModule,
    MatIconModule,
    MatDialogModule,
    FormsModule,
    ColorPickerModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

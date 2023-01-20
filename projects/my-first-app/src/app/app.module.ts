import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ManageBusinessUnitModule } from './manage-business-unit/manage-business-unit.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ManageBusinessUnitModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

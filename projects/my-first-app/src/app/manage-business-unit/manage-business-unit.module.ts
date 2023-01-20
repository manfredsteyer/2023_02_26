import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageBusinessUnitRoutingModule } from './manage-business-unit-routing.module';
import { ListBusinessUnitComponent } from './list-business-unit/list-business-unit.component';


@NgModule({
  declarations: [
    ListBusinessUnitComponent
  ],
  imports: [
    CommonModule,
    ManageBusinessUnitRoutingModule
  ]
})
export class ManageBusinessUnitModule { }

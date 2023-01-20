import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListBusinessUnitComponent } from './list-business-unit/list-business-unit.component';

const routes: Routes = [
  {
    path: 'list',
    component: ListBusinessUnitComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageBusinessUnitRoutingModule { }

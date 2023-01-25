import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  
  // Your route here:
  {
    path: 'business-unit',
    loadChildren: () => loadRemoteModule({
      type: 'module',
      remoteEntry: 'https://micofrontend-my-first-app.pacewisdom.in/remoteEntry.js',
      exposedModule: './Module'
    }).then(m => m.ManageBusinessUnitModule)
  },
  {
    path: '**',
    component: NotFoundComponent
  }

  // DO NOT insert routes after this one.
  // { path:'**', ...} needs to be the LAST one.

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

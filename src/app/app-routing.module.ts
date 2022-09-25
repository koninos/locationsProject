import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'maps',
    pathMatch: 'full'
  },
  {
    path: 'maps',
    loadChildren: () =>
      import('./pages/locations-map/locations-map.module').then(
        m => m.LocationsMapModule
      )
  },
  {
    path: 'table',
    loadChildren: () =>
      import('./pages/locations-table/locations-table.module').then(
        m => m.LocationsTableModule
      )
  },
  { path: '**', redirectTo: 'maps' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

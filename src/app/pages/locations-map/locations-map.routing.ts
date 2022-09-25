import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LocationsMapComponent } from './locations-map.component';

const routes: Routes = [
  {
    path: '',
    // outlet: 'notes',
    component: LocationsMapComponent,
    // canActivate: [NotesGuard],
    // canDeactivate: [NotesGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  // providers: [NotesGuard]
})
export class LocationsMapRoutingModule {}
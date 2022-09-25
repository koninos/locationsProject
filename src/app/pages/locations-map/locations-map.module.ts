import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TranslateModule } from '@ngx-translate/core';

import { AgmCoreModule } from '@agm/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LocationsMapComponent } from './locations-map.component';
import { LocationsMapRoutingModule } from './locations-map.routing';

@NgModule({
  declarations: [
    LocationsMapComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    AgmCoreModule,
    LocationsMapRoutingModule,
    TranslateModule
  ]
})
export class LocationsMapModule { }

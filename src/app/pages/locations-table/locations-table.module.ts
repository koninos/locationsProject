import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TranslateModule } from '@ngx-translate/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from 'src/app/shared/shared.module';
import { GridHeaderComponent } from './grid-header/grid-header.component';
import { GridComponent } from './grid/grid.component';
import { LocationsTableComponent } from './locations-table.component';
import { LocationsTableRoutingModule } from './locations-table.routing';

@NgModule({
  declarations: [
    LocationsTableComponent,
    GridComponent,
    GridHeaderComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    SharedModule,
    LocationsTableRoutingModule,
    TranslateModule
  ]
})
export class LocationsTableModule { }

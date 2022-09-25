import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { TranslateModule } from '@ngx-translate/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SortableHeaderDirective } from 'src/app/shared/directives/sortable-header.directive';
import { PaginationComponent } from './components/pagination/pagination.component';

@NgModule({
  declarations: [
    SortableHeaderDirective,
    PaginationComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    TranslateModule
  ],
  exports: [
    SortableHeaderDirective,
    PaginationComponent
  ]
})
export class SharedModule { }

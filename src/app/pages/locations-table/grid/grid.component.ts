import {
  ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output, QueryList,
  ViewChildren
} from '@angular/core';
import { FormControl } from '@angular/forms';

import {
  SortableHeaderDirective, SortEvent
} from 'src/app/shared/directives/sortable-header.directive';
import { Location } from '../../../models/location.model';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GridComponent {
  @Input() filter: FormControl;

  @Input() set locations(locs: Location[]) {
    this._locations = locs;
    this.initialLocations = locs;
  }

  get locations(): Location[] {
    return this._locations;
  }

  @Output() sortTable = new EventEmitter<SortEvent>();

  @ViewChildren(SortableHeaderDirective) headers: QueryList<SortableHeaderDirective>;

  public initialLocations: Location[];

  private _locations: Location[];

  constructor(private cdRef: ChangeDetectorRef) {}

  public resetHeaders(column: string): void {
    this.headers?.forEach(header => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });
  }

  public refreshLocations(event: { currentPage: number, pageSize: number }) {
    const { currentPage, pageSize } = event;

    this._locations = [...this.initialLocations]
      .map((loc, i) => ({id: i + 1, ...loc}))
      .slice((currentPage - 1) * pageSize, (currentPage - 1) * pageSize + pageSize);

    this.cdRef.detectChanges();
  }

}

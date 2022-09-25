import { DecimalPipe } from '@angular/common';
import {
  ChangeDetectionStrategy, Component, OnInit, PipeTransform, ViewChild
} from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { Store } from '@ngrx/store';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

import { compare, SortEvent } from 'src/app/shared/directives/sortable-header.directive';
import { AppState } from 'src/app/store/reducers/app.state';
import { selectLocations } from 'src/app/store/selectors/app.selectors';
import { Location } from '../../models/location.model';
import { GridComponent } from './grid/grid.component';

@Component({
  selector: 'app-locations-table',
  templateUrl: './locations-table.component.html',
  styleUrls: ['./locations-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [DecimalPipe]
})
export class LocationsTableComponent implements OnInit {

  @ViewChild(GridComponent) grid: GridComponent;

  public locations$: Observable<Location[]>;
  public filter = this.fb.control('', { nonNullable: true });

  public sortSubject: BehaviorSubject<SortEvent> = new BehaviorSubject({
      column: '',
      direction: ''
    } as SortEvent);

  constructor(
    private store: Store<AppState>,
    private fb: FormBuilder,
    private pipe: DecimalPipe
  ) { }

  ngOnInit(): void {
    this.locations$ = combineLatest([
      this.store.select(selectLocations),
      this.sortSubject,
      this.filter.valueChanges.pipe(startWith(''))
    ])
    .pipe(
      map(([locs, sort, filter]) => {
        return this.search(this.onSort(locs, sort), filter, this.pipe);
      })
    );    
  }

  public onSort(locations: Location[], {column, direction}: SortEvent) {
    this.grid?.resetHeaders(column);

    if (direction === '' || column === '') {
      return [...locations];
    } else {
      return [...locations].sort((a, b) => {
        let v1 = a[column],
            v2 = b[column];

        if (column === 'latitude' || column === 'longitude') {
          v1 = a.coordinates[column];
          v2 = b.coordinates[column];
        }
        const res = compare(v1, v2);
        return direction === 'asc' ? res : -res;
      });
    }

  }

  private search(locations: Location[], text: string, pipe: PipeTransform): Location[] {
    return locations?.filter(loc => {
      const term = text.toLowerCase();
      return loc.name.toLowerCase().includes(term)
        || pipe.transform(loc.coordinates.latitude).includes(term)
        || pipe.transform(loc.coordinates.longitude).includes(term);
    });
  }
}

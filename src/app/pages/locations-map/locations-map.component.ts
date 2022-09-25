import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AgmMarker } from '@agm/core';
import { AppState } from 'src/app/store/reducers/app.state';
import { selectLocations } from 'src/app/store/selectors/app.selectors';
import { Location } from '../../models/location.model';

@Component({
  selector: 'app-locations-map',
  templateUrl: './locations-map.component.html',
  styleUrls: ['./locations-map.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LocationsMapComponent implements OnInit {

  public latitude = 34.99043;
  public longitude = 33.24661;
  public locations$: Observable<Location[]>;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.locations$ = this.store.select(selectLocations);
  }

  // TODO remove
  public oMarkerClick(event: AgmMarker) {
    console.log(event)
  }

}

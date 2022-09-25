import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import { LocationsService } from 'src/app/core/locations.service';
import { Location, LocationSrv } from 'src/app/models/location.model';
import { getLocations, getLocationsFail, getLocationsSuccess } from '../actions/app.actions';

@Injectable()
export class AppEffects {

  public getLocations$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getLocations),
      switchMap(action => this.locationsService.getLocations()
        .pipe(
          map((locations: LocationSrv[]) => {
            return getLocationsSuccess({
              locations: locations.map(x => this.mapToLocation(x))
            });
          }),
          catchError(error => of(getLocationsFail()))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private locationsService: LocationsService
  ) {}

  private mapToLocation(location: LocationSrv): Location {
    return {
      coordinates: {
        latitude: location.coordinates[0],
        longitude: location.coordinates[1]
      },
      name: location.name
    }
  }
}
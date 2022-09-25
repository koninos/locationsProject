import { createAction, props } from '@ngrx/store';

import { Location } from '../../models/location.model';

export const getLocations = createAction(
  '[App] Get locations'
);

export const getLocationsSuccess = createAction(
  '[App] Get locations Success',
  props<{ locations: Location[] }>()
);

export const getLocationsFail = createAction(
  '[App] Get locations Fail'
);

export const addLocation = createAction(
  '[App] Add location',
  props<{ location: Location }>()
);

export const addLocationSuccess = createAction(
  '[App] Add location Success'
);

export const addLocationFail = createAction(
  '[App] Add location Fail'
);
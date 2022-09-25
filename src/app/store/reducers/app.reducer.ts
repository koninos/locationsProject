import { createReducer, on } from '@ngrx/store';

import { addLocation, getLocationsSuccess } from '../actions/app.actions';
import { initialState } from './app.state';

export const appReducer = createReducer(
  initialState,
  on(getLocationsSuccess, (state, { locations }) => ({
    ...state,
    locations
  })),

  on(addLocation, (state, { location }) => ({
    ...state,
    locations: [...state.locations, location]
  })),
);
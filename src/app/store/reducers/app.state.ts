import { Location } from '../../models/location.model';

export interface AppState {
  locations: Location[];
}

export const initialState: AppState = {
  locations: []
};
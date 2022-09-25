export interface LocationSrv {
  coordinates: number[];
  name: string;
}

export interface Location {
  coordinates: Coordinate;
  name: string;
}

export interface Coordinate {
  latitude: number;
  longitude: number;
}
type PlaceType = "country" | "city" | "attraction";

type PlacePosition = {
  lat: number;
  lng: number;
};

export type Place = {
  name: string;
  type: PlaceType;
  position: PlacePosition;
};

"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
// import { Loader } from "@googlemaps/js-api-loader";
// import PlacesLibrary = google.maps.PlacesLibrary;
// import Autocomplete = google.maps.places.Autocomplete;

const Map: React.FC = () => {
  // const [placeLibrary, setPlaceLibrary] = useState<PlacesLibrary | null>(null);
  // const [autocomplete, setAutocomplete] = useState<Autocomplete | null>(null);
  // const inputRef = useRef<HTMLInputElement>(null);

  // useEffect(() => {
  //   (async () => {
  //     if (!process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY) {
  //       console.error("fffffffffffffffffffffff Google Maps API key not found");
  //       return;
  //     }
  //
  //     const loader = new Loader({
  //       apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  //       version: "weekly",
  //     });
  //
  //     loader.importLibrary("places").then(async () => {
  //       const lib = await loader.importLibrary("places");
  //       setPlaceLibrary(lib);
  //
  //       if (!inputRef.current) {
  //         console.error("fffffffffffffffffffffff input not found");
  //         return;
  //       }
  //
  //       const autocomplete = new google.maps.places.Autocomplete(
  //         inputRef.current,
  //       );
  //
  //       autocomplete.addListener("place_changed", () => {
  //         const place = autocomplete.getPlace();
  //         console.log(
  //           "fffffffffffffffffffffffffffffffffffffffffff place:",
  //           place,
  //         );
  //       });
  //
  //       console.log(
  //         "fffffffffffffffffffffffffffffffffffffffffff autocomplete:",
  //         autocomplete,
  //       );
  //
  //       setAutocomplete(autocomplete);
  //     });
  //   })();
  // }, [inputRef]);

  return (
    <div>
      {/*<h1>Map</h1>*/}
      {/*<form>*/}
      {/*  <input type="text" ref={inputRef} size={50} />*/}
      {/*  <button type="button">Search</button>*/}
      {/*</form>*/}
    </div>
  );
};

export default Map;

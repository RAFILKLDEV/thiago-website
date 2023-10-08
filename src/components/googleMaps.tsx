import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

export function GoogleMaps() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyBtkxIh4brTD2mXJ9anNqC3BDdpDxG6lOY",
  });

  const containerStyle = {
    width: "400px",
    height: "400px",
  };

  const center = {
    lat: -21.184653493034457,
    lng: -47.83162116812064,
  };

  return (
    <>
      {isLoaded ? (
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
          <Marker position={center} />
        </GoogleMap>
      ) : (
        <></>
      )}
    </>
  );
}

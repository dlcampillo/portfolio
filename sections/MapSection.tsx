import React, { useEffect, useState } from "react";
import { ColorScheme, Map, MapType, Marker } from "mapkit-react";
import { usePreferredTheme } from "@/hooks/preferred-theme";
import Heading from "@/atoms/Heading";
import { LocationInformation } from "@/@types/location";

const token =
  "eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjRZQjczWTVLTVAifQ.eyJpc3MiOiJIUUxNOFBIV0NNIiwiaWF0IjoxNjc3OTUyODA2LCJleHAiOjE3MDk1MTA0MDAsIm9yaWdpbiI6Imh0dHBzOi8vcmlkYS5kZXYvIn0.38S1YD-xy4ipubMoNtXLT4FeU6FH2FDpyqO24sgNCFJubHsMy_BkIc_iG_EaIYmfaZ5MriQ9fe0miTuc8y7vsw";

const MapSection: React.VFC = () => {
  const [location, setLocation] = useState<LocationInformation>();

  const [mapTransform, setMapTransform] = useState<string>(
    "rotateX(0deg) rotateY(0deg) rotateZ(0deg) scale(0.75)"
  );
  const { theme } = usePreferredTheme();

  useEffect(() => {
    if (location)
      setMapTransform("rotateX(64deg) rotateY(0deg) rotateZ(16deg) scale(0.9)");
    else
      fetch("/api/location")
        .then((response) => response.json() as Promise<LocationInformation>)
        .then(setLocation);
  }, [location, setLocation]);

  return (
    <div
      className="relative flex items-center justify-center w-full h-64 overflow-hidden rounded-lg"
      style={{ perspective: "2000px", transformStyle: "preserve-3d" }}
    >
      <div
        className="absolute z-20 w-[1200px] h-[1200px] transition-transform delay-1000 duration-1000"
        style={{ transform: mapTransform }}
      >
        {location && (
          <Map
            token={token}
            initialRegion={{
              centerLatitude: location.latitude,
              centerLongitude: location.longitude,
              latitudeDelta: 0.05,
              longitudeDelta: 0.05,
            }}
            colorScheme={
              theme === "light" ? ColorScheme.Light : ColorScheme.Dark
            }
            isZoomEnabled={false}
            isRotationEnabled={false}
            isScrollEnabled={false}
            showsMapTypeControl={false}
            showsPointsOfInterest={false}
            showsUserLocation={false}
            showsUserLocationControl={false}
            showsZoomControl={false}
            mapType={MapType.MutedStandard}
          />
        )}
      </div>
      <div className="absolute inset-0 z-10 opacity-40 bg-neutral-300 dark:bg-neutral-800" />
    </div>
  );
};

export default MapSection;
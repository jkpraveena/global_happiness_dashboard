import React from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker
} from 'react-simple-maps';
import { scaleLinear } from 'd3-scale';
import { CountryData } from '../types/happiness';

const geoUrl = "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";

interface WorldMapProps {
  data: CountryData[];
}

export function WorldMap({ data }: WorldMapProps) {
  const colorScale = scaleLinear<string>()
    .domain([0, 8])
    .range(["#ffedea", "#ff5233"]);

  return (
    <div className="w-full h-[400px] bg-white rounded-lg shadow-lg p-4">
      <ComposableMap projection="geoMercator">
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const countryData = data.find(
                d => d.country === geo.properties.name
              );
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={countryData ? colorScale(countryData.score) : "#F5F4F6"}
                  stroke="#D6D6DA"
                  style={{
                    default: { outline: "none" },
                    hover: { outline: "none", fill: "#F53" },
                    pressed: { outline: "none" }
                  }}
                />
              );
            })
          }
        </Geographies>
      </ComposableMap>
    </div>
  );
}
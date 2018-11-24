import React, { useState } from 'react';
import { Map, TileLayer, Marker, Popup, Rectangle } from 'react-leaflet';
import styled from 'react-emotion';
import '../../node_modules/leaflet/dist/leaflet.css';
import { icon } from 'leaflet';

const markerPlanet1 = icon({
  iconUrl: require('../assets/planet1.png'),
  iconSize: [50.38, 31.812]
});

const markerPlanet2 = icon({
  iconUrl: require('../assets/planet2.png'),
  iconSize: [62.975, 39.765]
});

const iconTypeToIcon = iconType => {
  if (iconType === 'planet1') return markerPlanet1;
  else if (iconType === 'planet2') return markerPlanet2;
};

const data = [
  {
    name: 'marker1',
    tags: ['t1', 't2'],
    iconType: 'planet1',
    show: true,
    coordinates: [52.400512, 16.950136]
  },
  {
    name: 'marker2',
    tags: ['t2'],
    iconType: 'planet1',
    show: true,
    coordinates: [52.402512, 16.950136]
  },
  {
    name: 'marker3',
    tags: ['t1'],
    iconType: 'planet2',
    show: true,
    coordinates: [52.404512, 16.950136]
  }
];

const MapWrapper = styled('div')`
  .leaflet-container {
    width: 100vw;
    height: 100vh;
  }
`;

const MapScreen = props => {
  const [position, setPosition] = useState([
    props.location.coords.latitude,
    props.location.coords.longitude
  ]);
  const [zoom, setZoom] = useState(16);

  // markers data
  const [markers, setMarkers] = useState(data);
  const filterMarkers = (tag, markers) => {
    return markers.map(marker => {
      const filteredMarker = { ...marker };
      filteredMarker.show = marker.tags.includes(tag);
      return filteredMarker;
    });
  };

  return (
    <div>
      <MapWrapper>
        <Map center={position} zoom={zoom}>
          <TileLayer
            attribution="Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ, TomTom, Intermap, iPC, USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL, Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong), and the GIS User Community"
            url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}"
          />
          {markers.map(marker =>
            marker.show ? (
              <Marker
                key={marker.name}
                position={marker.coordinates}
                icon={iconTypeToIcon(marker.iconType)}
              >
                <Popup>You are here</Popup>
              </Marker>
            ) : null
          )}
          <Rectangle bounds={[[-150, -150], [150, 150]]} color={'#4ee1ec'} />
        </Map>
      </MapWrapper>
    </div>
  );
};

export default MapScreen;

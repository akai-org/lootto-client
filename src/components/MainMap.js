import React, { useState, useEffect } from 'react';
import { Map, TileLayer, Marker, Popup, Rectangle } from 'react-leaflet';
import styled from 'react-emotion';
import '../../node_modules/leaflet/dist/leaflet.css';
import { icon } from 'leaflet';
import { withRouter } from 'react-router';
import { authorizedRequest } from '../utils/request';

const markerPlanet1 = icon({
  iconUrl: require('../assets/planet1.png'),
  iconSize: [50.38, 31.812]
});

const markerPlanet2 = icon({
  iconUrl: require('../assets/planet2.png'),
  iconSize: [62.975, 39.765]
});

const iconTypeToIcon = type => {
  if (type === 'planet1') return markerPlanet1;
  else if (type === 'planet2') return markerPlanet2;
};

const MapWrapper = styled('div')`
  .leaflet-container {
    width: 100vw;
    height: calc(100vh - 78px);
  }
  .leaflet-title-pane {
    filter: grayscale(100%) contrast(0.6) sepia(100%) contrast(0.8) invert(100%)
      brightness(1.8) hue-rotate(-30deg) contrast(1.7) brightness(1.1);
  }

  .leaflet-marker-pane {
    filter: saturate(70%);
  }
`;

const MapScreen = props => {
  const [position, setPosition] = useState([
    props.userLocation.coords.latitude,
    props.userLocation.coords.longitude
  ]);

  const [zoom, setZoom] = useState(16);

  // markers data
  const [markers, setMarkers] = useState([]);

  // initial fetch
  useEffect(() => {
    fetchMarkers();
  }, []);
  const fetchMarkers = () => {
    authorizedRequest('planet')
      .then(data =>
        data.map(({ _id, name, type, longitude, latitude }) => ({
          planetId: _id,
          name,
          type,
          tags: ['default'],
          show: true,
          coordinates: [longitude, latitude]
        }))
      )
      .then(mappedMarkers => {
        setMarkers(mappedMarkers);
      });
  };

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
          {!!markers.length
            ? markers.map(marker =>
                marker.show ? (
                  <Marker
                    key={marker.name}
                    position={marker.coordinates}
                    icon={iconTypeToIcon(marker.type)}
                    onClick={() => {
                      props.history.push(`/planet?planetId=${marker.planetId}`);
                    }}
                  >
                    <Popup>
                      You are too far, try to get a little bit closer.
                    </Popup>
                  </Marker>
                ) : null
              )
            : null}
        </Map>
      </MapWrapper>
    </div>
  );
};

export default withRouter(MapScreen);

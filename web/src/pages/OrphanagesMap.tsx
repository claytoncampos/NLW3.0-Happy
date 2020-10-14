import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import { Map, TileLayer } from 'react-leaflet';

import 'leaflet/dist/leaflet.css'

import mapMarkerImg from '../images/map-marker.svg';
import '../styles/pages/orphanage-map.css';


function OrphangesMap() {
  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMarkerImg} alt="happy" />

          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </header>

        <footer>
          <strong>Guarulhos</strong>
          <span>São Paulo</span>
        </footer>
      </aside>

      <Map
        center={[-23.4249101, -46.5258909]}
        zoom={15}
        style={{ width: '100%', height: '100%' }}
      >
        {/*  <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />*/}
        <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiY2xheXRvbmNhbXBvcyIsImEiOiJja2c4MDlpOWQwNnVyMzJwZnB0NDJ1OHJrIn0.nJI_aELh9cp-E95MfXsnhg`} />
      </Map>

      <Link to="" className="create-orphanage">
        <FiPlus size={32} color="#FFF" />
      </Link>

    </div>
  );
}
export default OrphangesMap;
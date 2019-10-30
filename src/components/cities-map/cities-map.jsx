import React from 'react';
import PropTypes from 'prop-types';
import leaflet from 'leaflet';

class CitiesMap extends React.PureComponent {

  componentDidMount() {
    const {offers} = this.props;
    const {defaultCity, zoom, icon, layer, copyRight} = this.props.mapConfig;

    const mapIcon = leaflet.icon(icon);

    const map = leaflet.map(`map`, {
      center: defaultCity,
      zoom,
      zoomControl: false,
      marker: true
    });
    map.setView(defaultCity, zoom);

    leaflet
      .tileLayer(layer, {
        attribution: copyRight
      })
      .addTo(map);

    for (let i = 0; i < offers.length; i++) {
      leaflet
        .marker(offers[i].coordinates, {mapIcon})
        .addTo(map);
    }
  }

  render() {
    return (
      <div className="cities__map" id="map" />
    );
  }
}

CitiesMap.propTypes = {
  mapConfig: PropTypes.shape({
    defaultCity: PropTypes.arrayOf(PropTypes.number).isRequired,
    zoom: PropTypes.number.isRequired,
    icon: PropTypes.shape({
      iconUrl: PropTypes.string.isRequired,
      iconSize: PropTypes.arrayOf(PropTypes.number).isRequired
    }),
    layer: PropTypes.string.isRequired,
    copyRight: PropTypes.string.isRequired
  }),
  offers: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    premium: PropTypes.bool.isRequired,
    img: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    coordinates: PropTypes.arrayOf(PropTypes.number).isRequired,
  })),
};

export default CitiesMap;

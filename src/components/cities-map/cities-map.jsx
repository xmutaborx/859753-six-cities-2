import React from 'react';
import PropTypes from 'prop-types';
import leaflet from 'leaflet';

class CitiesMap extends React.PureComponent {
  _init() {
    const {mapConfig: {defaultCity, zoom, layer, copyRight}, pins} = this.props;

    const icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30]
    });

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

    for (let i = 0; i < pins.length; i++) {
      leaflet
        .marker(pins[i], {icon})
        .addTo(map);
    }
  }

  componentDidUpdate() {
    this._init();
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

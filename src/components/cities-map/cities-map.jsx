import React from 'react';
import PropTypes from 'prop-types';
import leaflet from 'leaflet';

class CitiesMap extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {mapConfig, offers} = this.props;

    const icon = leaflet.icon(mapConfig.icon);

    const map = leaflet.map(`map`, {
      center: mapConfig.defaultCity,
      zoom: mapConfig.zoom,
      zoomControl: mapConfig.zoomControl,
      marker: mapConfig.marker
    });
    map.setView(mapConfig.defaultCity, mapConfig.zoom);

    leaflet
      .tileLayer(mapConfig.layer, {
        attribution: mapConfig.copyRight
      })
      .addTo(map);

    // Оставить тестовый маркер из мока?
    // leaflet
    //   .marker(mapConfig.defaultCord, {icon})
    //   .addTo(map);


    // Правильно ли что циклом это сделал? Есть ли более подходящий вариант?
    for (let i = 0; i < offers.length; i++) {
      leaflet
        .marker(offers[i].coordinates, {icon})
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
    defaultCord: PropTypes.arrayOf(PropTypes.number).isRequired,
    zoom: PropTypes.number.isRequired,
    icon: PropTypes.shape({
      iconUrl: PropTypes.string.isRequired,
      iconSize: PropTypes.arrayOf(PropTypes.number).isRequired
    }),
    zoomControl: PropTypes.bool.isRequired,
    marker: PropTypes.bool.isRequired,
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

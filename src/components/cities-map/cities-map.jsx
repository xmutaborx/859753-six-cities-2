import React from 'react';
import PropTypes from 'prop-types';
import leaflet from 'leaflet';

class CitiesMap extends React.PureComponent {
  _init() {
    const {defaultCity, zoom, layer, copyRight} = this.props.mapConfig;

    this.icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30]
    });

    this.map = leaflet.map(`map`, {
      center: defaultCity,
      zoom,
      zoomControl: false,
      marker: true
    });

    this.map.setView(defaultCity, zoom);

    leaflet
      .tileLayer(layer, {
        attribution: copyRight
      })
      .addTo(this.map);

    this.markerGroup = [];

  }

  _renderPins() {
    const {pins} = this.props;

    pins.forEach((it) => {
      let marker = leaflet.marker(it, this.icon).addTo(this.map);
      this.markerGroup.push(marker);
    });
  }

  componentDidMount() {
    this._init();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.pins !== this.props.pins) {
      this.markerGroup.forEach((it) => {
        this.map.removeLayer(it);
      });

      this._renderPins();
    }
  }

  render() {
    return (
      <div id="map" style={{height: `100%`}}/>
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
  pins: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)),
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

import React from 'react';
import PropTypes from 'prop-types';
import leaflet from 'leaflet';

class CitiesMap extends React.PureComponent {
  _init() {
    this.map = leaflet.map(`map`, {
      center: [52.38333, 4.9],
      zoom: 12,
      zoomControl: false,
      marker: true
    });

    this.icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30]
    });

    // this.map.setView([52.38333, 4.9], 13);

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(this.map);

    this.markerGroup = [];

  }

  _takeCenter() {
    const latitude = this.props.offersList[0].city.location.latitude;
    const longitude = this.props.offersList[0].city.location.longitude;
    const zoom = this.props.offersList[0].city.location.zoom;

    this.map.setView(new L.LatLng(latitude, longitude), zoom);
  }

  _renderPins() {
    const pins = this.props.offersList.map((offer) => [offer.location.latitude, offer.location.longitude]);

    pins.forEach((it) => {
      let marker = leaflet.marker(it, this.icon).addTo(this.map);
      this.markerGroup.push(marker);
    });
  }

  componentDidMount() {
    this._init();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.offersList !== this.props.offersList) {
      this.markerGroup.forEach((it) => {
        this.map.removeLayer(it);
      });
      this._renderPins();
      this._takeCenter();
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

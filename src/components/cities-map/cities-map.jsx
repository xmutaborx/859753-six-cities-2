import React from 'react';
import PropTypes from 'prop-types';
import leaflet from 'leaflet';
import {connect} from 'react-redux';

class CitiesMap extends React.PureComponent {
  constructor(props) {
    super(props);

    this._defaultCenter = [52.38333, 4.9];
    this._defaultZoom = 12;
  }

  _init() {
    this.map = leaflet.map(`map`, {
      center: [52.38333, 4.9],
      zoom: 12,
      zoomControl: false,
      marker: true
    });

    this.activeIcon = leaflet.icon({
      iconUrl: `img/pin-active.svg`,
      iconSize: [27, 39]
    });

    this.icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [27, 39]
    });

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(this.map);

    this.markerGroup = [];

    if (this.props.offerId) {
      this.map.scrollWheelZoom.disable();
    }
  }

  _takeCenter() {
    if (this.props.offersList.length) {
      const location = this.props.offersList[0].city.location;
      this.map.setView(new leaflet.LatLng(location.latitude, location.longitude), location.zoom);
    } else {
      this.map.setView(this._defaultCenter, this._defaultZoom);
    }
  }

  _pinsAndCenter() {
    this._renderPins();
    this._takeCenter();
  }

  _renderPins() {
    const pins = this.props.offersList.map((offer) => (
      {
        latitude: offer.location.latitude,
        longitude: offer.location.longitude,
        id: offer.id
      }
    ));

    pins.forEach((it) => {
      const item = [it.latitude, it.longitude];
      let icon = this.icon;
      if (item.toString() === this.props.activePin.toString() || +this.props.offerId === it.id) {
        icon = this.activeIcon;
      }
      let marker = leaflet.marker([it.latitude, it.longitude], {icon}).addTo(this.map);
      this.markerGroup.push(marker);
    });
  }

  componentDidMount() {
    this._init();
    this._pinsAndCenter();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.offersList !== this.props.offersList || prevProps.activePin !== this.props.activePin) {
      this.markerGroup.forEach((it) => {
        this.map.removeLayer(it);
      });
      this._pinsAndCenter();
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
  offersList: PropTypes.arrayOf(PropTypes.object),
  activePin: PropTypes.array,
  offerId: PropTypes.number,
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  activePin: state.activePin,
});

export default connect(mapStateToProps, null)(CitiesMap);

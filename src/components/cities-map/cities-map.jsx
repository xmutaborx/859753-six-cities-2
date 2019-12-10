import React from 'react';
import PropTypes from 'prop-types';
import leaflet from 'leaflet';
import {connect} from 'react-redux';
import {PROP_TYPES_OFFERS_LIST} from '../../types/types';

import {DEFAULT_ZOOM, DEFAULT_CENTER, ICON_SIZE} from '../../constants/constants';

class CitiesMap extends React.PureComponent {
  componentDidMount() {
    this._handleInit();
    this._handlePinsAndCenter();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.offersList !== this.props.offersList || prevProps.activePin !== this.props.activePin) {
      this.markerGroup.forEach((it) => {
        this.map.removeLayer(it);
      });
      this._handlePinsAndCenter();
    }
  }

  _handleInit() {
    this.map = leaflet.map(`map`, {
      center: DEFAULT_CENTER,
      zoom: DEFAULT_ZOOM,
      zoomControl: false,
      marker: true
    });

    this.activeIcon = leaflet.icon({
      iconUrl: `img/pin-active.svg`,
      iconSize: ICON_SIZE
    });

    this.icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: ICON_SIZE
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

  _handleTakeCenter() {
    if (this.props.offersList.length) {
      const location = this.props.offersList[0].city.location;
      this.map.setView(new leaflet.LatLng(location.latitude, location.longitude), location.zoom);
    } else {
      this.map.setView(DEFAULT_CENTER, DEFAULT_ZOOM);
    }
  }

  _handleRenderPins() {
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

  _handlePinsAndCenter() {
    this._handleRenderPins();
    this._handleTakeCenter();
  }

  render() {
    return (
      <div id="map" style={{height: `100%`}}/>
    );
  }
}

CitiesMap.propTypes = {
  pins: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)),
  activePin: PropTypes.arrayOf(PropTypes.number),
  offerId: PropTypes.number,
  offersList: PROP_TYPES_OFFERS_LIST,
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  activePin: state.activePin,
});

export {CitiesMap};
export default connect(mapStateToProps, null)(CitiesMap);

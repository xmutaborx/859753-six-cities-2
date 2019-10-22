import React from 'react';
import PropTypes from 'prop-types';

import OfferCard from '../offer-card/offer-card';

class OffersList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeCard: {}
    };
  }

  shouldComponentUpdate(_, nextState) {
    if (nextState.activeCard.title !== this.state.activeCard.title) {
      return false;
    }
    return true;
  }

  render() {
    const {list} = this.props;

    return (
      <div className="cities__places-list places__list tabs__content" >
        {list.map((card, i) =>
          <OfferCard
            key={card.title + i}
            title={card.title}
            price={card.price}
            type={card.type}
            premium={card.premium}
            img={card.img}
            rating={card.rating}
            onMouseHover={() => {
              this.setState({
                activeCard: card,
              });
            }}
          />
        )};
      </div>
    );
  }
}

OffersList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    premium: PropTypes.bool.isRequired,
    img: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
  }))
};

export default OffersList;

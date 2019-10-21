import React from 'react'
import OfferCard from '../offerCard/offerCard'



class OffersList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      activeCard: {}
    };
  };


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
            onMouseHover={() => {
              this.setState({
                activeCard: card,
              })
            }}
          />
        )};
      </div>
    )
  }
};

export default OffersList;
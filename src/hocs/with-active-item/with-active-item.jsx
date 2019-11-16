import React from 'react';

const withActiveItem = (Component) => {
  class WithActiveItem  extends React.PureComponent {
    constructor(props) {
      super(props)

      this.state = {
        activeItem: {}
      }

      this.handleChangeActiveItem = this.handleChangeActiveItem.bind(this);
    }

    handleChangeActiveItem(item) {
      this.setState({activeItem: item})
    }

    render() {
      return (
        <Component
          {...this.props}
          activeItem={this.state.activeItem}
          handleChangeActiveItem={this.handleChangeActiveItem}
        />
      )
    }
  }

  return WithActiveItem;
}

export default withActiveItem;
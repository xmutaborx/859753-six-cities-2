import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

const App = ({titles, handleClick}) => {

  return (
    <div>
      {titles.map((title, i) =>
        <Fragment key={title + i}>
          <p onClick={handleClick}>{title}</p>
          <img src="img/amsterdam.jpg" style={{width: `100px`, height: `150px`}}/>
        </Fragment>
      )};
    </div>
  );
};

App.propTypes = {
  titles: PropTypes.array.isRequired,
  handleClick: PropTypes.func
};

App.defaultProps = {
  titles: [`Default title`]
};

export default App;

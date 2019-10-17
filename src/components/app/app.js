import React from 'react';
import PropTypes from 'prop-types';

const App = (props) => {
  const {titles} = props;

  return (
    <div>
      {titles.map((title, i) =>
        <div key={title + i}>
          <p>{title}</p>
          <img src="img/amsterdam.jpg" style={{width: `100px`, height: `150px`}}/>
        </div>
      )};
    </div>
  );
};

App.propTypes = {
  titles: PropTypes.array.isRequired
};

export default App;

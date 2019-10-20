import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const titles = [
  `Beautiful & luxurious apartment at great location`,
  `Wood and stone place`,
  `Canal View Prinsengracht`,
  `Nice, cozy, warm big bed apartment`
];

ReactDOM.render(
    <App
      titles={titles}
      handleClick={() => {}}
    />,
    document.getElementById(`root`)
);

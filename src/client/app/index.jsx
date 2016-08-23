import React from 'react';
import {render} from 'react-dom';
import WeatherFormComponent from './weather-component.jsx';

class App extends React.Component {
  render () {
    return (
		<div>
			<p> Hello React!</p>
			<WeatherFormComponent />
		</div>
	);
  }
}

render(<App/>, document.getElementById('app'));
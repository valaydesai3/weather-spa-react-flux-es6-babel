import React from 'react';
import {render} from 'react-dom';
import WeatherFormComponent from './weather-component.jsx';

class App extends React.Component {
  render () {
    return (
		<div>			
			<WeatherFormComponent />			
		</div>
	);
  }
}

render(<App/>, document.getElementById('app'));
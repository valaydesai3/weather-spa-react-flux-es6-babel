import React from 'react';
import Api from './api-component.jsx';

let apiCall = new Api();

class WeatherFormComponent extends React.Component {

  constructor(props) {
		super(props);
		this.state = {
			city: 'London'
		}
		this.changeLocation = this.changeLocation.bind(this);
		this.getData = this.getData.bind(this);
	}
  
	changeLocation(e) {
		this.setState({city: e.target.value});
	}
  
	getData(e) {
		e.preventDefault();	
		let place = this.state.city;
		apiCall.get(place)
            .then(function(response) {
                console.log(response);
        }.bind(this));
	}

  render() {
    return (
      <form className="input-group"><input type="text" name="city" placeholder="Enter city and get weather forecast" className="form-control" onChange={this.changeLocation} /><span className="input-group-btn"><button type="button" className="btn btn-secondary" onClick={this.getData}>Get</button></span></form>
    );
  }

}

export default WeatherFormComponent;
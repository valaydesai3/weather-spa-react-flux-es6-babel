import React from 'react';
import Api from './api-component.jsx';

let apiCall = new Api();

class WeatherFormComponent extends React.Component {

  constructor(props) {
		super(props);
		this.state = {
			city: 'London'
		}
		this.iconURL = 'http://openweathermap.org/img/w/';
		this.changeLocation = this.changeLocation.bind(this);
		this.getData = this.getData.bind(this);
		this.state = {
			name: '',
			icon: ''
		}
	}
  
	changeLocation(e) {
		this.setState({city: e.target.value});
	}
	
	showResult(response) {
		this.setState({
			name: response.name,
			icon: response.weather[0].icon+'.png',
			desc: response.weather[0].description,
			temp: response.main.temp
		});
    }
  
	getData(e) {
		e.preventDefault();	
		let place = this.state.city;
		apiCall.get(place)
            .then(function(response) {
				console.log(response);
				this.showResult(response);
        }.bind(this));
	}

  render() {
	var partial;
	if(this.state.name != ''){
		partial = <div><h1>{this.state.name}</h1><img src={this.iconURL+this.state.icon} /><h2>{this.state.temp}</h2><br/>
				  <span>{this.state.desc}</span></div>
	}
    return (
      <div>
		<form className="input-group"><input type="text" name="city" placeholder="Enter city and get weather forecast" className="form-control" onChange={this.changeLocation} /><span className="input-group-btn"><button type="button" className="btn btn-secondary" onClick={this.getData}>Get</button></span></form>
		{partial}		
	  </div>
    );
  }

}

export default WeatherFormComponent;
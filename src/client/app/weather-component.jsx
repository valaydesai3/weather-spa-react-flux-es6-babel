import React from 'react';
import Api from './api-component.jsx';

let apiCall = new Api();

class WeatherFormComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {likesCount : 0};
    //this.getData = this.getData.bind(this);
  }
  
	getData(place) {
		apiCall.get(place)
            .then(function(data) {
                console.log(data);
        }.bind(this));
	}

  render() {
    return (
      <form className="input-group"><input type="text" placeholder="Enter city and get weather forecast" className="form-control" value="" /><span className="input-group-btn"><button type="submit" className="btn btn-secondary" onClick={this.getData('london')}>Get</button></span></form>
    );
  }

}

export default WeatherFormComponent;
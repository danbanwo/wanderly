import React from 'react';


class SpotForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      place: '',
      duration: '',
      total_spent: '',
      country: '',
      spot: '',
      total: '',
      description: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

	handleChange(e) {
		this.setState({[e.target.name]: e.target.value})
	}

	handleSpotSubmit = (e) => {
    //USED TO GRAB DESTINATION ID NEEDED FOR ASSOCIATION
    //ID GRABBED FROM URL
    let destId = this.props.pathname.split('/')
    destId = destId[1]
    console.log(destId)
		this.props.addSpot({
      ...this.state,
      DestinationId: destId,
      lat: 52.375218,
      lng:4.883977
    })
    this.props.closeButton()
		e.preventDefault()
	}

	handleDestinationSubmit = (e) => {
		this.props.addDestination({
      ...this.state,
      ProfileId: this.props.profile.id,
      lat: 6.465422,
      lng: 3.406448
    })
    this.props.closeButton()
		e.preventDefault()
	}

	render() {
    const { pathname } = this.props
    if(pathname === '/profile' || pathname === 'profile') {
  		return (
  		<div className="addDestinationContainer">
        <h1 className="addDestination">Add a Destination</h1>
  			<form className ="destinationForm"onSubmit={this.handleDestinationSubmit} >
  				<label>
  					<input className="location" onChange={this.handleChange} name="place" type="text" placeholder="Add City">
  					</input>
  				</label><br />

  				<label><input className="duration" onChange={this.handleChange} name="duration" value={this.state.duration} type="text" placeholder="Add Duration">
  				</input></label><br />

  				<label><input className="country"onChange={this.handleChange} name="country" value={this.state.country} type="text" placeholder="Add Country">
  				</input></label><br />

  				<label><input className="total"onChange={this.handleChange} name="total_spent" value={this.state.total_spent} type="text" placeholder="$0">
  				</input></label><br />

          <button className="btn btn-default eat"type="button">Eat</button>
          <button className="btn btn-default play"type="button">Play</button>
          <button className="btn btn-default sleep"type="button">Sleep</button>

  				<button className="btn btn-default destination"type="submit">Share</button>
  			</form>
  		</div>
  		)
    } else {
      return (
      <div>
        <h1>Add a Spot</h1>
        <form onSubmit={this.handleSpotSubmit} >
          <label>
            <input onChange={this.handleChange} name="spot" type="text" placeholder="spot">
            </input>
          </label><br />

          <label><input onChange={this.handleChange} name="total" value={this.state.total} type="text" placeholder="total">
          </input></label><br />

          <label><input onChange={this.handleChange} name="description" value={this.state.description} type="text" placeholder="description">
          </input></label><br />

          <button type="submit">add spot</button>
        </form>
      </div>
      )
    }
	}
}

export default SpotForm;

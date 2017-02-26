import React from 'react';
import PlacesAutocomplete, { geocodeByAddress, geocodeByPlaceId } from 'react-places-autocomplete';
import '../../styles/destForm.css';
import '../../styles/modal.css';

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
      lat: 0,
      lng: 0,
      city: '',
      pictures:''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value})
  }

//Handles autocomplete component change
  handlePlaceChange = (address) => {
    this.setState({ place: address })
    console.log(address)
  }


//Handles autocomplete component change
  handleSpotChange = (address) => {
    this.setState({ spot: address })
    console.log(address)
  }


//Adds map coordinates retieved from the autocomplete API for Destination
  handleDestSelect = (address, placeId) => {
    let place = this.state.place
    geocodeByAddress(place,  (err, { lat, lng }) => {
      if (err) { console.log('Oh no!', err) }
      console.log(`Yay! got latitude and longitude for ${place}`, { lat, lng })
      this.setState({lat, lng})
    })
  }

//Adds map coordinates retieved from the autocomplete API for spots
  handleSpotSelect = (address, placeId) => {
    let spot = this.state.spot
    geocodeByAddress(spot,  (err, { lat, lng }) => {
      if (err) { console.log('Oh no!', err) }
      console.log(`Yay! got latitude and longitude for ${spot}`, { lat, lng })
      this.setState({lat, lng})
    })
  }

  //Handles the submission for Wanderspots Modal
  handleSpotSubmit = (e) => {
    //USED TO GRAB DESTINATION ID NEEDED FOR ASSOCIATION
    //ID GRABBED FROM URL
    let destId = this.props.pathname.split('/')
    destId = destId[1]
    this.props.addSpot({
      ...this.state,
      DestinationId: destId,
      // lat: 52.375218,
      // lng:4.883977
    })
    this.props.closeButton()
    e.preventDefault()
  }

//Handles submissions for destinationi modal
  handleDestinationSubmit = (e) => {
    this.props.addDestination({
      ...this.state,
      ProfileId: this.props.profile.id,
      // lat: 6.465422,
      // lng: 3.406448
    })
    this.props.closeButton()
    e.preventDefault()
  }

  render() {
    console.log(this.props)
    const destLocation = {
      root: 'destLocation',
      input: 'destLocation',
      // autocompleteContainer: 'my-autocomplete-container'
    }

    const spots = {
      root: 'spots',
      input: 'spots'
    }

    const { pathname } = this.props
    if(pathname === '/profile' || pathname === 'profile') {
      return (
      <div className="addDestinationContainer">
        <h1 className="addDestination">Add a Destination</h1>
        <form className ="destinationForm"onSubmit={this.handleDestinationSubmit} >

          <div className='destLocation'>
            <div className="iconLocation"></div>
            <label>
              <PlacesAutocomplete
                value={this.state.place}
                onChange={this.handlePlaceChange}
                onSelect={this.handleDestSelect}
                placeholder='Add Adventure'
                classNames={destLocation}
              />
            </label>
          </div><br />

          <div className='destClock'>
            <div className="iconClock"></div>
            <label><input className="destDuration" onChange={this.handleChange} name="duration" value={this.state.duration} type="text" placeholder="Duration of Adventure">
            </input></label>
          </div><br />

          <div className='destExpense'>
            <div className="iconExpense"></div>
            <label><input className="destTotal"onChange={this.handleChange} name="total_spent" value={this.state.total_spent} type="text" placeholder="$0">
            </input></label>
          </div><br />

          <div className='destExpense'>
            <div className="iconCountry"></div>
            <label><input className="country" onChange={this.handleChange} name="country" value={this.state.country} type="text" placeholder="Country of Adventure"></input></label><br />
          </div><br />

          <button className="shareDest" type="submit">Share</button>
        </form>
      </div>
      )
    } else {
      return (
      <div>
        <div className='addNew'>Add a Spot</div>

        <div className="spotContainer">
        <form onSubmit={this.handleSpotSubmit} >

        <div className="location">
          <div id="locationSVG"></div>
          <label>
            <PlacesAutocomplete
              value={this.state.spot}
              onChange={this.handleSpotChange}
              onSelect={this.handleSpotSelect}
              placeholder='Add Spot'
              classNames={spots}
            />
          </label><br />
        </div>

        <div className="city">
          <div id="citySVG"></div>
          <label><input  className="destination" onChange={this.handleChange} name="city" value={this.state.city} type="text" placeholder="Add City">
          </input></label><br />
        </div>

        <div className="expense">
          <div id="expenseSVG"></div>
          <label><input  className="total" onChange={this.handleChange} name="total" value={this.state.total} type="text" placeholder="$0">
          </input></label><br />
        </div>

        <div className="btns">
          <div className="spotButtons">
          <div id="tagSVG"></div>
            <button id="btnEat"className="btn btn-default eat"type="button">Food</button>
            <button id="btnFun"className="btn btn-default play"type="button">Fun</button>
            <button id="btnSleep"className="btn btn-default sleep"type="button">Lodging</button>
          </div>
        </div>

          <label><input className="describe" onChange={this.handleChange} name="description" value={this.state.description} type="text" placeholder="Write a caption...">
          </input></label><br />

          <button className='btn btn-default share' type="submit">Share</button>
        </form>
        </div>
      </div>
      )
    }
  }
}

export default SpotForm;

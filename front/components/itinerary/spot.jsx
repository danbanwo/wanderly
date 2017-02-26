import React from 'react';

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

          <div className='destLocation'>
            <div className="iconLocation"></div>
            <label>
              <input className="destLocation" onChange={this.handleChange} name="place" type="text" placeholder="Add Adventure">
              </input>
            </label>
          </div><br />

          <div className='destClock'>
            <div className="iconClock"></div>
            <label><input className="destDuration" onChange={this.handleChange} name="duration" value={this.state.duration} type="text" placeholder="Add Duration">
            </input></label>
          </div><br />

          <div className='destExpense'>
            <div className="iconExpense"></div>
            <label><input className="destTotal"onChange={this.handleChange} name="total_spent" value={this.state.total_spent} type="text" placeholder="$0">
            </input></label>
          </div><br />

          {//<label><input className="country"onChange={this.handleChange} name="country" value={this.state.country} type="text" placeholder="Add Country"></input></label><br />
          }

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

        <div className="expense">
          <div id="expenseSVG"></div>
          <label><input className="spots"onChange={this.handleChange} name="spot" type="text" placeholder="Add Spot">
          </input></label><br />
        </div>

        <div className="location">
          <div id="locationSVG"></div>
          <label><input  className="destination" onChange={this.handleChange} name="total" value={this.state.total} type="text" placeholder="Add City">
          </input></label><br />
        </div>

        <div className="city">
          <div id="citySVG"></div>
          <label><input  className="total" onChange={this.handleChange} name="total" value={this.state.total} type="text" placeholder="$0">
          </input></label><br />
        </div>

        <div className="btns">
          <div className="spotButtons">
          <div id="tagSVG"></div>
            <button className="btn btn-default eat"type="button">Fun</button>
            <button className="btn btn-default play"type="button">Food</button>
            <button className="btn btn-default sleep"type="button">Lodging</button>
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
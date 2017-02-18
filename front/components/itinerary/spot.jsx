import React from 'react';


class SpotForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {spot: '', total: '', description: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

	handleChange(e) {
		this.setState({[e.target.name]: e.target.value})
	}

	handleSubmit(e) {
		this.props.addSpot({
			spot: this.state.spot, 
			total: this.state.total, 
			description: this.state.description,
			DestinationId: this.props.params.destId
		})
		this.props.router.push(`/itinerary/${this.props.params.destId}`)
		e.preventDefault()
	}

	render() {
		return (
		<div>
			<form onSubmit={this.handleSubmit} >
				<label>
					<input onChange={this.handleChange} name="spot" type="text" placeholder="spot">
					</input>
				</label>

				<label><input onChange={this.handleChange} name="total" value={this.state.total} type="text" placeholder="total">
				</input></label>

				<label><input onChange={this.handleChange} name="description" value={this.state.description} type="text" placeholder="description">
				</input></label>

				<button type="submit">add spot</button>
			</form>
		</div>
		)
	}
}

export default SpotForm;
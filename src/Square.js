import React from 'react'

class Square extends React.Component {

	constructor (props){
		super(props) 
		this.state = {
			boton: props.boton
		}
	}

	render() {
		return (
			<button onClick={() => this.setState({boton: 'X'})}>{this.state.boton}</button>
			)
	}
}
export default Square
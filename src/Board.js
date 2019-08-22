import React, {Component} from 'react'
import Square from './Square'

export default class Board extends Component {
	constructor(){
		super()
		this.state = {
			table: [
				[null, null, null],
				[null, null, null],
				[null, null, null]
			]
		}
	}
	changeSquareState = (indexRow, indexCell) => {
		let state = this.state
		state.table[indexRow][indexCell] = 'x'
		this.setState(state)
	}
	renderCell = (cell, indexRow, indexCell) => (
		<td> 
			<Square boton={cell} changeSquareState={() => this.changeSquareState(indexRow, indexCell)}></Square> 
		</td>
	)

	renderRows = () => this.state.table.map((row, indexRow) => (<tr>
	 {row.map((cell, indexCell) => this.renderCell(cell, indexRow, indexCell ))}
	</tr>))

	render(){
		return(
			<div>
				<h1>Jugador: x </h1>
				<table>
					{this.renderRows()}
				</table>
			</div>
		)
	}
}
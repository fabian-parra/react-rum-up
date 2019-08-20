import React from 'react'
import Square from './Square'

class Board extends React.Component {
	render(){
		return(
			<div>
				<h1>Jugador: x </h1>
				<table>
					<tr>
						<td> <Square boton = "1"/> </td>
						<td> <Square boton = "2"/> </td>
						<td> <Square boton = "3"/> </td>
					</tr>
					<tr>
						<td> <Square boton = "4"/> </td>
						<td> <Square boton = "5"/> </td>
						<td> <Square boton = "6"/> </td>
					</tr>
					<tr>
						<td> <Square boton = "7"/> </td>
						<td> <Square boton = "8"/> </td>
						<td> <Square boton = "9"/> </td>
					</tr>
				</table>
			</div>
		)
	}
}
export default Board
import React, {Component} from 'react'
import Board from './Board'

export default class Game extends Component {
	render() {
		return (
			<div>
				<div className='board-container'>
					<Board />
				</div>
				<div className='infor-container'>
				</div>
			</div>	
		)
	}
}
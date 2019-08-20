import React from 'react'
import Board from './Board'
class Game extends React.Component {

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

export default Game
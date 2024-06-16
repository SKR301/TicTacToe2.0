import {Box} from './Box';

class Game {
	constructor() {
		this.m_curr_symbol = 'X';
		this.m_prev_moves = [];
	}

	getCurrSymbol() {
		return this.m_curr_symbol;
	}

	declareWinner() {
		// TODO
	}

	updateCurrentSymbol() {
		this.m_curr_symbol = (this.m_curr_symbol == 'X')? 'O': 'X';
	}

	addMoveToList(row, col) {
		if(this.m_prev_moves.length >= 7){
			this.m_prev_moves.shift;
		}
		this.m_prev_moves.push({"row": row, "col": col});
	}
}

export {Game};
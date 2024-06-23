var turn = 'X';

class Box {
	constructor() {
		this.m_cells = [
			[
				new Cell(0,0),
				new Cell(0,1),
				new Cell(0,2)
			],
			[
				new Cell(1,0),
				new Cell(1,1),
				new Cell(1,2)
			],
			[
				new Cell(2,1),
				new Cell(2,2),
				new Cell(2,3)
			]
		];

		this.is_done = false;
	}

	fillCell(row, col, val) {
		m_cells[row][col].setVal(val);
	}

	checkIsWin() {
		vals = [
			[
				m_cells[0][0].getVal(),
				m_cells[0][1].getVal(),
				m_cells[0][2].getVal(),
				
			],
			[
				m_cells[1][0].getVal(),
				m_cells[1][1].getVal(),
				m_cells[1][2].getVal(),
				
			],
			[
				m_cells[2][0].getVal(),
				m_cells[2][1].getVal(),
				m_cells[2][2].getVal(),
				
			]
		];
		
		// check horizontals
		if(vals[0][0] != '' && vals[0][0] == vals[0][1] && vals[0][0] == vals[0][2]) return true;
		if(vals[1][0] != '' && vals[1][0] == vals[1][1] && vals[1][0] == vals[1][2]) return true;
		if(vals[2][0] != '' && vals[2][0] == vals[2][1] && vals[2][0] == vals[2][2]) return true;
		
		// check verticals
		if(vals[0][0] != '' && vals[0][0] == vals[1][0] && vals[0][0] == vals[2][0]) return true;
		if(vals[0][1] != '' && vals[0][1] == vals[1][1] && vals[0][1] == vals[2][1]) return true;
		if(vals[0][2] != '' && vals[0][2] == vals[1][2] && vals[0][2] == vals[2][2]) return true;
		
		// check diagonals
		if(vals[0][0] != '' && vals[0][0] == vals[1][1] && vals[0][0] == vals[2][2]) return true;
		if(vals[0][2] != '' && vals[0][2] == vals[1][1] && vals[0][2] == vals[2][0]) return true;

		return false;
	}
};

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
};

class Cell {
	constructor(row, col) {
		this.m_row = row;
		this.m_col = col;
		this.m_val = '';
		this.m_ttl = 7;
	}	

	getRow() {
		return this.m_col;
	}

	getCol() {
		return this.m_col;
	}

	getVal() {
		return this.m_val;
	}

	getTTL() {
		return this.m_ttl;
	}

	setVal(val) {
		this.m_val = val;
	}

	updateTTL() {
		if(this.m_ttl == 0) return;
		this.m_ttl = m_ttl - 1;
	}

	isEmpty() {
		return this.m_val == '';
	}
};

function divClick(element) {
	console.log(element.id);
	
	
}

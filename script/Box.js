import {Cell} from './Cell';

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
}

export {Box};
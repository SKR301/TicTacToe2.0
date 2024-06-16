class Cell {
	constructor(row, col) {
		this.m_row = row;
		this.m_col = col;
		this.m_val = '';
		this.m_ttl = 7;
	}	

	getRow() {
		return m_row;
	}

	getCol() {
		return m_col;
	}

	getVal() {
		return m_val;
	}

	getTTL() {
		return m_ttl;
	}

	setVal(val) {
		m_val = val;
	}

	updateTTL() {
		m_ttl = m_ttl - 1;
	}

	isEmpty() {
		return m_val == '';
	}
};
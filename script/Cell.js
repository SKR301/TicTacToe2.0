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

export {Cell};
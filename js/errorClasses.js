export class MultipleErrors extends Error {
	constructor(message, errorArray) {
		super(message);
		this.errorArray = errorArray;
	}
}

export class AssemblerError extends Error {
	constructor(message, token) {
		super(message);
		this.errToken = token;
	}
}

export class InvalidOpcodeError extends AssemblerError {
	constructor(token) {
		super('Invalid Opcode!', token);
	}
}

export class OperandSizeError extends AssemblerError {
	constructor(expectedNumOperands, receivedNumOperands,token) {
		if (receivedNumOperands > expectedNumOperands) {
			super(`Too many Operands!\nExpected ${expectedNumOperands} but read ${receivedNumOperands}`, token);
		}
		else if (receivedNumOperands < expectedNumOperands) {
			super(`Not enough Operands!\nExpected ${expectedNumOperands} but read ${receivedNumOperands}`, token);
		}
		else super('Unknown operand size error', token);
	}
}

export class ImmOutRangeError extends AssemblerError {
	constructor(minVal, maxVal,token) {
		super(`Immediate Operand Invalid!\nValue must be between ${minVal} and ${maxVal}`,token);
	}
}

export class RegOutRangeError extends AssemblerError {
	constructor(maxVal,token) {
		super(`Register Number Invalid!\nMaximum Value ${maxVal}`,token);
	}
}

export class InvalidInputError extends AssemblerError {
	constructor(expectedFormat,token) {
		super(`Input invalid!\nExpected ${expectedFormat}`,token);
	}
}
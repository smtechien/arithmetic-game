	interface KeypadButton {
		name: string;
		value: string;
		style?: string;
	}

export const keypadButtons: KeypadButton[] = [
	{ name: 'num7', value: '7'},
	{ name: 'num8', value: '8'},
	{ name: 'num9', value: '9'},
	{ name: 'clear', value: 'AC'},
	{ name: 'num4', value: '4'},
	{ name: 'num5', value: '5'},
	{ name: 'num6', value: '6'},
	{ name: 'enter', value: '&#9166;', style: 'row-span-3' },
	{ name: 'num1', value: '1'},
	{ name: 'num2', value: '2'},
	{ name: 'num3', value: '3'},
	{ name: 'negative', value: '&minus;'},
	{ name: 'num0', value: '0'},
	{ name: 'backspace', value: '&larr;'},
];

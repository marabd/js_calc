var op;
var num1;
var num2;

function submitNumber() {
	if (!num1 || !num2) {
		alert('You must enter two numbers!');
	} else {
		switch(op) {
			case '+':
				add();
				break;
			case '-':
				subtract();
				break;
			case '*':
				multiply();
				break;
			case '/':
				divide();
				break;
			case 'c':
				clear();
				break;
			default:
				alert('You need to choose an operator!');
				break;
		}
		num1 = null;
		num2 = null;
		op = null;
	}
}

function operator(o) {
	op = o;
}

function add() {
 	display.innerHTML = "Total is: " + (num1 + num2);
}

function subtract() {
 	display.innerHTML = "Total is: " + (num1 - num2);

}

function multiply() {
 	display.innerHTML = "Total is: " + (num1 * num2);
}

function divide() {
	// prevent division by 0
	display.innerHTML = "Total is: " + (num1 / num2);
}

function clear() {
	// clear input on button c
	num1.value = '';
	num2.vaue = '';
	display.innerHTML = '';
}

function number(n) {
	if (num1 == null) {
		num1 = n;
	} else {
		num2 = n;
	}
}
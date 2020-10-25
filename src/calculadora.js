exports.Calculadora = function (first, second) {
    this.first = first;
    this.second = second;
    this.as_string = as_string;
    this.sum = sum;
    this.sub = sub;
    this.prod = prod;
}

function as_string(){
	return this.first + " "  + this.second;
}

function sum(){
	return this.first + this.second;
}

function sub(){
	return this.first - this.second;
}

function prod(){
	return this.first * this.second;
}

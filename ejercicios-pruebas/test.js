var calculadora = require("./calculadora.js");
assert = require("assert");

var new_calculadora = new calculadora.Calculadora(2,2);
assert(new_calculadora, "nueva calculadora");
assert.equal(new_calculadora.as_string(), "2 2");

assert(new_calculadora, "comprobamos suma");
assert.equal(new_calculadora.sum(), 4);

assert(new_calculadora, "comprobamos resta");
assert.equal(new_calculadora.sub(), 0);

assert(new_calculadora, "comprobamos producto");
assert.equal(new_calculadora.prod(), 4);
console.log("¡¡Ha superado todas las pruebas!!");

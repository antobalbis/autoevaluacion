**Realizar una aplicación básica que use algún microframework para devolver alguna estructura de datos del modelo que se viene usando en el curso u otra que se desee. La intención de este ejercicio es simplemente que se vea el funcionamiento básico de un microframework, especialmente si es alguno que, como express, tiene un generador de código. Se puede usar, por otro lado, el lenguaje y microframework que se desee.**

Se ha creado un aplicación básica que devuelve un string y otro que devuelve el contenido de un archivo html.

```

var express=require('express');
var app = express();
var port = process.env.PORT || 8080;

app.get('/holaMundo', function(req, res){
	res.send('HOLA MUNDO');
});

app.get('/adiosWeb', function(req, res){
	res.sendFile('/home/antonio/CC-antonio/ejercicios/ejercicios5/index.html');
});

app.listen(port)
```

**Programar un microservicio en express (o el lenguaje y marco elegido) que incluya variables como en el caso anterior.**

Se ha añadido un método que recibe dos variables y devuelve una cadena combinando ambas.

![imagen](https://github.com/antobalbis/autoevaluacion/blob/main/images/captura_amigo.png)

**Crear pruebas para las diferentes rutas de la aplicación.**

Se ha creado un test que comprueba que la respuesta de la llamada a la función es 200.

```
var request = require('supertest'),
app = require('../ejemplo.js');

describe( "GET /saludarAmigo", function() {
    it('responde con cadena', function (done) {
       request(app)
           .get('/saludarAmigo/uno/dos')
           .expect(200,done);
    });
});
```

![imagen](https://github.com/antobalbis/autoevaluacion/blob/main/images/test_bien.png)

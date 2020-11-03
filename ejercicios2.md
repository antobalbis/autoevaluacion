##### Ejercicio 1 Instalar alguno de los entornos virtuales de node.js (o de cualquier otro lenguaje con el que se esté familiarizado) y, con ellos, instalar la última versión existente, la versión minor más actual de la 4.x y lo mismo para la 0.11 o alguna impar (de desarrollo).

Se ha instalado nvm para node.js, para ello, siguiendo las indicaciones del [repositorio](https://github.com/nvm-sh/nvm#installing-and-updating), se ha hecho el clone del repositorio a .nvm desde nuestro home. Luego, desde el directorio en el que hemos hecho el clone, ejecutamos el script install.sh.

Para instalar node usando nvm se ejecuta el comando *nvm install node* para la última versión, y para instalar otra versión con *nvm ls-remote* para consultar la versión y *nvm install <version>* para instalar la versión que queramos.

En este caso hemso descargado, a parte de la última, la versión 4.9.1 y la versión 0.11.16.

##### Ejercicio 2 Crear una descripción del módulo usando package.json. En caso de que se trate de otro lenguaje, usar el método correspondiente.

Para ello vamos a crear una aplicación simple en node llamado calculadora.js, creamos la clase calculadora que recibe dos números y añadimos la función de suma y resta.

Después, teniendo instalado node.js (ejercicio1), para crear una descripción de un paquete usamos el comando *npm init*, que nos va a pedir que vayamos introduciendo la información sobre el paquete.

![Imagen 1](https://github.com/antobalbis/autoevaluacion/blob/main/images/ejercicio2-2.png)

Después de esto se crea en el directorio el archivo package.json con la descripción del proyecto que hemos añadido.

#### Ejercicio 3 Descargar el repositorio de ejemplo anterior, instalar las herramientas necesarias (principalmente Scala y sbt) y ejecutar el ejemplo desde sbt. Alternativamente, buscar otros marcos para REST en Scala tales como Finatra o Scalatra y probar los ejemplos que se incluyan en el repositorio.



##### Ejercicio 4 Para la aplicación que se está haciendo, escribir una serie de aserciones y probar que efectivamente no fallan. Añadir tests para una nueva funcionalidad, probar que falla y escribir el código para que no lo haga. A continuación, ejecutarlos desde mocha (u otro módulo de test de alto nivel), usando descripciones del test y del grupo de test de forma correcta. Si hasta ahora no has subido el código que has venido realizando a GitHub, es el momento de hacerlo, porque lo vamos a necesitar un poco más adelante.

Ahora vamos a crear las pruebas para comprobar que el ejemplo funciona, para ello creamos 3 *assert*, uno para la creación del objeto, otro para la suma y otro para la resta.

Al ejecutar los test se nos muestra en consola el mensaje último que indica que todos se han cumplido, ahora vamos a añadir una nueva función que devuelva un resultado erróneo y un test que espere el resultado correcto. Al ejecutar el nuevo test se nos muestra un mensaje de error indicando que el test no se ha cumplido. 

![Imagen 2](https://github.com/antobalbis/autoevaluacion/blob/main/images/ejercicio4-2.png)

Ahora vamos a cambiar la función para que devuelva el resultado correcto. 

##### Ejercicio 5

Lo primero es registrarnos con travis y vincularlo a nuestra cuenta de GitHub. Para ello accedemos a la página de [travis](https://travis-ci.org/) y nos registramos con github.

Una vez registrados con GitHub añadimos en travis el repositorio en el que vamos a usar integración continua con travis como se ve en la siguiente imagen.

![imagen 3](https://github.com/antobalbis/autoevaluacion/blob/main/images/repos_travis.png)

Luego vamos a crear un fichero [.travis.yml](https://github.com/antobalbis/autoevaluacion/blob/main/.travis.yml) para las pruebas, con esto se va a comprobar que se cumplen las condiciones al hacer un Pull Request. Por último hacemos un pull request con el programa del ejercicio anterior y comprobamos que pasa las pruebas.

![imagen 4](https://github.com/antobalbis/autoevaluacion/blob/main/images/captura_resultado_travis.png)

Además nos sirve para comprobar que al tener éxito en las pruebas nos llega un mensaje a nuestro correo.

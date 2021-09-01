# Ejercicios integración continua

#### Ejercicio 1: Haced los dos primeros pasos antes de pasar al tercero en un repositorio de nuestra elección, tal como el del proyecto que se hace para la asignatura (que se hará en el ejercicio siguiente).

1.- Registrarse en Travis con la cuenta de Github.
2.- Seleccionar en nuestra imagen de perfil en Travis settings -> activar.
3.- Seleccinoar el repositorio y clickar aprove & install.
4.- Crear archivo .travis -> commit -> push.

![repo travis](https://github.com/antobalbis/autoevaluacion/blob/main/images/seleccion_repo.png)

#### Ejercicio 2: Configurar integración continua para nuestra aplicación usando Travis o algún otro sitio.

Usamos una aplicación ya creada en nuestro repositorio de ejercicios, y modificamos el archivo travis que ya creamos previamente de forma que definimos el lenguaje node js, las versiones de node.js que vamos a usar, luego, bajo el comando before_install instalamos mocha, luego instalamos la aplicación y por último ejecutamos el script.

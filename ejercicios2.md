##### Ejercicio 1 Instalar alguno de los entornos virtuales de node.js (o de cualquier otro lenguaje con el que se esté familiarizado) y, con ellos, instalar la última versión existente, la versión minor más actual de la 4.x y lo mismo para la 0.11 o alguna impar (de desarrollo).

Se ha instalado nvm para node.js, para ello, siguiendo las indicaciones del [repositorio](https://github.com/nvm-sh/nvm#installing-and-updating), se ha hecho el clone del repositorio a .nvm desde nuestro home. Luego, desde el directorio en el que hemos hecho el clone, ejecutamos el script install.sh.

Para instalar node usando nvm se ejecuta el comando *nvm install node* para la última versión, y para instalar otra versión con *nvm ls-remote* para consultar la versión y *nvm install <version>* para instalar la versión que queramos.

En este caso hemso descargado, a parte de la última, la versión 4.9.1 y la versión 0.11.16.

##### Ejercicio 2 Crear una descripción del módulo usando package.json. En caso de que se trate de otro lenguaje, usar el método correspondiente.
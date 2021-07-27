# Ejercicios semana 5, contenedores Docker.

#### Ejercicio 1: Buscar alguna demo interesante de Docker y ejecutarla localmente, o en su defecto, ejecutar la imagen anterior y ver cómo funciona y los procesos que se llevan a cabo la primera vez que se ejecuta y las siguientes ocasiones.

Lo primero que hace al ejecutar un ejemplo, en este caso alpine, es buscar si existe la imagen en el equipo local, al no encontrarla la descarga y envía un mensaje de confirmación al terminar.

Al volver a ejecutarla, se encuentra localmente y se ejecuta.

#### Ejercicio 2: Tomar algún programa simple, “Hola mundo” impreso desde el intérprete de línea de órdenes, y comparar el tamaño de las imágenes de diferentes sistemas operativos base, Fedora, CentOS y Alpine, por ejemplo.

Se han descargado las imágenes de Fédora, centos y alpine, y mientras que la imagen de Alpine pesa unos 5,6MB las otras se quedan alrededor de los 200, siendo Fedora 178MB y centos 206MB.

#### Ejercicio 5: Crear un volumen y usarlo, por ejemplo, para escribir la salida de un programa determinado.

En este ejercicio se ha creado un volumen y se ha usado para leer el número de ficheros. Para crear el volumen se ha usado le comando *docker volume create benchmark* siendo benchmark el nombre del volumen.

Luego se ha creado una imagen de fedora con el comando *docker pull fedora* y por último se ha ejecutado la imagen y una vez dentro de fedora se ha creado un script de bash que lee el número de archivos y se ha guardado en /app.

Ahora podemos ejecutar el script desde una terminal con el comando *docker run -it --rm -v benchmark:/app fedora sh /app/mb.sh*.

#### Ejercicio 6: Reproducir los contenedores creados anteriormente usando un Dockerfile.

Para reproducir los contenedores con dockerfile creamos una carpeta donde almacenar el dockerfile, creamos un dockerfile con el contenido del ejemplo, y con la orden docker build <nombre_carpeta> se lanza el contenedor.


# Ejercicios tema 1

### Buscar una aplicación de ejemplo, preferiblemente propia, y deducir qué patrón es el que usa. ¿Qué habría que hacer para evolucionar a un patrón tipo microservicios?

En mi TFG por ejemplo que consiste en un editor de narrativa geolocalizada con una estructura de capas y una aplicación android con una arquitectura basada en evento para la reproducción de la narrativa.

Para transformar la aplicación de escritorio en una aplicación basada en microservicios tendríamos que modularizar la funcionalidad y tener estos módulos alojados en un servidor cloud para que puedan ser utilizados por otras aplicaciones.

### En la aplicación que se ha usado como ejemplo en el ejercicio anterior, ¿podría usar diferentes lenguajes? ¿Qué almacenes de datos serían los más convenientes?

Si podrían usarse distintos lenguajes, mientras que la información esté en formato JSON. Serían convenientes alguno que permite almacenar la información en JSON o que permita transformarla fácil a este formato sin importar si es una base de datos relacional o no.
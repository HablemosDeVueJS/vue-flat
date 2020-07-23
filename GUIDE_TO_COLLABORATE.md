# Cómo colaborar en vue-flat

*   Fork del repositorio
*   Clonar el repositorio
*   Actualizar la rama master
*   Crear una rama
*   Hacer los cambios
*   Hacer un Pull Request

## Fork del repositorio

El primer paso es hacer "Fork" del repositorio.

## Clonar el repositorio

Después de tener el repositorio en nuestra cuenta, seleccionar la dirección del repositorio "SSH o HTTP" y clonar:

`$ git clone https://github.com/[nombre_de_usuario]/vue-flat.git`

`$ cd ./vue-flat`

Dentro de la carpeta que genera, comprobar la URL del repositorio:

`$ git remote -v`

Antes de realizar modificaciones agregar la URL del repositorio original del proyecto:

`$ git remote add upstream https://github.com/HablemosDeVueJS/vue-flat`

Comprobar

`$ git remote -v`

## Actualizar la rama Master

Antes de empezar a trabajar, obtener los últimos cambios del Repositorio Original:

`$ git pull -r upstream master`

## Crear una Rama

Para crear una rama usar la opción "checkout" de git:

`$ git checkout -b [nombre_de_usuario]_dev`

## Hacer cambios

Realizar todos los cambios que se desea hacer al proyecto.

Agregar los archivos y hacer un commit

Después de realizar el commit hacer el push hacia nuestro repositorio indicando la rama que hemos creado.

`$ git push origin [nombre_de_usuario]_dev`

## Hacer un Pull Request

Hacer click en "Compare & Pull Request"

Escribir cambios del Pull Request.

Si todo está bien, enviar con el botón "Send Pull Request".

Esperar a que el dueño del repositorio lo revise, acepte y combine en la rama correspondiente.
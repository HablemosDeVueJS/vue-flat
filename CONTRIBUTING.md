# Contribuyendo al proyecto

Cuando quiera contribuir a este proyecto, porfavor primero exponga los cambios en [**el canal de telegram**](https://t.me/vuejsEs "Canal de telegram"), subiendo un [**issue**](https://github.com/HablemosDeVueJS/vue-flat/issues "Issues de vue-flat") o mediante un correo a los propietarios del repositorio

&nbsp;
___

## Cambios
Lo primero es leer el archivo [GUIDE_TO_COLLABORATION.md](https://github.com/HablemosDeVueJS/vue-flat/GUIDE_TO_COLLABORATE.md)

&nbsp;
___

## Plantilla para los cambios
Cuando se realice un cambio se debe usar esta platilla, al inicio del archivo `CHANGELOG.md`
```md
# Ver. **(0.0.0-status)** *YYYY-MM-DD*

> Todas las observaciones de los cambios en este parrafo

## Fixed
-

## Added
-

## Changed
-

## Remove
-
```
&nbsp;
### Control de versiones
Para el control de veriones sera dela siguiente forma

> Cada componente debe ser versionado de manera independiente <br> teniendo en cuenta el estado de su desarrollo.

#### Estados de desarrollo
|Estado |Características|
|:-     |:-             |
|X . X . X-**alpha[N]**|- En desarrollo|
||- Funcionalidad incompleta|
||- Estilos incompletos|
||- Respuesta incorrecta|
|X . X . X-**beta[N]**|- En desarrollo|
|||
||- Funcionalidad completa, reducida|
||- Estilos incompletos|
||- Respuesta correcta, sin formato|
|||
|X . X . X-**rc[N]**|- Desarrollo completo|
||- Funcionalidad completa, reducida|
||- Estilos completos|
||- Respuesta correcta|
|||
|X . X . X |- Desarrollo completo|
||- Funcionalidad completa|
||- Estilos completos|
||- Respuesta correcta|
||- **Test completo**|

&nbsp;
#### Parches *[patch]* => [ o . o . X ]
> Se hace referencia a todos los cambios menores realizados debido a errores tipograficos (typos), problemas a la hora de renderizar y arreglos que no afecten la compatiblidad o el estilo del componente

&nbsp;
#### Cambios menores *[minor]* => [ o . X . o ]
> Se añaden nuevas caracteristicas al componente o se modifican las existentes sin perder la compatibilidad o el estilo del componente

&nbsp;
#### Cambios Mayores *[major]* => [ X . o . o ]
> Sera necesario hacer este cambio en uno de los siguientes casos
>- Uso de un nuevo lenguaje
>- Cambio mayor en el framework
>- Residiseño en los estilos
>- Cambios en la estructura del proyecto que impida el uso normal de los components

&nbsp;
___

## Components
Para la creacion de los componentes se debe tener en cuenta las tecnologias que se van a emplear

|Archivo|Lenguaje|
|:---------|-------:|
|Maquetación|Html|
|Estilos|SCSS|
|Scripts|JavaScript|
|Test|Mocha-Chai|
|Documentación|Marckdown|

&nbsp;
___

## Estructura de archivos de cada componente
```md
📦components
     ┣━━📂[nameComponent]
     ┃   ┣━━📜index.vue
     ┃   ┣━━📜[nameComponent].html
     ┃   ┣━━📜[nameComponent]Style.scss
     ┃   ┣━━📜[nameComponent]Script.js
     ┃   ┣━━📜[nameComponent]Test.spec.js
     ┃   ┗━━📜[nameComponent]Document.js
```

> Para ver mas detalle acerca de la creación de los componentes revise el archivo [STYLE_GUIDE.md](https://github.com/HablemosDeVueJS/vue-flat/STYLE_GUIDE.md)

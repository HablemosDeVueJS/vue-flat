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
# Ver. **(0.0.0)** *YYYY-MM-DD*

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
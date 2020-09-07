
# MercadoLibre Yamil Lasso Front End Test

> MercadoLibre Front End Test

## Instalación

1. Descargar el repositorio:
>Rama actualizada master

for master:
```bash
git clone https://github.com/yamilsteven/ml-fe-test.git
```

2. Usar npm para instalar dependencias
```bash
npm i
```

## Uso

1. Para servir en local, primero necesitamos levantar el servidor donde fueron creados los Endpoints a partir de la API pública dada
```bash
# Este se servirá en el puerto :8000 (en el package json se creó la regla del proxy para no usar el /localhost/ en el código
cd ml-fe-test/server
node index.js
```

2. Para correr el Front End

```bash
# Este se servirá en el puerto :3000 
cd ml-fe-test
npm start
```
## Información importante acerca del proyecto

1. Tags de HTML5 semánticos usados
2. Los estilos fueron creados pensando en "mobile first", se crearon los siguientes breakpoints

```bash
$bp-mobile: 300px;
$bp-tablet: 600px;
$bp-desktop: 1024px;
```

>Uso de mixins:

Para los breakpoints mencionados se creó un mixin el cuál podemos extender en nuestros componentes scss
```bash
@inlude from(mobile) {
 //estilos para mobile
}
@inlude from(tablet) {
 //estilos para tablet
}
@inlude from(desktop) {
 //estilos para desktop
}
```

Para el tamaño de fuentes, se creó un mixin que convierte de px a rem
```bash
en scss: @include font-size(20)
renderizado: font-size: 20px; and font-size: 1.25rem;
```


3. Fuente usada: Roboto de libre uso, tomada e importada desde Google Fonts

4. Para pre procesadores usé SCSS, los diferentes componentes pueden ser encontrados en /src/scss/components


### Tech stack
NODE

EXPRESS 

NPM

HTML5

CSS3

SASS

ES6

REACT

Axios

### Estructura del sitio

Principalmente el sitio tiene la siguiente estructura

>Tengo el archivo App.js como archivo principal
```bash
/src/App.js
```

>Para la creación de las páginas según instrucciones dadas
```bash
/ (HOME) este renderiza sólo la barra de búsqueda con ayuda de React Router

/items?search= página de resultados de búsqueda de acuerdo al query dado, también renderiza la barra de búsqueda

/items/:id página de producto con su información y descripción
```

>Componentes
```bash
/src/components/Search.js
/src/components/ResultPage.js
/src/components/Product.js
/src/components/Description.js
```

## Interacción - JS

Con Express creé las reglas para consumir la API pública y retornar los datos que necesito

>En el Home el usuario encuentra la barra de búsqueda en la cuál ingresa el query a consultar en el Endpoint

>Una vez se hace el submit del form, el sitio hace una redirección a la url con el parámetro /items?search dónde se lista el resultado de búsqueda

>Se muestran 4 resultados de acuerdo a los criterios de aceptación del ejercicio 

>El usuario hace click a un item listado, el sitio redirecciona a la url propia del producto con el parámetro /items/:id

> En la página de producto encontramos la información solicitada

### Aprecio su tiempo leyendo este documento yamilsteven@hotmail.com +57 314 888 0916

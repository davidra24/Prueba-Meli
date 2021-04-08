# Challenge Mercado Libre

  

_El siguiente proyecto corresponde a un challenge de frontend por parte de mercadolibre.com_

  

_Dicho proyecto está construido bajo tecnologías de Javascript (NodeJS, ReactJS)_

  

Para acceder a la instancia actual de este proyecto, se debe ir a la siguiente URL: [**Challenge Mercado Libre**](https://mercado-libre-challenge.herokuapp.com/)

  

## Comenzando 🚀

  

_Este proyecto está alojado en la siguiente URL: https://github.com/davidra24/Prueba-Meli, desde dónde se deberá clonar el repositorio para trabajar de manera local el desarrollo._

  

Mira **Despliegue** para conocer como desplegar el proyecto.

  
  

### Pre-requisitos 📋

  

_Antes de empezar se debe contar con los siguientes requisitos_

  

```

- NodeJS v14.15.1

- npm v6.14.8

```

  

### Instalación 🔧

  

_Para la instalación de dependencias necesarias se deben ejecutar los siguientes comandos:_

  

```

npm install o yarn

```

  

_Seguido de esto es necesario crear el archivo **.env**, para poder trabajar bajo el entorno de desarrollo, o generar los archivos de producción_

  

En el archivo debe ir la siguiente información

  

#### Para Desarrollo

```

ENV=development

PORT=5000

```

#### Para Producción

```

ENV=production

PORT=5000

```

## Ejecución💻

  

#### Entorno de desarrollo

_Una vez instaladas las dependencias y configuradas las variables de entorno, procedemos a la ejecución, para ejecutar en un ambiente de desarrollo procedemos a utilizar el siguiente comando_

```

npm run dev o yarn dev

```

_El cuál ejecutará tanto el backend como el frontend, por medio de webpack_

  

#### Entorno de producción

_Una vez instaladas las dependencias y configuradas las variables de entorno, procedemos a la ejecución, para ejecutar en un ambiente de producción procedemos a crear el build de producción, para esto utilzamos el siguiente comando_

```

npm run build o yarn build

```

_Seguido de esto se generará una carpeta en la ruta src/server/public, la cuál estará disponible para hacer renderizado desde el servidor en modo de producción, una vez generada esta carpeta procedemos a utilizar el siguiente comando_

```

npm start o yarn start

```

_El cuál ejecutará tanto el backend como el frontend, por medio de webpack_

  

Una vez ejecutado cualquiera de los dos entornos, podremos empezar a utilizar el proyecto, el cuál para acceder se deberá entrar a la URL:

  

> http://localhost:5000

  

Para acceder al backend, podremos observar la documentación como está funcionando en la siguiente URL:

  

> http://localhost:5000/api

  

## Ejecutando las pruebas ⚙️

  

_Para realizar pruebas unitarias, con Jest, utilizaremos el siguiente comando_

```

npm run test o yarn test

```

_Si queremos dejar que jest use una instancia continúa y realice pruebas en tiempo real, debemos ejecutar el siguiente comando_

```

npm run test:watch o yarn test:watch

```

_Si deseamos analizar la cobertura de nuestras pruebas, debemos ejecutar el siguiente comando, que nos generará una nueva carpeta que nos mostrará la cobertura en cada archivo de js que estemos utilizando_

```

npm run test:coverage o yarn test:coverage

```

  

## Despliegue 📦

  

_Para realizar el despliegue, se está utilizando Travis CI, como herramienta de integración y despliegue continuo, por esto mismo, para realizar un despliegue se debe realizar la actualización de la rama master, ya sea por medio de un push o por un pull request._

  

_Seguido de esto se deberá acceder al dashboard de travis, donde se aloja la integración del proyecto y crear un build, travis se encargará del resto._

  

_Una vez terminado el despliegue por parte de travis se puede revisar el despliegue en esta url:_

  

> https://mercado-libre-challenge.herokuapp.com/

  

_De igual forma, podremos acceder a la documentación del backend es esta url:_

  

> https://mercado-libre-challenge.herokuapp.com/api

  

## Construido con 🛠️

  

_Para realizar este proyecto se utilizaron las siguientes herramientas_

  

*  [NodeJS](https://nodejs.org/en/docs) - Es un entorno en tiempo de ejecución multiplataforma, de código abierto, para la capa del servidor basado en JavaScript.

*  [ReactJS](https://es.reactjs.org/docs/getting-started.html) - Es una biblioteca Javascript de código abierto diseñada para crear interfaces de usuario con el objetivo de facilitar el desarrollo de aplicaciones en una sola página.

*  [expressJS](https://expressjs.com/en/guide/routing.html) - Es un marco de aplicación web de back-end para Node.js.

*  [webpack](https://webpack.js.org/concepts) - Es un paquete de módulos de JavaScript de código abierto, diseñado para empaquetar aplicaciones web complejas.

*  [Sass](https://sass-lang.com/documentation) - Es un preprocesador de lenguaje de hoja de estilos en cascada (CSS).

*  [jest](https://jestjs.io/docs/getting-started) - Es un marco de prueba de JavaScript.

*  [TravisCI](https://docs.travis-ci.com) - Es un servicio de integración continua alojado que se utiliza para crear y probar proyectos de software alojados en GitHub y Bitbucket.

## Autores ✒️

*  **Carlos David Ramírez Gómez** - *Totalidad del proyecto* - [davidra24](https://github.com/davidra24)

  
## Licencia 📄

Este proyecto está bajo la Licencia (MIT) - mira el archivo [LICENSE.txt](https://github.com/davidra24/Prueba-Meli/blob/master/LICENSE.txt) para detalles


## Pruebas de calidad

_De igual forma, se utilizó la herramienta lighthouse de google para realizar pruebas en el challenge, el cuál tiene en cuenta temas como:_

- Rendimiento
- Accesibilidad
- Buenas practicas
- SEO
- PWA


_EL resultado de dichas pruebas se puede encontrar en la siguiente URL:_
[Prueba de calidad del sitio](https://davidra24.github.io/performance-test-challenge/){:target="_blank"}

---

⌨️ Hecho con ❤️ por [davidra24](https://github.com/davidra24/Prueba-Meli) 😃
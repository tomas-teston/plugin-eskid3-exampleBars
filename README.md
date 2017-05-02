# Plugin ESKID3 - Example Bars

> Visualización de barras para un plugin en Kibana.

---

## Introducción

[Kibana](https://www.elastic.co/products/kibana) es una potente aplicación web que nos permite explotar información almacenada en una base de datos [Elasticsearch](https://www.elastic.co/webinars/getting-started-elasticsearch?elektra=home&storm=banner) de una forrma muy visual. Uno de los problemas que surgen con Kibana es la escased de tipos de visualización que nos ofrece. Para solucionar este problema se pueden crear plugins de visualización para Kibana utilizando librerías de visualizaciones como [D3.js](https://d3js.org/). 

Todos los detalles de implementación para crear un plugin y algunos otros aspectos importantes se encuentran descritos en la siguiente dirección: [Wiki](https://github.com/tomas-teston/plugin-eskid3/wiki).

En este ejemplo se utilizan los datos de ejemplo proporcionados por Kibana en su documentación oficial (Poner link a datos). 

## Cómo empezar

Para poder probar este plugin en Kibana hace falta tener todo el entorno configurado: [Cómo confrigurar el entorno de desarrollo](https://github.com/tomas-teston/plugin-eskid3/wiki/Entorno-de-desarrollo).


## Comandos

Una vez está configurado el entorno puede situarse en la carpeta donde se encuentra el plugin y realizar alguna de las siguientes acciones:

  - Lanzar Kibana incluyendo el pluginStart kibana: `npm start`

  - Puede pasar cualquier argumento como normalmente enviaría a `bin/kibana` poniendo después `--` al ejecutar `npm start`: `npm start -- --config kibana.yml`
  
  - Construir un archivo distribuible: `npm run build`

  - Ejecutar las pruebas de navegador en un navegador web real: `npm run test:browser`    

  - Lanzar el servidor de pruebas usando Mocha: `npm run test:server`

> Para saber mas información sobre estos comandos lanzar `npm run ${task} -- --help`.

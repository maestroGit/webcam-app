const express = require('express');
const path = require('path');
const app = express();
// app es una instancia de express
// app.METHOD(PATH,HANDLER)
// METHOD: es un método de solicitud HTTP
// PATH: sería por donde accede al servidor
// HANDLER es la función que se ejecuta
// objeto para crear rutas en el servidor

// Settings
// Las variables de entorno son variables externas a nuestra aplicación que residen en el sistema operativo o en el contenedor de la aplicación que se está ejecutando. 
// Una variable de entorno es simplemente un nombre asignado a un valor
// la librería dotenv nos permitiría leer estas variables desde un archivo llamado .env, para posteriormente cargar las variables de entorno en la variable process.env.
// environment variables are, by convention, generally written in all caps.)
// DotEnv is a lightweight npm package that automatically loads environment variables from a .env file into the process.env object.
// Once you’ve created this file, remember that you should not push it to GitHub as it can contain sensitive data like authentication keys and passwords. 
// Add the file to .gitignore to avoid pushing it to a public repo accidentally.
// process.env.PORT || 3000 means: whatever is in the environment variable PORT, or 3000 if there’s nothing there
// environment variables are, by convention, generally written in all caps
app.set("port", process.env.PORT || 3000);


// The app.use() function is used to mount the specified middleware function (are the functions that have access to the request object and response object,
// at the path which is being specified. The middleware function is executed when the base of the requested path matches the path.
app.use("/", express.static(path.join(__dirname, "public")));


// Start server
app.listen(app.get("port"), () => {
    console.log("Server on port", app.get("port"));
    //Para detener la ejecución de la aplicación Express, en el terminal: Ctrl+C
  });


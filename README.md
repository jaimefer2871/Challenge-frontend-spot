# Frontend ReactJs Spot
Este proyecto esta desarrollado con ReactJs + Vite

## Requisitos
- NodeJS 22.9.0

## Instalacion
1. Clonar el proyecto
2. Instalar el manejador de paquetes Yarn: `npm i -g yarn`
3. Crear archivo .env con variable de entorno
4. Ejecutar `yarn`

## Ejecucion (Local)

Para ejecutarlo basta con ejecutar el comando: `yarn dev`

Eso habilitara un punto de entrada para acceder a la aplicacion:
```
yarn run v1.22.22
$ vite
Re-optimizing dependencies because lockfile has changed

  VITE v5.4.11  ready in 280 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help

```

## Ejecucion (Produccion)

1. Debemos compilar el proyecto, mediante el comando: `yarn build` . Esto generara los archivos necesarios en la carpeta *dist/*
2. Al tener ya el proyecto compilado, lo colocaremos en una carpeta conveniente para proporcionar acceso mediante apache de la siguiente forma:

Creamos un punto de conexion en la carpeta `/etc/apache/sites-availables/`

Ej: `002-frontend.conf`

```
    <VirtualHost *:7001>
    ServerAlias my-domain:7001
    DocumentRoot /var/www/dist-frontend-spot/

    ServerSignature Off

    LogLevel warn


    <Directory /var/www/dist-frontend-spot/ >
    Options Indexes FollowSymLinks MultiViews ExecCGI
        AllowOverride All
        Order allow,deny
        Allow from all
    </Directory>
</VirtualHost>

```
**\*Nota**: Para este caso concreto, se uso el puerto 7001\*

3. Luego se activa mediante el comando: `sudo a2ensite 002-frontend.conf`

4. Por ultimo, se recarga la configuracion del apache mediante el comando:
   `sudo systemctl reload apache2`

Al completar los pasos anteriores, accedemos desde el dominio que
tengamos configurado mediante la url:

`http://my-domain.com:7001`

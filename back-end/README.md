# Backend del Proyecto TFG

Este es el backend del proyecto TFG, desarrollado con Node.js, Express y MongoDB. Proporciona una API RESTful para gestionar usuarios y otros recursos necesarios para la aplicación.

## Configuración

### Variables de Entorno

Asegúrate de configurar las siguientes variables de entorno en un archivo `.env` en la raíz del proyecto:

```
PORT=5000
MONGO_URI=mongodb+srv://<usuario>:<contraseña>@cluster0.mongodb.net/Trabajo?retryWrites=true&w=majority
JWT_SECRET=supersecreto
```

### Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/TFG.git
   cd TFG/back-end
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

### Ejecución

Para iniciar el servidor de desarrollo:
```bash
npm start
```

El servidor se ejecutará en `http://localhost:5000`.

### Pruebas

Para ejecutar las pruebas:
```bash
npm test
```

## Estructura del Proyecto

- `server.js`: Punto de entrada de la aplicación.
- `src/config.js`: Configuración de la aplicación.
- `src/loaders/`: Carga de módulos y configuración de middleware.
- `src/routes/`: Definición de rutas de la API.
- `src/controllers/`: Controladores que manejan la lógica de negocio.
- `src/models/`: Modelos de datos de MongoDB.
- `src/services/`: Servicios adicionales.
- `src/test/`: Pruebas unitarias y de integración.

## Documentación de la API

La documentación de la API está disponible en `http://localhost:5000/api-docs` una vez que el servidor esté en funcionamiento. Utiliza Swagger para proporcionar una interfaz interactiva para probar los endpoints.

## Endpoints Principales

### Usuarios

- `POST /api/users/register`: Registra un nuevo usuario.
- `POST /api/users/login`: Inicia sesión un usuario.
- `GET /api/users`: Obtiene todos los usuarios.
- `GET /api/users/:id`: Obtiene un usuario por ID.
- `PUT /api/users/:id`: Actualiza un usuario por ID.
- `DELETE /api/users/:id`: Elimina un usuario por ID.

## Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un issue o un pull request para discutir cualquier cambio que desees realizar.

## Licencia

Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo `LICENSE` para más detalles.

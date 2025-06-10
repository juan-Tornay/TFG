# ANDALUPARTY

Bienvenido a **ANDALUPARTY**, una aplicación web moderna para descubrir, reservar y compartir experiencias en locales de ocio de Andalucía.

---

## Tabla de Contenidos

- [Descripción General](#descripción-general)
- [Funcionalidades Principales](#funcionalidades-principales)
- [Guía para Usuarios](#guía-para-usuarios)
- [Guía para Desarrolladores](#guía-para-desarrolladores)
- [Pruebas y Calidad](#pruebas-y-calidad)
- [Recursos y Créditos](#recursos-y-créditos)
- [Licencia](#licencia)

---

## Descripción General

ANDALUPARTY es una plataforma web que permite a los usuarios registrarse, iniciar sesión, explorar locales, añadir productos al carrito, contactar con el equipo y subir fotos a la fototeca. El objetivo es ofrecer una experiencia intuitiva y segura tanto para usuarios como para administradores.Se centra en el nnegocio de venta de entradas de discoteca.

---

## Funcionalidades Principales

- **Registro de usuarios:** Crea una cuenta con validación de datos.
- **Inicio de sesión:** Acceso seguro mediante autenticación.
- **Carrito de compras:** Añade productos y consulta tu selección.
- **Formulario de contacto:** Contacta con el equipo vía email.
- **Fototeca:** Sube y visualiza fotos de eventos o locales.
- **Panel de administración:** (Solo para administradores) Gestión avanzada de contenido y usuarios.

---

## Guía para Usuarios

### 1. Registro y Acceso

- Accede a la opción "Registrarse" y completa el formulario con tus datos.
- Recibirás mensajes de validación en tiempo real.
- Una vez registrado, inicia sesión con tu correo y contraseña.

### 2. Navegación y Búsqueda

- Utiliza la barra de navegación para explorar locales y productos.
- Filtra por ciudad, precio, valoración y otros criterios.

### 3. Carrito de Compras

- Añade productos al carrito desde las tarjetas de producto.
- Consulta y gestiona tu carrito desde el icono correspondiente.

### 4. Contacto

- Accede a la sección "Contacto" para enviar un mensaje al equipo.
- Completa el formulario y recibirás respuesta en tu correo.

### 5. Fototeca

- Sube tus fotos favoritas desde la sección "Fototeca".
- Visualiza y comparte imágenes de eventos y locales.

---

## Guía para Desarrolladores

### Requisitos Previos

- Node.js (v16+ recomendado)
- npm o yarn
- MongoDB Atlas o local
- Variables de entorno configuradas (`.env`)

### Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/TFG.git
   cd TFG
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Configura el archivo `.env` en la raíz del proyecto:
   ```
   REACT_APP_API_URL=http://localhost:5000/api
   ```

### Ejecución

- **Frontend:**  
  ```bash
  cd proyecto
  npm start
  ```
  Accede a [http://localhost:3000](http://localhost:3000)

- **Backend:**  
  ```bash
  cd back-end
  npm start
  ```
  Accede a [http://localhost:5000](http://localhost:5000)

### Estructura del Proyecto

- `/proyecto`: Código fuente del frontend (React).
- `/back-end`: Código fuente del backend (Node.js, Express, MongoDB).
- `/back-end/src/routes`: Rutas de la API.
- `/back-end/src/controllers`: Lógica de negocio.
- `/back-end/src/models`: Modelos de datos.
- `/back-end/src/services`: Servicios auxiliares.

### Documentación de la API

- Accede a la documentación interactiva en:  
  [http://localhost:5000/api-docs](http://localhost:5000/api-docs)  
  (Swagger UI)

---

## Pruebas y Calidad

- Pruebas unitarias y de integración disponibles en `/back-end/test`.
- Para ejecutar las pruebas:
  ```bash
  npm test
  ```
- Pruebas manuales recomendadas:
  - Registro y login (correcto y con errores)
  - Añadir y eliminar productos del carrito
  - Envío de mensajes de contacto
  - Subida de fotos en la fototeca

---

## Recursos y Créditos

- Imágenes y GIFs de ejemplo en `/resources`.
- Inspiración y librerías: React, Express, MongoDB, Swagger, etc.

---

## Licencia

Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo `LICENSE` para más detalles.

---


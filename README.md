# TFG - Plataforma de Gestión y Venta de Productos

Bienvenido al repositorio de la aplicación desarrollada como Trabajo de Fin de Grado (TFG). Esta plataforma permite la gestión, visualización y venta de productos, integrando funcionalidades de autenticación, filtrado avanzado, carrito de compra y comunicación con el usuario.

---

## 📚 Índice

- [Introducción](#introducción)
- [Características Principales](#características-principales)
- [Documentación para el Usuario](#documentación-para-el-usuario)
- [Documentación para el Desarrollador](#documentación-para-el-desarrollador)
- [Instalación y Puesta en Marcha](#instalación-y-puesta-en-marcha)
- [Pruebas](#pruebas)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Contribución](#contribución)
- [Contacto](#contacto)

---

## Introducción

Esta aplicación web está diseñada para ofrecer una experiencia de usuario intuitiva y eficiente en la gestión y compra de productos. Incluye autenticación segura, filtros avanzados, carrito de compra y soporte para recuperación de contraseña.

---

## Características Principales

- Autenticación de usuarios (registro, login, recuperación de contraseña)
- Pantalla de inicio con navegación, listado dinámico y tarjetas de producto
- Filtros avanzados por categoría, precio, marca y valoración
- Carrito de compra con resumen en tiempo real
- Notificaciones de éxito y error
- Interfaz adaptable y moderna

---

## Documentación para el Usuario

### Primeros Pasos

1. **Registro:** Accede a la pantalla de registro, introduce tus datos y sigue las validaciones en tiempo real.
2. **Inicio de sesión:** Ingresa tu correo y contraseña para acceder a la plataforma.
3. **Recuperación de contraseña:** Si olvidaste tu contraseña, utiliza la opción de recuperación para recibir instrucciones por correo.
4. **Navegación:** Utiliza la barra de navegación para explorar productos, aplicar filtros y gestionar tu carrito.

### Funcionalidades

- **Filtrar productos:** Usa la barra de filtros para refinar la búsqueda según tus preferencias.
- **Añadir al carrito:** Haz clic en "Añadir al carrito" en cualquier producto para agregarlo a tu compra.
- **Resumen de carrito:** Consulta el resumen en el icono del carrito y procede al pago cuando estés listo.
- **Notificaciones:** Recibe alertas visuales sobre el estado de tus acciones (éxito o error).

---

## Documentación para el Desarrollador

### Estructura del Proyecto

```
/src
  /components
    Navbar.jsx
    HeroSection.jsx
    ContentList.jsx
    ContentCard.jsx
    ProductFilter.jsx
    ProductCard.jsx
    CartPreview.jsx
  /pages
    Home.jsx
    Login.jsx
    Register.jsx
    ForgotPassword.jsx
  /resources
    (imágenes, diagramas, gifs de pruebas)
  App.jsx
  index.js
```

### Instalación y Puesta en Marcha

1. Clona el repositorio:
   ```bash
   git clone https://github.com/tuusuario/TFG.git
   cd TFG
   ```
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Configura las variables de entorno:  
   Crea un archivo `.env` con las claves necesarias (API, base de datos, etc).

4. Inicia la aplicación:
   ```bash
   npm start
   ```

### Scripts Disponibles

- `npm start` - Inicia la aplicación en modo desarrollo.
- `npm run build` - Genera la versión de producción.
- `npm test` - Ejecuta las pruebas unitarias.

---

## Pruebas

Se han implementado pruebas manuales y automáticas para validar las funcionalidades principales:

- **Inicio de sesión correcto:** Redirección y notificación de éxito.
- **Error en inicio de sesión:** Notificación de error.
- **Registro con validaciones:** Mensajes de error en tiempo real y notificación de éxito.
- **Recuperación de contraseña:** Mensajes de confirmación y error según el caso.

Consulta la carpeta `/resources` para ver los GIFs y diagramas de las pruebas realizadas.

---

## Tecnologías Utilizadas

- **Frontend:** React, JavaScript, CSS Modules
- **Backend:** (Indicar si aplica: Node.js, Express, etc.)
- **Base de datos:** (Indicar si aplica: MongoDB, MySQL, etc.)
- **Autenticación:** JWT, OAuth (si aplica)
- **Otros:** OpenAI API (para funcionalidades de IA, si corresponde)

---

## Contribución

¿Quieres contribuir? ¡Gracias! Por favor, sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una rama para tu funcionalidad (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza tus cambios y haz commit (`git commit -am 'Añade nueva funcionalidad'`).
4. Haz push a la rama (`git push origin feature/nueva-funcionalidad`).
5. Abre un Pull Request.

---

## Contacto

- Autor: [Tu Nombre]
- Email: [tu.email@ejemplo.com]
- LinkedIn: [Tu perfil de LinkedIn]

---

© 2024 - Trabajo de Fin de Grado. Todos los derechos reservados.


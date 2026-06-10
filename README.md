# TP4 - API de Gestión de Alumnos

## Integrantes

- Agustín Gonzalez
- Manuel Aguilar

## Comisión / Grupo

- Grupo: Grupo 21

---

# Descripción del Proyecto

Este proyecto consiste en el desarrollo de una API REST utilizando Node.js, Express y TypeScript para la gestión de alumnos.

La aplicación permite consultar, crear, modificar y eliminar alumnos almacenados en archivos JSON.

Además, el proyecto incorpora herramientas de desarrollo como Nodemon, Husky, Docker y Render para facilitar el despliegue y mantenimiento de la aplicación.

---

# Tecnologías Utilizadas

- Node.js
- Express
- TypeScript
- Nodemon
- Husky
- Docker
- Render
- Postman
- Git
- GitHub

---

# Metodología de Trabajo

Se utilizó Git y GitHub para el control de versiones.

Cada integrante trabajó en una rama independiente:

- Rama `agustin`
- Rama `manuel`

Los cambios fueron integrados mediante commits y pull requests antes de ser incorporados a la rama principal del proyecto.

---

# Flujo de Trabajo Git

1. Cada integrante trabajó en una rama propia.
2. Los cambios se subieron mediante commits.
3. Se realizaron Pull Requests.
4. Los cambios se integraron en la rama `dev`.
5. Finalmente se realizó el merge a `main` para la entrega.

---

# Estructura del Proyecto

```text
controllers/
core/
data/
models/
routes/
app.js
Dockerfile
package.json
README.md
```

---

# División de Tareas

## Agustín

- Configuración inicial del proyecto.
- Instalación de dependencias.
- Configuración de TypeScript.
- Dockerización.
- Deploy en Render.
- Documentación.

## Manuel

- Desarrollo de modelos.
- Desarrollo de endpoints.
- Validaciones.
- Pruebas mediante Postman.

---

# Funciones Principales

## getAlumnoAll()

Obtiene todos los alumnos almacenados en el archivo JSON.

Respuestas:

- 200 OK
- 500 Internal Server Error

---

## getAlumnoById()

Obtiene un alumno específico a partir de su legajo.

Respuestas:

- 200 OK
- 404 Not Found
- 500 Internal Server Error

---

## createAlumno()

Crea un nuevo alumno y lo almacena en el archivo JSON.

Respuestas:

- 201 Created
- 400 Bad Request
- 409 Conflict
- 500 Internal Server Error

---

## updateAlumno()

Actualiza los datos de un alumno existente.

Respuestas:

- 200 OK
- 404 Not Found
- 500 Internal Server Error

---

## deleteAlumno()

Elimina un alumno del archivo JSON.

Respuestas:

- 200 OK
- 404 Not Found
- 500 Internal Server Error

---

# Endpoints

## GET /alumnos

Obtiene el listado completo de alumnos.

## GET /alumnos/:id

Obtiene un alumno específico mediante su legajo.

## POST /alumnos

Crea un nuevo alumno.

## PUT /alumnos/:id

Modifica un alumno existente.

## DELETE /alumnos/:id

Elimina un alumno existente.

---

# Ejemplo de Alumno

```json
{
  "legajo": 10001,
  "nombre": "Mora",
  "apellido": "García",
  "email": "m.garcia@facultad.edu.ar",
  "fechaAlta": "2026-03-02",
  "modificacion": "2026-03-02",
  "isActive": true
}
```

---

# Docker

Construcción de imagen:

```bash
docker build -t tp4-alumnos .
```

Ejecución del contenedor:

```bash
docker run -p 3000:3000 tp4-alumnos
```

---

# Deploy

API desplegada en Render:

https://tp3-ejemplo-nodejs-wdeb.onrender.com/alumnos

---

# Documentación Postman

Las pruebas funcionales de la API fueron realizadas utilizando Postman.

La colección exportada utilizada para las pruebas se encuentra en:

```text
postman/
```

Además, se incorporaron capturas de pantalla de las ejecuciones realizadas para cada endpoint en la carpeta:

```text
capturas/
```

La colección y las evidencias incluyen pruebas para todos los endpoints disponibles:

- GET /alumnos
- GET /alumnos/:id
- POST /alumnos
- PUT /alumnos/:id
- DELETE /alumnos/:id

---

# Conclusiones

Durante el desarrollo del trabajo práctico se aplicaron conceptos de:

- Arquitectura MVC.
- Programación Orientada a Objetos.
- APIs REST.
- Node.js y Express.
- Docker.
- Render.
- Git y GitHub.
- Postman.

Se logró desarrollar una API funcional para la gestión de alumnos, desplegada en la nube y accesible mediante endpoints REST.

# TP4 - API de Gestión de Alumnos

## Integrantes

- Agustín ****\_\_****
- Manuel ****\_\_****

## Comisión / Grupo

- Grupo: **\_\_\_**

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

---

# Metodología de Trabajo

Se utilizó Git y GitHub para el control de versiones.

Cada integrante trabajó en una rama independiente:

- Rama `agustin`
- Rama `manuel`

Los cambios fueron integrados mediante commits y pull requests antes de ser incorporados a la rama principal del proyecto.

---

# Estructura del Proyecto

```text
controllers/
core/
data/
models/
routes/
app.js
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

# Deploy

Pendiente.

---

# Documentación Postman

Pendiente.

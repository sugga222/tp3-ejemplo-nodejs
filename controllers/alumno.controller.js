const fs = require('fs').promises

const getAlumnoAll = async (req, res) => {
  try {
    const data = await fs.readFile('./data/alumnos.json', 'utf8')
    const alumnos = JSON.parse(data)

    return res.status(200).json(alumnos)
  } catch (error) {
    console.log(error)
    return res
      .status(500)
      .json({ error: 'No se pudieron obtener los datos de los alumnos' })
  }
}

const getAlumnoById = async (req, res) => {
  try {
    const data = await fs.readFile('./data/alumnos.json', 'utf8')
    const alumnos = JSON.parse(data)

    const { legajo } = req.params

    const legajoId = alumnos.find(
      (a) => a.legajo /* .toString() */ === Number(legajo)
    )

    if (!legajoId) {
      return res
        .status(404)
        .json({ msg: `No existe el alumno con el legajo ${legajo}` })
    }

    return res.status(200).json(legajoId)
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      error: `No se pudo obtener el detalle del alumno con legajo n° ${legajo}`
    })
  }
}

const createAlumno = async (req, res) => {
  try {
    const data = await fs.readFile('./data/alumnos.json', 'utf8')
    const alumnos = JSON.parse(data)

    const { legajo, nombre, apellido, email, isActive } = req.body

    // Validación básica
    if (!legajo || !nombre || !apellido || !email) {
      return res.status(400).json({
        error: 'Faltan datos obligatorios'
      })
    }

    // Verificar legajo repetido
    const existe = alumnos.find((a) => a.legajo === Number(legajo))

    if (existe) {
      return res.status(409).json({
        error: 'Ya existe un alumno con ese legajo'
      })
    }

    const fechaActual = new Date().toISOString().split('T')[0]

    const nuevoAlumno = {
      legajo: Number(legajo),
      nombre,
      apellido,
      email,
      fechaAlta: fechaActual,
      modificacion: fechaActual,
      isActive
    }

    alumnos.push(nuevoAlumno)

    await fs.writeFile('./data/alumnos.json', JSON.stringify(alumnos, null, 2))

    return res.status(201).json(nuevoAlumno)
  } catch (error) {
    console.log(error)

    return res.status(500).json({
      error: 'No se pudo crear el alumno'
    })
  }
}

const updateAlumno = async (req, res) => {
  try {
    const data = await fs.readFile('./data/alumnos.json', 'utf8')
    const alumnos = JSON.parse(data)

    const { legajo } = req.params

    const indice = alumnos.findIndex((a) => a.legajo === Number(legajo))

    if (indice === -1) {
      return res.status(404).json({
        error: `No existe el alumno con legajo ${legajo}`
      })
    }

    const fechaActual = new Date().toISOString().split('T')[0]

    alumnos[indice] = {
      ...alumnos[indice],
      ...req.body,
      legajo: alumnos[indice].legajo,
      modificacion: fechaActual
    }

    await fs.writeFile('./data/alumnos.json', JSON.stringify(alumnos, null, 2))

    return res.status(200).json(alumnos[indice])
  } catch (error) {
    console.log(error)

    return res.status(500).json({
      error: 'No se pudo actualizar el alumno'
    })
  }
}

const deleteAlumno = async (req, res) => {
  try {
    const data = await fs.readFile('./data/alumnos.json', 'utf8')
    const alumnos = JSON.parse(data)

    const { legajo } = req.params

    const indice = alumnos.findIndex((a) => a.legajo === Number(legajo))

    if (indice === -1) {
      return res.status(404).json({
        error: `No existe el alumno con legajo ${legajo}`
      })
    }

    const eliminado = alumnos[indice]

    alumnos.splice(indice, 1)

    await fs.writeFile('./data/alumnos.json', JSON.stringify(alumnos, null, 2))

    return res.status(200).json({
      mensaje: 'Alumno eliminado correctamente',
      alumno: eliminado
    })
  } catch (error) {
    console.log(error)

    return res.status(500).json({
      error: 'No se pudo eliminar el alumno'
    })
  }
}

module.exports = {
  getAlumnoAll,
  getAlumnoById,
  createAlumno,
  updateAlumno,
  deleteAlumno
}

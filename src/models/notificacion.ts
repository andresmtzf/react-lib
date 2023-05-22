interface Notificacion {
  idNotificacion: string
  idUsuario: string
  descripcion: string
  fechaCreacion: string
  esLeida: boolean
  esSeleccionada?: boolean
}

export default Notificacion

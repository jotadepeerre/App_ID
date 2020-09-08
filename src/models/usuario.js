export default class usuario {
  constructor({ nombre, apellidos }) {
    this.id = Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1)
    this.nombre = nombre
    this.apellidos = apellidos
  }
  getUserName() {
    return this.nombre
  }
}
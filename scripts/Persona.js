"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0;
class Persona {
    constructor(nombre = '', cedula = '', telefono = '', edad = '', myLicencia) {
        this.nombre = nombre;
        this.cedula = cedula;
        this.telefono = telefono;
        this.edad = edad;
        this.myLicencia = myLicencia;
        this.misVehiculos = [];
    }
    // Sobreescritura del constructor
    get Nombre() {
        return this.nombre;
    }
    get Cedula() {
        return this.cedula;
    }
    get Telefono() {
        return this.telefono;
    }
    get Edad() {
        return this.edad;
    }
    /*
    get Mylicencia(): LicenciaConduccion {
      if (this.myLicencia !== undefined) {
        return this.myLicencia;
      } else {
        console.log("Licencia indefinida");
        return undefined; // Otra opción es devolver un valor por defecto en caso de licencia indefinida
      }
    }
    */
    set Nombre(e) {
        this.nombre = e;
    }
    set Cedula(e) {
        this.cedula = e;
    }
    set Telefono(e) {
        this.telefono = e;
    }
    set Edad(e) {
        this.edad = e;
    }
    set Mylicencia(e) {
        this.myLicencia = e;
    }
}
exports.Persona = Persona;

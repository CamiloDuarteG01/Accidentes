"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vehiculo = void 0;
class Vehiculo {
    constructor(propietario, marca, modelo, color, ruedas) {
        this.propietario = propietario;
        this.marca = marca;
        this.modelo = modelo;
        this.color = color;
        this.ruedas = ruedas;
        this.reportes = [];
    }
}
exports.Vehiculo = Vehiculo;

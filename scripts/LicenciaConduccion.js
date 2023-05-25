"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LicenciaConduccion = exports.TiposLicencia = void 0;
var TiposLicencia;
(function (TiposLicencia) {
    TiposLicencia["CategoriaA1"] = "Categor\u00EDa A1";
    TiposLicencia["CategoriaA2"] = "Categor\u00EDa A2";
    TiposLicencia["CategoriaB1"] = "Categor\u00EDa B1";
    TiposLicencia["CategoriaB2"] = "Categor\u00EDa B2";
    TiposLicencia["CategoriaB3"] = "Categor\u00EDa B3";
    TiposLicencia["CategoriaC1"] = "Categor\u00EDa C1";
    TiposLicencia["CategoriaC2"] = "Categor\u00EDa C2";
    TiposLicencia["CategoriaC3"] = "Categor\u00EDa C3";
})(TiposLicencia = exports.TiposLicencia || (exports.TiposLicencia = {}));
class LicenciaConduccion {
    constructor(fechaExpedicion, vigencia, persona, tipoDeLicencia) {
        this._fechaExpedicion = fechaExpedicion;
        this._tipoDeLicencia = tipoDeLicencia;
        this._vigencia = vigencia;
        this._persona = persona;
    }
    static fromFechaVigenciaPersona(fechaExpedicion, vigencia, persona) {
        return new LicenciaConduccion(fechaExpedicion, vigencia, persona);
    }
    get tipoDeLicencia() {
        return this._tipoDeLicencia;
    }
    set tipoDeLicencia(tipo) {
        this._tipoDeLicencia = tipo;
    }
    get fechaExpedicion() {
        return this._fechaExpedicion;
    }
    set fechaExpedicion(fecha) {
        this._fechaExpedicion = fecha;
    }
    get vigencia() {
        return this._vigencia;
    }
    set vigencia(vigencia) {
        this._vigencia = vigencia;
    }
    get persona() {
        return this._persona;
    }
    set persona(persona) {
        this._persona = persona;
    }
}
exports.LicenciaConduccion = LicenciaConduccion;

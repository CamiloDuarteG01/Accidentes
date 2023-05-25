import { Persona } from './Persona.js';

export enum TiposLicencia {
  CategoriaA1 = 'Categoría A1',
  CategoriaA2 = 'Categoría A2',
  CategoriaB1 = 'Categoría B1',
  CategoriaB2 = 'Categoría B2',
  CategoriaB3 = 'Categoría B3',
  CategoriaC1 = 'Categoría C1',
  CategoriaC2 = 'Categoría C2',
  CategoriaC3 = 'Categoría C3',
}

export class LicenciaConduccion {
  private _tipoDeLicencia?: TiposLicencia;
  private _fechaExpedicion: Date;
  private _vigencia: Date;
  private _persona: Persona;

  constructor(
    fechaExpedicion: Date,
    vigencia: Date,
    persona: Persona,
    tipoDeLicencia?: TiposLicencia
  ) {
    this._fechaExpedicion = fechaExpedicion;
    this._tipoDeLicencia = tipoDeLicencia;
    this._vigencia = vigencia;
    this._persona = persona;
  }

  static fromFechaVigenciaPersona(
    fechaExpedicion: Date,
    vigencia: Date,
    persona: Persona
  ): LicenciaConduccion {
    return new LicenciaConduccion(fechaExpedicion, vigencia, persona);
  }

  get tipoDeLicencia(): TiposLicencia | undefined {
    return this._tipoDeLicencia;
  }

  set tipoDeLicencia(tipo: TiposLicencia | undefined) {
    this._tipoDeLicencia = tipo;
  }

  get fechaExpedicion(): Date {
    return this._fechaExpedicion;
  }

  set fechaExpedicion(fecha: Date) {
    this._fechaExpedicion = fecha;
  }

  get vigencia(): Date {
    return this._vigencia;
  }

  set vigencia(vigencia: Date) {
    this._vigencia = vigencia;
  }

  get persona(): Persona {
    return this._persona;
  }

  set persona(persona: Persona) {
    this._persona = persona;
  }
}




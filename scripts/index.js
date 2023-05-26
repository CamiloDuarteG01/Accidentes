import { Persona } from "./Persona.js";
import { LicenciaConduccion, TiposLicencia } from "./LicenciaConduccion.js";
let fechaExpedicion = new Date(2020, 1, 10);
let vigencia = new Date(2024, 1, 10);
let tipoLicencia = TiposLicencia.CategoriaA1;
const persona1 = new Persona('Camilo', '1203', '3112542', '14');
let objLicencia = new LicenciaConduccion(fechaExpedicion, vigencia, persona1, tipoLicencia);
persona1.Mylicencia = objLicencia;
console.log(`La  persona con Nombre ${persona1.Nombre} y Cedula${persona1.Cedula} tiene el tipo de licencia ${persona1.Mylicencia.tipoDeLicencia}`);
//# sourceMappingURL=index.js.map
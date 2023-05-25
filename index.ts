import { Persona } from "./Persona";
import { LicenciaConduccion,TiposLicencia } from "./LicenciaConduccion";

let fechaExpedicion = new Date(2020,1,10);
let vigencia = new Date(2024,1,10);
let tipoLicencia: TiposLicencia = TiposLicencia.CategoriaA1;

const persona1 = new Persona('Camilo', '1203', '3112542', '14');
let objLicencia = new LicenciaConduccion(fechaExpedicion, vigencia, persona1, tipoLicencia);



console.log(`La  persona con Nombre ${objLicencia.persona.Nombre} y Cedula${objLicencia.persona.Cedula} tiene el tipo de licencia ${objLicencia.tipoDeLicencia}`)
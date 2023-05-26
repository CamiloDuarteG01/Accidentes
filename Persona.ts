import { LicenciaConduccion } from "./LicenciaConduccion";
import { Vehiculo } from "./Vehiculo.js";

export class Persona {
  private nombre: string;
  private cedula: string;
  private telefono: string;
  private edad: string;

  misVehiculos: Vehiculo[];
  private myLicencia?: LicenciaConduccion;

  constructor(
    nombre: string = '',
    cedula: string = '',
    telefono: string = '',
    edad: string = '',
    myLicencia?: LicenciaConduccion
  ) {
    this.nombre = nombre;
    this.cedula = cedula;
    this.telefono = telefono;
    this.edad = edad;
    this.myLicencia = myLicencia;
    this.misVehiculos = [];
  }
 
  // Sobreescritura del constructor


  get Nombre(): string {
    return this.nombre;
  }
  get Cedula(): string {
    return this.cedula;
  }
  get Telefono(): string {
    return this.telefono;
  }
  get Edad(): string {
    return this.edad;
  }
  
  get Mylicencia(): LicenciaConduccion | undefined{
    return this.myLicencia;
  
  }
  

  set Nombre(e: string) {
    this.nombre = e;
  }
  set Cedula(e: string) {
    this.cedula = e;
  }
  set Telefono(e: string) {
    this.telefono = e;
  }
  set Edad(e: string) {
    this.edad = e;
  }
  set Mylicencia(e: LicenciaConduccion |undefined) {
    this.myLicencia = e;
  }
}

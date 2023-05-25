import { Persona } from "./Persona"
import { Accidente } from "./Accidente"
export class Vehiculo{
    marca : string
    modelo : string
    color : string
    ruedas : number
    propietario : Persona

    reportes : Accidente[]
    constructor(propietario :Persona,marca : string,modelo : string,color : string,ruedas : number){
        this.propietario=propietario
        this.marca = marca
        this.modelo = modelo
        this.color = color
        this.ruedas = ruedas
        this.reportes = []
    }
}
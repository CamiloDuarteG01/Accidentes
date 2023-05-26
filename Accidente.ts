import { Vehiculo } from "./Vehiculo.js"
export class Accidente  {
    fecha : Date
    descrpcion : string
    severidad : number
    
    totalVehiculosInvolucrados :number//esta es mi forma de implementar la asociacion 1..*

    constructor(fecha : Date=new Date,descrpcion : string,severidad : number){
        this.fecha= fecha
        this.descrpcion = descrpcion
        this.severidad = severidad
        this.totalVehiculosInvolucrados = 0
    }
   
    sumaInvolucrados(numeroVehiculosInvolucrados :Vehiculo[]) :number {
        let totalInvolucrados :number=0;
        numeroVehiculosInvolucrados.forEach(element => {
            totalInvolucrados+=1;
        })
        return totalInvolucrados+=1;
     }
    //
    //no se si aplicar un rest y tampoco como usarlo, estoy confuso
     
}
 
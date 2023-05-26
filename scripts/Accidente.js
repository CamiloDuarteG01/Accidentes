export class Accidente {
    constructor(fecha = new Date, descrpcion, severidad) {
        this.fecha = fecha;
        this.descrpcion = descrpcion;
        this.severidad = severidad;
        this.totalVehiculosInvolucrados = 0;
    }
    sumaInvolucrados(numeroVehiculosInvolucrados) {
        let totalInvolucrados = 0;
        numeroVehiculosInvolucrados.forEach(element => {
            totalInvolucrados += 1;
        });
        return totalInvolucrados += 1;
    }
}
//# sourceMappingURL=Accidente.js.map
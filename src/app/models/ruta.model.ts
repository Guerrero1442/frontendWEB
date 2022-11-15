import { Conductor } from "./conductor.model";

export class Ruta {

	// constructor(id:number,numero_bus:number,fecha_hora:string,cantidad_sillas:number,dataSetConductores:[]){
	// 	this.id=id;
	// 	this.numero_bus=numero_bus;
	// 	this.fecha_hora=fecha_hora;
	// 	this.cantidad_sillas=cantidad_sillas;
	// 	this.dataSetConductores=dataSetConductores
	// }

	id:number=0;
	numero_bus:number=0;
	fecha_hora:string="";
	cantidad_sillas:number=0;
	dataSetConductores:Conductor[];
}
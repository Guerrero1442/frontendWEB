import { Component, OnInit } from '@angular/core';
import { Conductor } from 'src/app/models/conductor.model';
import { Ruta } from 'src/app/models/ruta.model';
import { ConductoresService } from 'src/app/services/conductores.service';
import { RutasService } from 'src/app/services/rutas.service';

@Component({
  selector: 'app-ruta-add',
  templateUrl: './ruta-add.component.html',
  styleUrls: ['./ruta-add.component.css']
})
export class RutaAddComponent implements OnInit {
  titulo = "Agregar ruta"
  conductoresSet:Conductor[];
  ruta=new Ruta();
  submitted=false;
  msgError='';

  constructor(private rutaService:RutasService, private conductoresService:ConductoresService) { 
    this.getConductores()
  }

  ngOnInit(): void {
  }

  existPk(val:number):void {
    this.rutaService.get(val).subscribe(
      data => {
        console.log(data);
      },
      error => {
        console.log(error);
      }
    )
  }

  saveRuta():void {
    const data = {
      id: this.ruta.id,
      numero_bus: this.ruta.numero_bus,
      fecha_hora: this.ruta.fecha_hora,
      cantidad_sillas: this.ruta.cantidad_sillas,
      dataSetConductores: this.ruta.dataSetConductores
    }
    console.log(this.ruta.dataSetConductores)

    this.rutaService.create(data).subscribe(
      data => {
        this.submitted=true;
        console.log(data)
      },
      error => {
        this.msgError = error.message + ' \n ' + error.error.message;
        console.log(error)
      }
    )
  }

  newRuta() {
    this.submitted = false;
    this.ruta.id = 0;
    this.ruta.numero_bus = 0;
    this.ruta.fecha_hora = "";
    this.ruta.cantidad_sillas = 0;
    this.ruta.dataSetConductores = [];
  }

  getConductores() {
    this.conductoresService.getAll().subscribe(
      data => {
        this.conductoresSet = data;
        console.log(data);
      },
      error => {
        console.log(error)
      }
    )
  }


}

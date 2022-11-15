import { Component, OnInit } from '@angular/core';
import { Conductor } from 'src/app/models/conductor.model';
import { ConductoresService } from 'src/app/services/conductores.service';

@Component({
  selector: 'app-conductor-add',
  templateUrl: './conductor-add.component.html',
  styleUrls: ['./conductor-add.component.css']
})
export class ConductorAddComponent implements OnInit {
  titulo="Lista de conductores"
  conductor = new Conductor();
  submitted = false
  msgError = '';

  constructor(private conductorService:ConductoresService) { }

  existsPk(val:number):void {
    this.conductorService.get(val).subscribe(
      data => {
        console.log(data)
      },
      error => {
        console.log(error)
      }
    )
  }

  saveConductor():void {
    const data = {
      id: this.conductor.id,
      nombre: this.conductor.nombre,
      fecha_ingreso: this.conductor.fecha_ingreso,
    };
    
    this.conductorService.create(data).subscribe(
      data => {
        this.submitted=true;
        console.log(data);
      },
      error => {
        this.msgError = error.message + ' \n ' + error.error.message;
        console.log(error)
      }
    )
  }

  newConductor() {
    this.submitted = false;
    this.conductor.id = 0;
    this.conductor.nombre ="";
    this.conductor.fecha_ingreso = "";
  }
  ngOnInit(): void {
  }


}

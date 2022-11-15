import { Component, OnInit } from '@angular/core';
import { Conductor } from 'src/app/models/conductor.model';
import { Ruta } from 'src/app/models/ruta.model';
import { RutasService } from 'src/app/services/rutas.service';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConductoresService } from 'src/app/services/conductores.service';

@Component({
  selector: 'app-lista-rutas',
  templateUrl: './lista-rutas.component.html',
  styleUrls: ['./lista-rutas.component.css']
})
export class ListaRutasComponent implements OnInit {
  rutasSet:Ruta[];
  conductoresSet:Conductor[];
  idRuta:number;
  currentRuta:Ruta;
  msgError='';
  closeModal:string;



  constructor(private rutaService:RutasService,private conductoresService:ConductoresService,private modalService:NgbModal) {
    this.getConductores()
    this.refreshList()
   }
  ngOnInit(): void {
  }

  triggerModal(content:any,val:Ruta) {
    this.currentRuta=val;
    this.retrieveRuta(this.currentRuta.id)
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((res)=> {
      this.closeModal=`Closed with: ${res}`; 
    }, (res) => {
      this.closeModal = `Dismissed ${this.getDismissReason(res)}`
    })
  }

  private getDismissReason(reason:any):string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  retrieveRutas():void {
    this.rutaService.getAll().subscribe(
      data => {
        this.rutasSet=data
        console.log(data)
      },
      error => {
        console.log(error)
      }
    )
  }

  retrieveRuta(val:number):void {
    this.rutaService.get(val).subscribe(
      data => {
        this.currentRuta=data;
        console.log(data)
      },
      error => {
        this.msgError = error.message + ' \n ' + error.error.message;
        console.log(error)
      }
    )
  }

  updateRuta():void {
    this.rutaService.update(this.currentRuta.id, this.currentRuta).subscribe(
      data => {
        this.refreshList();
        console.log(data)
      },
      error => {
        console.log
      }
    )
  }

  deleteRuta(val1:number):void {
    this.rutaService.delete(val1).subscribe(
      data => {
        this.refreshList();
        console.log(data);
      },
      error => {
        console.log(error);
      }
    )
  }

  refreshList():void {
    this.retrieveRutas();
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

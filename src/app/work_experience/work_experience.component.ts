import { Component, OnInit } from '@angular/core';
import { WorkExperienceService } from '../services/work_experience.service';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work_experience.component.html',
  styleUrls: ['./work_experience.component.css']
})
export class WorkExperienceComponent implements OnInit{
  constructor( private workExperienceService : WorkExperienceService){}

  puesto : string = "fake range";
  empresa :string = "fake company" ;
  fecha_ini : string = "fake_date_start";
  fecha_fin : string = "fake_date_end";
  ciudad : string = "fake city";
  pais : string = "fake country";

  logros: any[] = [];
  //data: [] = [];

  /* ngOnInit(): void {
    this.workExperienceService.getwork_experience()
    .subscribe((data:any) => {
      console.log(data[0]);
      this.experience=data[0];
    });
  }
} */

  ngOnInit(): void {
    this.workExperienceService.getwork_experience()
    .subscribe( (data: any) => {
      //console.log(data);
      
      this.puesto = data[0].puesto;
      this.empresa=data[0].empresa;
      this.fecha_ini=data[0].fecha_ini;
      this.fecha_fin=data[0].fecha_fin;
      this.ciudad=data[0].ciudad;
      this.pais=data[0].pais;
      this.logros=data[0].logros;
     },
     error => {
       console.log("Error", error);
   /*  this.workExperienceService = data[0];
    this.workExperienceService = data[1]; */
  /*   console.log(data[0]);
    console.log(data[1]); */
    } 
    );
  }
}
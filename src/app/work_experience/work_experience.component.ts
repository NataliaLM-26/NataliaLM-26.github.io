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

  works: any[]=[];

  ngOnInit(): void {
    this.workExperienceService.getwork_experience()
    .subscribe( (data: any) => {
      this.works = data.map((campo: any) => {
        return {
          puesto: campo.puesto,
          empresa: campo.empresa,
          fecha_ini: campo.fecha_ini,
          fecha_fin: campo.fecha_fin,
          ciudad: campo.ciudad,
          pais : campo.pais,
          logros: campo.logros
        };
      });
    });
  }
}
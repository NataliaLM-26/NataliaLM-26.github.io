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
  logros: string = "fake";

  ngOnInit(): void {
    this.workExperienceService.getwork_experience()
    .subscribe( (data: any) => {
      console.log(data);
      this.puesto = data.puesto;
      this.empresa=data.empresa;
      this.fecha_ini=data.fecha_ini;
      this.fecha_fin=data.fecha_fin;
      this.ciudad=data.ciudad;
      this.pais=data.pais;
      this.logros=data.logros;
    });
  }

}

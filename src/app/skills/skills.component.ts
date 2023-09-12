import { Component,OnInit } from '@angular/core';
import { SkillsService } from '../services/skills.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  constructor(private skillsService: SkillsService){}

  habilidades : any[] = [];

ngOnInit(): void {
  this.skillsService.getskills()
  .subscribe( (data: any) => {
    console.log(typeof(data));
    this.habilidades = data.map((campo: any) => {
      return {
        skills: campo.skills
      };
    });
    });
  }

}

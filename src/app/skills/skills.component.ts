import { Component,OnInit } from '@angular/core';
import { SkillsService } from '../services/skills.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  constructor(private skillsService: SkillsService){}

  skills : any[] = [];

ngOnInit(): void {
  this.skillsService.getskills()
  .subscribe(data=>{
    this.skills=data["skills"];
      });
  }

}

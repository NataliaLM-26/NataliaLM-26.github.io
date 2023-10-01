import { Component, OnInit } from '@angular/core';
import { InterestsService } from '../services/interests.service';

@Component({
  selector: 'app-interests',
  templateUrl: './interests.component.html',
  styleUrls: ['./interests.component.css']
})
export class InterestsComponent implements OnInit{
  constructor(private interestsService: InterestsService){}

  interests : any[] = [];

  ngOnInit(): void {
    this.interestsService.getinterests()
    .subscribe(data => {
      this.interests= data["interests"];
    });
  }
}

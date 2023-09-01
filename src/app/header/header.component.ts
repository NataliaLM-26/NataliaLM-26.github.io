import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
    name : string = "Natalia López Miranda";
    titulo : string  = "ISOF";
    objetivo : string = "Frontend Developer";
    foto : string = "fake photo";
    email : string = "t.natalialm@gmail.com";
    celular : string = "2711355028";
    ubicacion : string =  "Fortín, Veracruz";
    redsocial : string = "NatLM";
}

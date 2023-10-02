import { Component, OnInit } from '@angular/core';
import { CertificatesService } from '../services/certificates.service';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.css']
})
export class CertificatesComponent implements OnInit{

  constructor (private certificatesService : CertificatesService){}

  certificates : any[] = [];

  ngOnInit(): void {
    this.certificatesService.getcertificates()
    .subscribe(data=>{
      this.certificates=data["certificates"];
        });
    }

}

import { Component, OnInit } from '@angular/core';
import { ProviderService } from './../services/provider.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-provider',
  standalone: false,

  templateUrl: './add-provider.component.html',
  styleUrl: './add-provider.component.css'
})
export class AddProviderComponent implements OnInit {
  provider: any;
  constructor(private service: ProviderService, private router: Router) { }
  ngOnInit() {
  }
  createProvider(myform: any) {
    this.service.createProvider(myform).subscribe(
      response => {
        console.log(response);
        this.router.navigate(['listProvider']);
      }
    );
    
  }
}
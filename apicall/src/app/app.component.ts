import { Component } from '@angular/core';
import { ApiService
} from './api.service';
import {
  OnInit,
  AfterViewInit,
  ViewChild
} from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
 
  constructor(private ApiService: ApiService ) {} 
  title = 'apicall';
  lastName: string; 
  button: boolean = false;
  nameReturned: string; 
  yes: boolean = true; 
  ngOnInit(){

  }

  onClick(){
    this.button = true; 
    this.nameReturned = "Last name is returning!"
    
    this.ApiService.getLastName().subscribe(data=>{
     console.log(data);
     setTimeout(()=>{
     this.button = false;

    }, 500)
     this.lastName = JSON.stringify(data.lastName);
     this.lastName = JSON.parse(this.lastName); 
     if(data){
       this.yes = false; 
     }
    },
    err=>{
      this.nameReturned ="Error getting last name. Please contact Support."
      console.log(err);
      this.button = true; 
    })
  }
}

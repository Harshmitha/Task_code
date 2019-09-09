import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// export class AppComponent {
//   title = 'harsh';
// }
export class AppComponent {
  
  title = 'angular examples';
    
    email="";
    h:boolean=false;
  
    users=[{
      id:'223',
      email:'abc@gmail.com'
    },{
      id:'2234',
      email:'xyz@hotmail.com'
    },{
      id:'12345',
      email:'jsgsbh@kk.com'
    },{
      id:'123456',
      email:'test@gmail.com'
    }]
  
    setIndex(ii){
      this.h=ii;
      console.log
    }
  }
  



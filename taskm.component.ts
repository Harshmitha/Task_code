import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { ApiservService } from '../apiserv.service';

@Component({
  selector: 'app-taskm',
  templateUrl: './taskm.component.html',
  styleUrls: ['./taskm.component.css']
})
export class TaskmComponent implements OnInit {
  store2:FormGroup;
  constructor(private router:Router,private save2: FormBuilder, private http: ApiservService) {
    this.store2= this.save2.group({  
     name: new FormControl(''),
      lang: new FormControl(''),
      genre: new FormControl(' ')    
   }
    )} 

  ngOnInit() {
  }
list(){
  this.router.navigateByUrl("taskt")
}
button(values){
  // console.log(values.value)
  this.http.store2user(values).subscribe(data => {
    // console.log("3",data)
  })
  this.router.navigateByUrl("taskt")
}
}

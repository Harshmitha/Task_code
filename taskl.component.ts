import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { ApiservService } from '../apiserv.service';


@Component({
  selector: 'app-taskl',
  templateUrl: './taskl.component.html',
  styleUrls: ['./taskl.component.css']
})
export class TasklComponent implements OnInit {
  store1:FormGroup;

  constructor(private router:Router,private save1: FormBuilder, private http: ApiservService) {
    this.store1= this.save1.group({  
     name: new FormControl(''),
      pass: new FormControl(''),
      
   }
    )}

  ngOnInit() {
  }
// submit(){
//   this.router.navigateByUrl("taskm")
// }
save(values)
{
  
  this.http.store1user(values).subscribe(data => {
    console.log("2",data)
  })
  this.router.navigateByUrl("taskm")
}

}

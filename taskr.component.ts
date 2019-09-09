import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { ApiservService } from '../apiserv.service';

@Component({
  selector: 'app-taskr',
  templateUrl: './taskr.component.html',
  styleUrls: ['./taskr.component.css']
})
export class TaskrComponent implements OnInit {
  store:FormGroup;

  constructor(private router:Router, private save: FormBuilder, private http: ApiservService) {
    this.store = this.save.group({  
     name: new FormControl(''),
      pass: new FormControl(''),
      confirm: new FormControl('')
   }
    )}

  ngOnInit() {
  }
  
  sub(values)
{
  //console.log(values)
  this.http.storeuser(values).subscribe(data => {
    console.log("2",data)
  })
  this.router.navigateByUrl("taskl")
}
}

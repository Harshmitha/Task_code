import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { PipePipe } from '../pipe.pipe';

@Component({
  selector: 'app-taskt',
  templateUrl: './taskt.component.html',
  styleUrls: ['./taskt.component.css']
})
export class TasktComponent implements OnInit {
  search:any;
  
  public moviedata;
  constructor(private http:HttpClient,private router:Router) { }

  ngOnInit() {
    let headers={'id':JSON.parse(localStorage.getItem("logindata")).success._id}
    this.http.get('https://7tjr6gucu2.execute-api.us-east-2.amazonaws.com/new/api/v1/favourite_album/'+headers.id).subscribe(data=>{
    //   this.moviedata.push(data)
       console.log("4",data)
   this.moviedata=data['success'].movies }) 
  console.log(this.moviedata)
    
  }
  add(){
     this.router.navigateByUrl("taskm")
  }

}

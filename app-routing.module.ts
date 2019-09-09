import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WebsiteComponent } from './website/website.component';
import { Form1Component } from './form1/form1.component';
import { Form2Component } from './form2/form2.component';
import { CrudComponent } from './crud/crud.component';
import { EditComponent } from './edit/edit.component';
import { TaskrComponent } from './taskr/taskr.component';
import { TasklComponent } from './taskl/taskl.component';
import { TasktComponent } from './taskt/taskt.component';
import { TaskmComponent } from './taskm/taskm.component';


const routes: Routes = [
// {path:'',component:WebsiteComponent},
//   {path:'login',component:Form1Component},
//   {path:'home',component:WebsiteComponent},
//   {path:'login1',component:Form2Component},
//   {path:'crud',component:CrudComponent},
//   {path:'edit',component:EditComponent}

{path:'',component:TaskrComponent},
{path:'taskl',component:TasklComponent},
{path:'taskr',component:TaskrComponent},
{path:'taskm',component:TaskmComponent},
{path:'taskt',component:TasktComponent}


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

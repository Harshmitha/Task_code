import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CommonModule } from '@angular/common';


import { WebsiteComponent } from './website/website.component';
import { Form1Component } from './form1/form1.component';
import { Form2Component } from './form2/form2.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { MulthreeComponent } from './multhree/multhree.component';
import { DescendingComponent } from './descending/descending.component';
import { StatesComponent } from './states/states.component';
import { HttpClientModule} from '@angular/common/http';
import { SortComponent } from './sort/sort.component';
import { EmployeeComponent } from './employee/employee.component';
import { InsertarrayComponent } from './insertarray/insertarray.component';
import { ListarryComponent } from './listarry/listarry.component';
import { TernaryComponent } from './ternary/ternary.component';
import { ThumbnailComponent } from './thumbnail/thumbnail.component';
import { ValidComponent } from './valid/valid.component';
import { TopbComponent } from './topb/topb.component';
import { CrudComponent } from './crud/crud.component';
import { EditComponent } from './edit/edit.component';
import { IdcardComponent } from './idcard/idcard.component';
import { UiComponent } from './ui/ui.component';
import { FilterComponent } from './filter/filter.component';
import { FilteerComponent } from './filteer/filteer.component';
import { SearchPipe } from './search.pipe';
import { CalComponent } from './cal/cal.component';
import { PractiseComponent } from './practise/practise.component';
import { TodolistComponent } from './todolist/todolist.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { OptionComponent } from './option/option.component';
import { TaskrComponent } from './taskr/taskr.component';
import { TasklComponent } from './taskl/taskl.component';
import { TasktComponent } from './taskt/taskt.component';
import { TaskmComponent } from './taskm/taskm.component';
import { PipePipe } from './pipe.pipe';
import{Ng2SearchPipeModule} from 'ng2-search-filter'
@NgModule({
  declarations: [
    AppComponent,
    WebsiteComponent,
    Form1Component,
    Form2Component,
    MulthreeComponent,
    DescendingComponent,
    StatesComponent,
    SortComponent,
    EmployeeComponent,
    InsertarrayComponent,
    ListarryComponent,
    TernaryComponent,
    ThumbnailComponent,
    ValidComponent,
    TopbComponent,
    CrudComponent,
    EditComponent,
    IdcardComponent,
    UiComponent,
    FilterComponent,
    FilteerComponent,
    SearchPipe,
    CalComponent,
    PractiseComponent,
    TodolistComponent,
    CheckoutComponent,
    OptionComponent,
    TaskrComponent,
    TasklComponent,
    TasktComponent,
    TaskmComponent,
    PipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,
    CommonModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    Ng2SearchPipeModule
    
    
  ],
  exports: [BsDropdownModule, TooltipModule, ModalModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

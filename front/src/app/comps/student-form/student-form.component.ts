import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import {Service1Service} from 'src/app/services/service1.service';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {
  fgregister:FormGroup;
  data:any=[];
  constructor(private fb:FormBuilder,private cs:Service1Service) { 
    this.fgregister=this.fb.group({
      name:[],
      phone:[],
      email:[],
      password:[],
      id:[]
    
    })
  }

  ngOnInit(): void {
    this.getStudent();
    
  }
getStudent(){
  this.cs.getData().subscribe((resp:any)=>{
     this.data=resp;
     console.log(this.data);
  });
}  
submit(){
  var obj=this.fgregister.value;
  this.cs.submitData(obj).subscribe((resp:any)=>
  {
    this.getStudent();
    console.log(resp);
})
}

edit(i:any){
    this.fgregister.setValue({
    name:this.data[i].name,
    phone:this.data[i].phone,
    email:this.data[i].email,
    password:this.data[i].password,
    id:this.data[i]._id,
   
  })
  }
  update(){
    var obj =this.fgregister.value;
     this.cs.updateData(obj).subscribe((resp:any)=>{
     console.log(resp);
     this.fgregister.reset();
     this.getStudent();
    })
  }

delete(i:any,obj:any){
 
  this.data.splice(i,1); 
  
  this.cs.deleteData({"id":obj}).subscribe((resp:any)=>{
    console.log(resp);
    
   this.fgregister.reset();
  })
}  
}




import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ContactService } from 'src/app/contact.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css'],
})


export class ContactusComponent {
  constructor(public builder:FormBuilder,private service:ContactService,private toastr:ToastrService,private router :Router ){}

 
  // contactForm : FormGroup= this.builder.group({
  //   name : this.builder.control('',Validators.required),
  //   phoneNumber: this.builder.control('',Validators.compose([Validators.required,Validators.minLength(10),Validators.maxLength(10),Validators.pattern('')])),
  //   email:this.builder.control('',Validators.compose([Validators.required,Validators.email]))
  // });

  contactForm = new FormGroup({
    name:new FormControl('',Validators.required),
    phoneNumber:new FormControl('',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
    email:new FormControl('',[Validators.required,Validators.email])
  })

  public get name(){
    return this.contactForm.get('name')
  }

  public get phoneNumber(){
    return this.contactForm.get('phoneNumeber')
  }

  public get email(){
    return this.contactForm.get('email')
  }

  // ProceedContact(){
  //   if(this.contactForm.valid)
  //   {
  //     this.service.ContactUs(this.contactForm.value).subscribe(res=>{
  //       this.toastr.success('We will contact you soon!','Registered successfully')
  //       this.contactForm.reset()
  //       console.log(res)
  //     });

  //   }
  //   else{
  //     this.toastr.warning('Please enter valid Information','')
  //   }
  // }
  clickk(){
    alert('clicked')
    this.service.Home().subscribe(res=>{
      console.log(res)
      alert(res)
    })
  }
  ProceedContact(){
    if(this.contactForm.valid)
    {
      this.service.Home().subscribe(res=>{
        this.toastr.success(res.toString(),'Registered successfully')
        this.contactForm.reset()
        console.log(res)
      });

    }
    else{
      this.toastr.warning('Please enter valid Information','')
    }
  }
}

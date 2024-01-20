import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
 
  contactform:FormGroup;
  submitted: boolean = false;

  constructor(private fb:FormBuilder,private api:ServiceService) { }

  ngOnInit() {
    this.contactformsection();
  }

  contactformsection(){
    this.contactform = this.fb.group({
      name:['',Validators.required],
      email:['',Validators.required],
      phoneno:['',Validators.required],
      message:['',Validators.required],
    });
  }

  submit(){
    this.submitted = true;
    this.api.clientData('/userData',this.contactform.value).subscribe((next:any)=>{
      console.log("response from api",next);
    })
    setTimeout(() => {
      this.api.obNotify({
        start:true,
        code:200,
        status:'success',
        message:'Details Submitted Successfully'
      })
      this.contactform.reset();
      this.submitted = false;
      
    }, 1500);
  }

  contact(index:any){
    if(index == 0){
      window.open("https://github.com/chunnusingh198","_blank")
    }
    else if(index == 1){
      window.open("mailTo:chunnukumar198@gmail.com","_blank")
    }
    else if(index == 2){
      window.open("https://wa.me/917269926729","_blank")
    }
  }

}

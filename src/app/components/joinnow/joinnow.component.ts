import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-joinnow',
  templateUrl: './joinnow.component.html',
  styleUrls: ['./joinnow.component.css']
})
export class JoinnowComponent implements OnInit {


  profileForm: FormGroup;

  selectOne: any = ['Men', 'Women', 'Boys', 'Inspiration']
  
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.profileForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      city: [''],
      message: ['']
  
    })
  }

  

  get f() { return this.profileForm.controls; }

  onSubmit(){
    // e.preventDefault();
    console.log("test", this.f.firstName.value);
  }

}

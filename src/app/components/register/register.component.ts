import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  contactForm = new FormGroup({
    firstName: new FormControl('',[Validators.required,Validators.minLength(8),Validators.pattern('^[a-zA-Z]+$')]),
    secondName: new FormControl('',[Validators.required,Validators.minLength(2),Validators.pattern('^[a-zA-Z]+$')]),
    email: new FormControl('',[Validators.required,Validators.email]),
    gender: new FormControl('male',[Validators.required]),
    ismarried: new FormControl(''),
    country: new FormControl('2',[Validators.required]),


  })

  get firstname(){
    return this.contactForm.get('firstName')
  }
  get secondname(){
    return this.contactForm.get('secondName')
  }
  get email(){
    return this.contactForm.get('email')
  }
  get gender(){
    return this.contactForm.get('gender')
  }
  get ismarrired(){
    return this.contactForm.get('ismarried')
  }
  get country(){
    return this.contactForm.get('country')
  }
 

  onSubmit() {
    console.log(this.contactForm);
    this.contactForm.reset();
    alert('Form successFully Submited')

  }
  
}

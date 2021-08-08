import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent  {
  text = 'karo'
  mail =''
  password = ''

  inputHandlerMail (event :any)  {
    const e = event.target.value
    this.mail = e
   }
  inputHandlerPassword (event :any) {
   const e = event.target.value
   this.password = e
  }
  saveUser () {
    console.log(this.mail );
    console.log(this.password );

    
  }
 
 
 }

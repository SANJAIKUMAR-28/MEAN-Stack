import { Component, OnInit } from '@angular/core';
import {  FormControl, FormGroup, Validators } from '@angular/forms';
import { ProviderClass } from 'src/app/models/providers.class';
import { providers } from 'src/app/models/providers.data';

@Component({
  selector: 'app-add-providers',
  templateUrl: './add-providers.component.html',
  styles: [
  ]
})
export class AddProvidersComponent implements OnInit {

  submitted = false;
  provider = new ProviderClass();
  providersForm!: FormGroup;
  constructor() { }
  ngOnInit(): void {
    this.providersForm = new FormGroup({
      firstname: new FormControl('Sk',[Validators.required, Validators.maxLength(10)]),
      lastname: new FormControl('',[Validators.required]),
      position: new FormControl('',[Validators.required]),
      email: new FormControl('',[Validators.email]),
      phone: new FormControl('',[Validators.required]),
      company_name: new FormControl('',[Validators.required]),
      address: new FormControl('',[Validators.required]),
      address2: new FormControl('',[Validators.required]),
      city: new FormControl('',[Validators.required]),
      state: new FormControl('',[Validators.required]),
      postal_code: new FormControl('',[Validators.required]),
      description: new FormControl('',[Validators.required]),
      tagline: new FormControl('',[Validators.required]),
    });
  }
get f(){
  return this.providersForm.controls
}

  handleSubmit() {
    console.log(this.providersForm.value);
    let newId: number;
    while (true) {
      newId = Math.floor(Math.random() * 10000) + 99999;
      if (providers.findIndex(el => el.id == newId) == -1) {
        break;
      }
    }
    let p = this.providersForm.value;
    this.provider.id = newId;
    this.provider.firstname = p.firstname;
    this.provider.lastname = p.lastname;
    this.provider.position = p.position;
    this.provider.company = {
      company_name: p.company_name,
      address: p.address,
      address2: p.address2,
      city: p.city,
      state: p.state,
      postal_code: p.postal_code,
      phone: p.phone,
      email: p.email,
      description: p.description,
      tagline: p.tagline,
    };
    providers.push(this.provider);
    this.submitted = true;
  }

}

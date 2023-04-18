import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from 'src/app/service/product.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {
  contact = new FormGroup({
    name: new FormControl('',[Validators.required,Validators.minLength(4)]),
    phone: new FormControl('',[Validators.required,Validators.min(11111111),Validators.max(99999999) ]),
    countryCode: new FormControl('',[Validators.required]),
     email: new FormControl('',[Validators.required,Validators.email]),
     demande: new FormControl('',Validators.required)
   });

  constructor(private apis: ProductService) {  }
  tbprofile;
  ariereplan;
  lien = this.apis.lien;
  ngOnInit(): void {
    this.getDataprofile()
    this.getariereplan()
  }
  getDataprofile() {
    this.apis.getDataprofile().subscribe((res: any) => {
      console.log('res',res)
      this.tbprofile = res;

    })
  }
  getariereplan() {
    this.apis.getariereplan().subscribe((res: any) => {
      console.log('res', res)
      this.ariereplan = res;
    })
  }
  onSubmit(): void {
    if(this.contact.valid){
      console.log("nounou", this.contact.value);
      let body ={...this.contact.value};
      this.apis.setDatacontact(body).subscribe(()=>{
          Swal.fire({
          icon: 'success',
          title: 'Message bien envoyé',
          text: 'we will answer you a few moment later',
          showConfirmButton: false,
        })
        this.contact.reset();
      })
    }
  else{
    Swal.fire({
      icon: 'error',
      text: 'Something went wrong!',
      title: 'vérifier vos coordonnées',
    })
  }
}
get name() {
  return this.contact.get('name'); }
get phone() {
  return this.contact.get('phone'); }
  get countryCode() {
    return this.contact.get('countryCode'); }
}


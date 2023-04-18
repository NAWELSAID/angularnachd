import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from 'src/app/service/product.service';
import Swal from 'sweetalert2';
declare var $ : any
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contact = new FormGroup({
    name: new FormControl('',[Validators.required,Validators.minLength(4)]),
    phone: new FormControl('',[Validators.required,Validators.pattern("/{12}")]),
    countryCode: new FormControl('',[Validators.required]),
     email: new FormControl('',[Validators.required,Validators.email]),
     demande: new FormControl('',Validators.required)
   });

  constructor(private apis: ProductService) {

  }
  ariereplan;
  lien = this.apis.lien;

  ngOnInit(): void {
    this.getariereplan()
    setTimeout(() => {
      $("#mobile_code").intlTelInput({
        initialCountry: "in",
        separateDialCode: true,
        // utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/11.0.4/js/utils.js"
      });
    }, 0);
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
          showConfirmButton: false,
        })
      })
      this.contact.reset();

    }
  else{
    Swal.fire({
          icon: 'error',
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



import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
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
    phone: new FormControl('',[Validators.required,Validators.pattern("^[0-9]{8}$")]),
    countryCode: new FormControl('',[Validators.required]),
     email: new FormControl('',[Validators.required,Validators.email]),
     demande: new FormControl('',Validators.required)
   });

  constructor(private apis: ProductService, public translate:TranslateService) {

  }
  ariereplan;
  tbprofile;
  lien = this.apis.lien;
  isLoading = false
  ngOnInit(): void {
    this.getariereplan()
    this.getDataprofile()


  }
  getariereplan() {
    this.isLoading = true
    this.apis.getariereplan().subscribe((res: any) => {
      console.log('res', res)
      this.ariereplan = res;
      this.isLoading = false
    })
  }
  getDataprofile() {
    this.apis.getDataprofile().subscribe((res: any) => {
      console.log('res',res)
      this.tbprofile = res;
    })}
  onSubmit(): void {
    if(this.contact.valid){

      console.log("contact", this.contact.value);
      let body ={...this.contact.value};
      this.apis.setDatacontact(body).subscribe(()=>{
        this.contact.reset();

          Swal.fire({
          icon: 'success',
          title: 'Message bien envoyé',
          showConfirmButton: false,
        })
      })
    }
  else{
    console.log(this.contact.get('name').errors)
    console.log(this.contact.get('phone').errors)
    console.log(this.contact.get('email').errors)
    console.log(this.contact.get('demande').errors)
    console.log(this.contact.get('countryCode').errors)
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



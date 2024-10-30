import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {environmentDev} from '../../../../environments/environment.dev';
import {Login} from '../../../domains/interfaces/login';
import { BaseService } from '../../../core/services/base-services/base.service';

@Component({
  selector: 'app-connexion',
  standalone: true,
  imports: [],
  templateUrl: './connexion.component.html',
  styleUrl: './connexion.component.css'
})
export class ConnexionComponent implements OnInit{
  formLogin!: FormGroup;
  login: Login={
    username: "",
    password: "",
    rememberMe: false
  }
  constructor(private router: Router,private service:BaseService) { }


  home() {
    this.router.navigateByUrl("/base/home");
  }

  ngOnInit(): void {
    this.formLogin = new FormGroup({
      username: new FormControl("",[Validators.required]),
      password: new FormControl("",[Validators.required,Validators.minLength(5)])
    });
  }
  isInvalidateInput(input: AbstractControl<any>){
    return input.invalid && (input.touched || input.dirty) ;
  }

  connexion(){
    this.login.username = this.formLogin.value.username;
    this.login.password = this.formLogin.value.password;
    this.service.connexion(environmentDev.endPoint.login,this.login).subscribe({  
      next:(response:any)=>{
        console.log(response)
      },
      error:(error:any)=>{
        console.log(error)
      
      }  
    })
  }
}
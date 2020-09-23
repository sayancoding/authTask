import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {
  constructor(private _auth:AuthService) {}

  ngOnInit(): void {}

  signin = new FormGroup({
    email: new FormControl(null, [
      Validators.required,
      Validators.pattern(
        /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
      ),
    ]),
    password: new FormControl(null,[Validators.required])
  });

  onSubmit() {
    this._auth.signInUser(this.signin.value).subscribe(
      (res)=>{
        alert(`Hi, ${res.firstName} ${res.lastName}. You are successfully login 😎`)
        // console.log(res)
      },
      err=>{
        alert(`Error : ${err.error.message}`)
        console.log(err)
      }
    )
    this.signin.reset();
  }
}

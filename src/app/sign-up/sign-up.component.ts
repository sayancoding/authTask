import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  constructor(private _auth: AuthService, private _router:Router) {}

  ngOnInit(): void {}

  signUp = new FormGroup({
    firstName: new FormControl(null, [
      Validators.required,
      Validators.pattern(/^[a-zA-Z]+$/),
    ]),
    lastName: new FormControl(null, [
      Validators.required,
      Validators.pattern(/^[a-zA-Z]+$/),
    ]),
    email: new FormControl(null, [
      Validators.required,
      Validators.pattern(
        /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
      ),
    ]),
    password: new FormControl(null, [Validators.required]),
    confirmPassword: new FormControl(null, [Validators.required]),
  });
  onSubmit() {
    this._auth.signUpUser(this.signUp.value).subscribe(
      (res) => {
        alert(`${res.response} 🎉`);
        this._router.navigateByUrl('/signin');
      },
      (err) => {
        alert(`error: ${err.error} ☹`);
        console.log(err)
      }
    );
    this.signUp.reset();
  }
}

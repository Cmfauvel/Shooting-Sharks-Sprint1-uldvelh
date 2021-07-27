import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
loginForm: FormGroup;
  constructor(
    private authService: AuthService,
    private router : Router,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.initConnexionForm();
  }

  initConnexionForm(): void {
    this.loginForm = this.fb.group({
      mail: this.fb.control('', [Validators.required, Validators.email]),
      password: this.fb.control('', [
        Validators.required,
        Validators.minLength(8),
      ]),
    });
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
    this.authService.login(form.value.email, form.value.password).subscribe(
      (resp: any) => {
        console.log("Connection succeed", resp);
        this.router.navigate(['/']);
      },
      error => {
        console.log('error while');
      }

    )
  }

}

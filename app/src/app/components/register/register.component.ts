import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Library } from 'src/app/models/library';
import { AuthService } from 'src/app/services/auth.service';
import { LibraryService } from 'src/app/services/library.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  librarySub: Subscription;

  constructor(private auth: AuthService,
    private fb: FormBuilder,
    private router: Router) {
    // this.registerForm = new FormGroup({});
  }

  ngOnInit(): void {
    this.initRegisterForm();
  }

  initRegisterForm(): void {
    this.registerForm = this.fb.group({
      pseudo: this.fb.control('', [Validators.required]),
      mail: this.fb.control('', [Validators.required, Validators.email]),
      password: this.fb.control('', [
        Validators.required,
        Validators.minLength(8),
      ]),
      confirmPassword: this.fb.control('', [
        Validators.required,
        Validators.minLength(8),
      ])
    });
  }

  onSubmit() {
    try {
      const user = {
        username: this.registerForm.value.pseudo,
        email: this.registerForm.value.mail,
        role: ["USER"],
        password: this.registerForm.value.password
      }
      this.auth.register(user).subscribe((response) => {
        this.router.navigate(["/login"]);
        console.log(response)});
    } catch {
      console.log("__Error handled gracefully.")
    }
  }


}


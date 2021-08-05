import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
<<<<<<< HEAD
import { Router } from '@angular/router';
=======
import { Subscription } from 'rxjs';
import { Library } from 'src/app/models/library';
>>>>>>> 44a68a4ce45b9fbe71eeb2c5157483b7dea0ba8d
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
<<<<<<< HEAD
    private fb: FormBuilder,
    private router: Router) { 
      // this.registerForm = new FormGroup({});
    }
=======
    private fb: FormBuilder) {
    // this.registerForm = new FormGroup({});
  }
>>>>>>> 44a68a4ce45b9fbe71eeb2c5157483b7dea0ba8d

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
      this.auth.register(user).subscribe((response) => console.log(response));
    } catch {
      console.log("__Error handled gracefully.")
    }

<<<<<<< HEAD
    this.auth.register(user).subscribe((response) => {
      console.log(response);
    })
    this.router.navigate(["/login"]);
  }
  

=======
  }
>>>>>>> 44a68a4ce45b9fbe71eeb2c5157483b7dea0ba8d
}

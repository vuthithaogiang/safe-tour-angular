import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { RegisterDTO } from '../../dtos/user/register.dto';

@Component({
      selector: 'app-register',
      templateUrl: './register.component.html',
      styleUrl: './register.component.scss',
})
export class RegisterComponent {
      @ViewChild('registerForm') registerForm!: NgForm;
      phoneNumber: string;
      fullName: string;
      password: string;
      confirmPassword: string;
      isAccepted: boolean;

      constructor(private router: Router, private userService: UserService) {
            this.phoneNumber = '';
            this.fullName = '';
            this.password = '';
            this.confirmPassword = '';
            this.isAccepted = false;
            //   this.registerForm = {};
      }

      onFullNameChange() {
            // console.log(this.fullName);
      }

      register() {
            const registerDTO: RegisterDTO = {
                  full_name: this.fullName,
                  phone_number: this.phoneNumber,
                  password: this.password,
                  retype_password: this.confirmPassword,
                  role_id: 1,
                  facebook_account_id: 0,
                  google_account_id: 0,
            };

            this.userService.register(registerDTO).subscribe({
                  next: (response: any) => {
                        console.log(response);
                        debugger;
                        if (response && response.username) {
                              this.router.navigate(['/login']);
                        }
                        //  debugger;
                        // if (response && (response.status === 200 || response.status === 201)) {
                        //       this.router.navigate(['/login']);
                        // } else {
                        // }
                  },
                  complete: () => {
                        debugger;
                  },
                  error: (error: any) => {
                        debugger;
                        console.error('Error register: ', error);
                  },
            });
      }

      checkPasswordMatch() {
            if (this.password !== this.confirmPassword) {
                  this.registerForm.form.controls['confirmPassword'].setErrors({ passwordMissMatch: true });
            } else {
                  this.registerForm.form.controls['confirmPassword'].setErrors(null);
            }
      }
}

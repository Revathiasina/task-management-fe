import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginData = { email: '', password: '' };
  errorMessage: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  onSubmit() {
    this.http.post('http://localhost:8080/login', this.loginData).subscribe(
      (response: any) => {
        // Save JWT to localStorage
        localStorage.setItem('token', response.token);
        console.log(response)

        // Redirect based on role
        if (response.role === 'admin') {
          this.router.navigate(['/admin/users']);
        } else if (response.role === 'user') {
          this.router.navigate(['/user/tasks']);
        }
      },
      (error) => {
        this.errorMessage = 'Invalid username or password';
      }
    );
  }
}

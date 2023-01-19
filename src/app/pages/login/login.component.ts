import { Router } from '@angular/router';
import { LoginService } from './../../services/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user !: string
  pass !: string
  constructor(private login: LoginService, private router:Router) { }
  ngOnInit(): void {
    console.log(this.loginUser())
  }

  loginUser() {
    if (this.login.Usuario == this.user && this.login.Password == this.pass) {
      localStorage.setItem('stoylogin','true')
      this.router.navigate(['/post']);
    } else {
    }
    
  
  }

  
}

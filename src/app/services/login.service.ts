import { Router } from '@angular/router';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService implements OnInit {
  Usuario: string = 'AD'
  Password: string = '123456'

  constructor(private router: Router) { }
  ngOnInit(): void {
  }
  loginUser(user: string, pas: string) {

    if (this.Usuario == user && this.Password == pas) {
      return true
    } else {
      return false
    }
  }
}

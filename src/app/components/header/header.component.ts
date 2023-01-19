import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router) { }
  ngOnInit(): void {

  }
  ok!: string
  logout() {
    this.ok = String(localStorage.removeItem('stoylogin'))
    if (this.ok) {
      confirm('Desea salir')
     this.router.navigate([''])
    }
  }
}

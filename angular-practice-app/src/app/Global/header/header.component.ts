import { AuthenticationService } from './../../Authentication/authentication.service';
import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, AfterViewInit {

  constructor(public authentication: AuthenticationService) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
  }

  toggleHelp() {
    $('#FAQBtn').toggleClass('hidden');
    $('#contactBtn').toggleClass('hidden');
  }

  onLogout() {
    this.authentication.logout();
  }
}

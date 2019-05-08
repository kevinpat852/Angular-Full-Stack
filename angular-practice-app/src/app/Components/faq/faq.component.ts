import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FAQComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('#caret1').toggleClass('rotate');
    $('#caret2').toggleClass('rotate');
    $('#caret3').toggleClass('rotate');
    $('#caret4').toggleClass('rotate');
  }

  toggleA1() {
    $('#a1').toggleClass('hidden');
    $('#caret1').toggleClass('rotate');
  }
  toggleA2() {
    $('#a2').toggleClass('hidden');
    $('#caret2').toggleClass('rotate');
  }
  toggleA3() {
    $('#a3').toggleClass('hidden');
    $('#caret3').toggleClass('rotate');
  }
  toggleA4() {
    $('#a4').toggleClass('hidden');
    $('#caret4').toggleClass('rotate');
  }

}

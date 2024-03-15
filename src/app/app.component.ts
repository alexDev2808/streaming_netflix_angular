import { Component, OnInit } from '@angular/core';

// Plantilla con JQuery
declare var $:any;
declare function HOME_INIT([]):any;
declare function INIT_SWIPER([]):any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'streaming_tipo_netflix';

  constructor() { }

  ngOnInit(): void {
      setTimeout(() => {
        HOME_INIT($);
        INIT_SWIPER($);
      }, 50)
  }
  
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-softwaredevelopment',
  templateUrl: './softwaredevelopment.component.html',
  styleUrls: ['./softwaredevelopment.component.css']
})
export class SoftwaredevelopmentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $('.moreless-button').click(()=> {
      $('.moretext').slideToggle();
      if ($('.moreless-button').text() == "Read more") {
        $(this).text("Read less")
      } else {
        $(this).text("Read more")
      }
    });
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bodycard1',
  templateUrl: './bodycard1.component.html',
  styleUrls: ['./bodycard1.component.css']
})
export class Bodycard1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // $('.moreless-button').click(()=> {
    //   $('.moretext').slideToggle();
    //   if ($('.moreless-button').text() == "Read more") {
    //     $(this).text("Read less")
    //   } else {
    //     $(this).text("Read more")
    //   }
    // });
  }

}

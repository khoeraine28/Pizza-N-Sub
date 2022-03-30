import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-placed-screen',
  templateUrl: './order-placed-screen.component.html',
  styleUrls: ['./order-placed-screen.component.css']
})
export class OrderPlacedScreenComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  orderAgain(){
    this.router.navigate(['order'])
  }

}

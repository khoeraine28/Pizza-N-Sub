import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.css']
})
export class InputTextComponent implements OnInit {

  @Input()
  public required?: boolean = false;
  @Input()
  public label?: string = '';
  @Input()
  public model: any;

  constructor() { }

  ngOnInit(): void {
  }

}

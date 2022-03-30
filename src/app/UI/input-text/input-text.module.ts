import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextComponent } from './input-text/input-text.component';
import { FormsModule } from '@angular/forms';
import {InputTextModule} from 'primeng/inputtext';


@NgModule({
  declarations: [
    InputTextComponent
  ],
  imports: [
    FormsModule,
    InputTextModule,
    CommonModule
  ],
  exports: [InputTextComponent]
})
export class AppInputTextModule { }

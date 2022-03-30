import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeIndexComponent } from './home-index/home-index.component';
import { DividerModule } from 'primeng/divider';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@NgModule({
  declarations: [
    HomeIndexComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    CardModule,
    DividerModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }

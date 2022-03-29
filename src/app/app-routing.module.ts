import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: '', 
    children: [
      {
        path: '',
        data: {
          preload: true,
        },
        loadChildren: () =>
            import('./home/home.module').then(
                (m) => m.HomeModule,
            ),
      }, 
      {
        path: 'order',
        data: {
          preload: true,
        },
        loadChildren: () =>
            import('./order/order.module').then(
                (m) => m.OrderModule,
            ),
      },
      {
        path: 'admin',
        data: {
          preload: true,
        },
        loadChildren: () =>
            import('./admin/admin.module').then(
                (m) => m.AdminModule,
            ),
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

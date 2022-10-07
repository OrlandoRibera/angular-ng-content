import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PopupUserComponent } from './popup-user/popup-user.component';

const routes: Routes = [
  {
    path: '',
    component: PopupUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

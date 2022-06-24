import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ForgotPasswordEmailSentPage } from './forgot-password-email-sent.page';

const routes: Routes = [
  {
    path: '',
    component: ForgotPasswordEmailSentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ForgotPasswordEmailSentPageRoutingModule {}

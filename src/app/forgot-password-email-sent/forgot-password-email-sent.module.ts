import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ForgotPasswordEmailSentPageRoutingModule } from './forgot-password-email-sent-routing.module';

import { ForgotPasswordEmailSentPage } from './forgot-password-email-sent.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ForgotPasswordEmailSentPageRoutingModule
  ],
  declarations: [ForgotPasswordEmailSentPage]
})
export class ForgotPasswordEmailSentPageModule {}

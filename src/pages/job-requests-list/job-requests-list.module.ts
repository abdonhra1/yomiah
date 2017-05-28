import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JobRequestsList } from './job-requests-list';
import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  declarations: [
    JobRequestsList,
  ],
  imports: [
    IonicPageModule.forChild(JobRequestsList),
    TranslateModule.forChild()
  ],
  exports: [
    JobRequestsList
  ]
})
export class JobRequestsListModule {}

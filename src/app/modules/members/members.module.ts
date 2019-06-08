import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProfileComponent } from './profile/profile.component';
import { InboxComponent } from './inbox/inbox.component';
import { MessageComponent } from './message/message.component';
import { ManageAdComponent } from './manage-ad/manage-ad.component';
import { MembersBaseComponent } from './members-base/members-base.component';

@NgModule({
    declarations: [
        ProfileComponent,
        InboxComponent,
        MessageComponent,
        ManageAdComponent,
        MembersBaseComponent
    ],
    imports: [
        SharedModule,
    ],
    providers: [],
})
export class MembersModule { }

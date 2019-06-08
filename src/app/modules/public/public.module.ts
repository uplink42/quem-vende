import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { PublicBaseComponent } from './public-base/public-base.component';
import { SearchComponent } from './search/search.component';
import { AdDetailsComponent } from './ad-details/ad-details.component';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    {
        path: '',
        component: PublicBaseComponent,
        children: [
            { path: '', component: HomeComponent },
            { path: '', redirectTo: '/', pathMatch: 'full' },
        ]
    },
];

@NgModule({
    declarations: [
        PublicBaseComponent,
        SearchComponent,
        AdDetailsComponent,
        AboutComponent,
        ContactUsComponent,
        PrivacyPolicyComponent,
        RegisterComponent,
        LoginComponent,
        ForgotPasswordComponent,
        HomeComponent
    ],
    imports: [
        SharedModule,
        RouterModule.forChild(routes),
    ],
    providers: [],
})
export class PublicModule { }

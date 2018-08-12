import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
/* Components */
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RegistroComponent } from './components/registro/registro.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { NotificationComponent } from './components/notification/notification.component';
import { RecoveryComponent } from './components/recovery/recovery.component';
import { SentComponent } from './components/sent/sent.component';
import { ConfigurationComponent } from './components/configuration/configuration.component';
import { MenuProfileComponent } from './components/menu-profile/menu-profile.component';
import { ProfileComponent } from './components/profile/profile.component';
import { GeneralComponent } from './components/general/general.component';
/* Services */
import { MessageGrowlService } from './services/message-growl.service';
import { ValidateService } from './services/validate.service';
import { HttpErrorHandler } from './services/http-error-handler.service';
import { MessageService } from './services/message.service';
/* Material components */
import { MaterialComponents } from './material-components.module';
import { MatIconModule } from '@angular/material';
/* PrimeNG */
import { GrowlModule } from 'primeng/primeng';
import { TableModule } from 'primeng/table';
/* Routing */
import { AppRoutes } from './app.routing';
import { ParroquiaDesignComponent } from './components/parroquia-design/parroquia-design.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    RegistroComponent,
    SpinnerComponent,
    NotificationComponent,
    RecoveryComponent,
    SentComponent,
    ConfigurationComponent,
    MenuProfileComponent,
    ProfileComponent,
    GeneralComponent,
    ParroquiaDesignComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    FlexLayoutModule,
    HttpClientModule,
    MaterialComponents,
    MatIconModule,
    GrowlModule,
    TableModule,
    RouterModule.forRoot(AppRoutes)
  ],
  entryComponents: [
    RegistroComponent,
    RecoveryComponent,
    SentComponent
  ],
  providers: [
    MessageGrowlService,
    ValidateService,
    HttpErrorHandler,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
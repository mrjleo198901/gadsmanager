import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
/* Components */
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RegistroComponent } from './components/registro/registro.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
/* Services */
import { MessageGrowlService } from './services/message-growl.service';
/* Material components */
import { MaterialComponents } from './material-components.module';
/* PrimeNG */
import { GrowlModule } from 'primeng/primeng';
/* Routing */
import { AppRoutes } from './app.routing';
import { NotificationComponent } from './components/notification/notification.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    RegistroComponent,
    SpinnerComponent,
    NotificationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    FlexLayoutModule,
    HttpClientModule,
    MaterialComponents,
    RouterModule.forRoot(AppRoutes)
  ],
  entryComponents: [
    RegistroComponent
  ],
  providers: [MessageGrowlService],
  bootstrap: [AppComponent]
})
export class AppModule { }

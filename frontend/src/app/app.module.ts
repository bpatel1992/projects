import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FlexLayoutModule } from "@angular/flex-layout";
import { DashboardComponent } from "./component/dashboard/dashboard.component";
import { UserDetailsComponent } from "./component/user-details/user-details.component";
import { UserListComponent } from "./component/user-list/user-list.component";
import { LoginComponent } from "./component/user/login/login.component";
import { RegisterComponent } from "./component/user/register/register.component";
import { HeaderComponent } from "./core/header/header.component";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { AngularMaterialModule } from "./module/material/angular-material.module";
import { httpInterceptorProviders } from "./core/interceptor/auth-interceptor";
import { HttpClientModule } from "@angular/common/http";
import { AlertComponent } from "./shared/alert/alert.component";
import { AppModalComponent } from "./common/modals/app-modal/app-modal.component";
import { AppLoaderComponent } from "./common/loader/app-loader/app-loader.component";
import { SideNavBarListComponent } from "./core/side-nav-bar-list/side-nav-bar-list.component";
import { FileUploadComponent } from "./component/file/file-upload/file-upload.component";
import { AuditLogComponent } from "./grid/audit-log/audit-log.component";
import { AgGridModule } from "ag-grid-angular";
import { ActionRenderComponent } from "./grid/action-render/action-render.component";

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UserDetailsComponent,
    UserListComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    AlertComponent,
    AppLoaderComponent,
    AppModalComponent,
    SideNavBarListComponent,
    FileUploadComponent,
    AuditLogComponent,
    ActionRenderComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    FormsModule,
    AngularMaterialModule,
    AgGridModule.withComponents([]),
  ],
  providers: [httpInterceptorProviders],
  entryComponents: [AlertComponent, AppModalComponent, ActionRenderComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}

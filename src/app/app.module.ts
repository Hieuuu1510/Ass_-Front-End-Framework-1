import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutAdminComponent } from './layout/layout-admin/layout-admin.component';
import { LayoutClientComponent } from './layout/layout-client/layout-client.component';
import { DashboardComponent } from './page/Admin/dashboard/dashboard.component';
import { ProductManagerComponent } from './page/Admin/product-manager/product-manager.component';
import { ProductListComponent } from './page/Client/product-list/product-list.component';
import { HomePageComponent } from './page/Client/home-page/home-page.component';
import { ProductAddComponent } from './page/Admin/product-add/product-add.component';
import { ProductEditComponent } from './page/Admin/product-edit/product-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutAdminComponent,
    LayoutClientComponent,
    DashboardComponent,
    ProductAddComponent,
    ProductEditComponent,
    ProductManagerComponent,
    HomePageComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

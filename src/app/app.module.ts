import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderMainComponent } from './pages/shared/header-main/header-main.component';
import { NavMainComponent } from './pages/shared/nav-main/nav-main.component';
import { HomeComponent } from './pages/home/home.component';
import { BannerComponent } from './pages/home/components/banner/banner.component';
import { ServicesComponent } from './pages/home/components/services/services.component';
import { FooterMainComponent } from './pages/shared/footer-main/footer-main.component';
import { AboutComponent } from './pages/about/about.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderMainComponent,
    NavMainComponent,
    HomeComponent,
    BannerComponent,
    ServicesComponent,
    FooterMainComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

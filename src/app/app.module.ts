import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { DefaultLayoutComponent } from './layout/default-layout/default-layout.component';
import { HeaderOnlyComponent } from './layout/header-only/header-only.component';


@NgModule({
  declarations: [
    // AppComponent
  
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    DefaultLayoutComponent,
    HeaderOnlyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [HomeComponent]
})
export class AppModule { }

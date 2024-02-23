import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { DefaultLayoutComponent } from './layout/default-layout/default-layout.component';
import { HeaderOnlyComponent } from './layout/header-only/header-only.component';
import { TopDestinationComponent } from './components/top-destination/top-destination.component';
import { BigHeaderComponent } from './components/big-header/big-header.component';
import { BestToursComponent } from './components/best-tours/best-tours.component';
import { TopArticlesComponent } from './components/top-articles/top-articles.component';


@NgModule({
  declarations: [
    // AppComponent
  
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    DefaultLayoutComponent,
    HeaderOnlyComponent,
    TopDestinationComponent,
    BigHeaderComponent,
    BestToursComponent,
    TopArticlesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [HomeComponent]
})
export class AppModule { }

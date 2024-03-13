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
import { RegisterComponent } from './pages/register/register.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponent } from './pages/login/login.component';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { DestinationDetailsComponent } from './components/top-destination/destination.details.component';
import { StatsItemComponent } from './components/big-header/stats.item.component';
import { TourCardDetailsComponent } from './components/best-tours/tour.card.details.component';
import { ArticleCardDetailsComponent } from './components/top-articles/article.card.details.component';

@NgModule({
      declarations: [
            HomeComponent,
            HeaderComponent,
            FooterComponent,
            DefaultLayoutComponent,
            HeaderOnlyComponent,
            TopDestinationComponent,
            BigHeaderComponent,
            BestToursComponent,
            TopArticlesComponent,
            RegisterComponent,
            LoginComponent,
            DestinationDetailsComponent,
            StatsItemComponent,
            TourCardDetailsComponent,
            ArticleCardDetailsComponent,
      ],
      imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
      providers: [
            HttpClient,
            {
                  provide: HTTP_INTERCEPTORS,
                  useClass: TokenInterceptor,
                  multi: true,
            },
      ],
      bootstrap: [HomeComponent],
})
export class AppModule {}

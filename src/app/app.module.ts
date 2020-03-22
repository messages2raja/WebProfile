import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HomeComponent} from './home/home.component';
import {BannerComponentComponent} from './banner-component/banner-component.component';
import {CompanyComponent} from './company/company.component';
import {SkillsetComponent} from './skillset/skillset.component';
import {PortfolioComponent} from './portfolio/portfolio.component';
import {EducationComponent} from './education/education.component';
import {FooterComponent} from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CompanyComponent,
    SkillsetComponent,
    PortfolioComponent,
    EducationComponent,
    FooterComponent,
    BannerComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

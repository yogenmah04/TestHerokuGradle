import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { TestHerokuGradleSharedModule } from 'app/shared/shared.module';
import { TestHerokuGradleCoreModule } from 'app/core/core.module';
import { TestHerokuGradleAppRoutingModule } from './app-routing.module';
import { TestHerokuGradleHomeModule } from './home/home.module';
import { TestHerokuGradleEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    TestHerokuGradleSharedModule,
    TestHerokuGradleCoreModule,
    TestHerokuGradleHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    TestHerokuGradleEntityModule,
    TestHerokuGradleAppRoutingModule
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent]
})
export class TestHerokuGradleAppModule {}

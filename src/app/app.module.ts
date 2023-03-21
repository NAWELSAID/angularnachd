import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http'

import { FeedbackComponent } from './components/feedback/feedback.component';
import { PostComponent } from './components/post/post.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SolustionComponent } from './components/solustion/solustion.component';
import { StorisComponent } from './components/storis/storis.component';
import { TeamComponent } from './components/team/team.component';
import { HomeComponent } from './pages/home/home.component';
import { PpostComponent } from './pages/ppost/ppost.component';
import { HeaderComponent } from './components/header/header.component';
import { PstorisComponent } from './pages/pstoris/pstoris.component';
import { PsolustionComponent } from './pages/psolustion/psolustion.component';
import { PprojectComponent } from './pages/pproject/pproject.component';
import { ContactComponent } from './pages/contact/contact.component';
import { WhatwedoComponent } from './components/whatwedo/whatwedo.component';
import { AboutComponent } from './pages/about/about.component';
import { Header1Component } from './components/header1/header1.component';
import { StatistiqueComponent } from './components/statistique/statistique.component';
import { IdentiteComponent } from './components/identite/identite.component';
import { VisualidentiteComponent } from './components/visualidentite/visualidentite.component';
import { LogosComponent } from './components/logos/logos.component';
import { PartenairesComponent } from './components/partenaires/partenaires.component';
import { FooterComponent } from './components/footer/footer.component';
import { SlidstorisComponent } from './components/slidstoris/slidstoris.component';
import { WwdComponent } from './components/wwd/wwd.component';
import { FormulaireComponent } from './pages/formulaire/formulaire.component';
@NgModule({
  declarations: [
    AppComponent,
    StorisComponent,
    PostComponent,
    SolustionComponent,
    ProjectsComponent,
    TeamComponent,
    FeedbackComponent,
    HomeComponent,
    PpostComponent,
    HeaderComponent,
    PstorisComponent,
    PsolustionComponent,
    PprojectComponent,
    ContactComponent,
    WhatwedoComponent,
    AboutComponent,
    Header1Component,
    StatistiqueComponent,
    IdentiteComponent,
    VisualidentiteComponent,
    LogosComponent,
    PartenairesComponent,
    FooterComponent,
    SlidstorisComponent,
    WwdComponent,
    FormulaireComponent,
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

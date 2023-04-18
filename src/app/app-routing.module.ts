
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { Header1Component } from './components/header1/header1.component';
import { IdentiteComponent } from './components/identite/identite.component';
import { SlidstorisComponent } from './components/slidstoris/slidstoris.component';
import { StatistiqueComponent } from './components/statistique/statistique.component';
import { VisualidentiteComponent } from './components/visualidentite/visualidentite.component';
import { WhatwedoComponent } from './components/whatwedo/whatwedo.component';
import { NachdumsfeedbackComponent } from './nachdumsfeedback/nachdumsfeedback.component';
import { AboutComponent } from './pages/about/about.component';
import { AprojectComponent } from './pages/aproject/aproject.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FormulaireComponent } from './pages/formulaire/formulaire.component';
import { HomeComponent } from './pages/home/home.component';
import { PpostComponent } from './pages/ppost/ppost.component';
import { PprojectComponent } from './pages/pproject/pproject.component';
import { PsolustionComponent } from './pages/psolustion/psolustion.component';
import { PstorisComponent } from './pages/pstoris/pstoris.component';



const routes: Routes = [
  {path :"home" , component : HomeComponent },
  {path :"" , component : HomeComponent },
  {path :"posts" , component : PpostComponent },
  {path :"storis" , component : PstorisComponent },
  {path :"Nachd-UMS" , component : PsolustionComponent },
  {path :"projects" , component : PprojectComponent },
  {path :"contact" , component : ContactComponent  },
  {path :"about" , component : AboutComponent  },
  {path :"statistique" , component : StatistiqueComponent  },
  {path :"identite" , component : IdentiteComponent  },
  {path :"visualidentite" , component : VisualidentiteComponent  },
  {path :"header" , component : Header1Component  },
  {path :"feedback" , component : FeedbackComponent  },
  {path :"whatwedo" , component : WhatwedoComponent },
  {path :"slidstoris" , component : SlidstorisComponent },
  {path :"formulaire" , component :FormulaireComponent },
  {path :"nachdumsfeedback" , component :NachdumsfeedbackComponent },
  {path :"aproject" , component :AprojectComponent },




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

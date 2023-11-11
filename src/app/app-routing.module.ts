import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EtudiantEvalListComponent } from './etudiant-eval-list/etudiant-eval-list.component';

const routes: Routes = [{path:'etudevals',component:EtudiantEvalListComponent},
                        {path:'etudevals',component:EtudiantEvalListComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Component, OnInit } from '@angular/core';
import { EtudiantEval } from './models/etudiant-eval.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  etudiants!: EtudiantEval[];
  ngOnInit() {
    this.etudiants=[
      new EtudiantEval('Maryoumaa','GT TST','Brillant!',6),
      new EtudiantEval('Mohamed','GT TST','Moyenne!',2),
      new EtudiantEval('Aloulou','GT TST','Tres bon!',3)
    ]
  }
}
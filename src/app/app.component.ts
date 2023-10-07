import { Component, OnInit } from '@angular/core';
import { EtudiantEval } from './models/etudiant-eval.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  student1!:EtudiantEval;
  student2!:EtudiantEval;
  student3!:EtudiantEval;

  ngOnInit(){
    this.student1 = new EtudiantEval(
      'Maryoumaaa',
      'GT TST',
      'Brillante!',
      6,
      'pfa'
    );
    this.student2 = new EtudiantEval(
      'Mohamed',
      'GT TST',
      'Moyenne!',
      2,
    );
    this.student3 = new EtudiantEval(
      'Aloulou',
      'GT TST',
      'Tres moyenne!',
      1,
    );
  }
}
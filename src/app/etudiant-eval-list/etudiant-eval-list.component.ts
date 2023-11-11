import { Component,OnInit } from '@angular/core';
import { EtudiantEval } from '../models/etudiant-eval.model';
import { EtudiantEvalService } from '../services/etudiant-eval.service';
@Component({
  selector: 'app-etudiant-eval-list',
  templateUrl: './etudiant-eval-list.component.html',
  styleUrls: ['./etudiant-eval-list.component.scss']
})
export class EtudiantEvalListComponent {
  etudiants!: EtudiantEval[];
  constructor(private etudiantEvalService:EtudiantEvalService){}
  
  ngOnInit() {
    this.etudiants=this.etudiantEvalService.etudiants
  }

}

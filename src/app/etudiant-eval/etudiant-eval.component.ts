import { Component, OnInit, Input} from '@angular/core';
import { EtudiantEval } from '../models/etudiant-eval.model';
import {NgForm} from '@angular/forms'
import { EtudiantEvalService } from '../services/etudiant-eval.service';


@Component({
  selector: 'app-etudiant-eval',
  templateUrl: './etudiant-eval.component.html',
  styleUrls: ['./etudiant-eval.component.scss']
})
export class EtudiantEvalComponent implements OnInit {
  constructor(private etudiantEvalService:EtudiantEvalService){}
  @Input() etudiant!: EtudiantEval;
  prenomEnseignant!:string;
  

  ngOnInit() {
    this.prenomEnseignant="entrer nom !"
  }

  onClick(b:0|1){
    this.etudiantEvalService.modifBonusEtudiantEval(this.etudiant.id,b);
  }

  onSubmitForm(form: NgForm){
    console.log(form.value);
  }
}

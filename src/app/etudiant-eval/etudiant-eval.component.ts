import { Component, OnInit, Input} from '@angular/core';
import { EtudiantEval } from '../models/etudiant-eval.model';

@Component({
  selector: 'app-etudiant-eval',
  templateUrl: './etudiant-eval.component.html',
  styleUrls: ['./etudiant-eval.component.scss']
})
export class EtudiantEvalComponent implements OnInit {
  @Input() etudiant!: EtudiantEval;

  ngOnInit() {
  }

  onClick(){
    this.etudiant.bonus++;
  }
}

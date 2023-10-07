import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-etudiant-eval',
  templateUrl: './etudiant-eval.component.html',
  styleUrls: ['./etudiant-eval.component.scss']
})
export class EtudiantEvalComponent {
  prenom!: string;
  classe!: string;
  comment!: string;
  bonus!: number;

  ngOnInit() {
    this.prenom = "Maryouma";
    this.classe = '3GT TST :)';
    this.comment = "";
    this.bonus = 0;
  }

  getPrenom(): string{
    return this.prenom;
  }

  isDisabled=true;
  clickCount = 0
  onClick(){
    this.clickCount++;
  }
}

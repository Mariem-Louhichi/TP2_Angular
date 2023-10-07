export class EtudiantEval {
    prenom!: string;
    classe!:string;
    comment!:string;
    bonus!:number;
    experienceAngular?:string;

    constructor(p: string, classe: string, comment: string, bonus:number, experienceAngular?:string){
        this.prenom = p;
        this.classe = classe;
        this.comment = comment;
        this.bonus = bonus;
        this.experienceAngular = experienceAngular;
    }
}
export class EtudiantEval {
    prenom!: string;
    classe!:string;
    comment!:string;
    bonus!:number;
    experienceAngular?:string;
    inscriDate!:Date;
    id!:number;

    constructor(id:number, p: string, classe: string, comment: string, bonus:number,inscriDate:Date, experienceAngular?:string,){
        this.prenom = p;
        this.classe = classe;
        this.comment = comment;
        this.bonus = bonus;
        this.experienceAngular = experienceAngular;
        this.inscriDate=inscriDate;
        this.id=id;
    }
}
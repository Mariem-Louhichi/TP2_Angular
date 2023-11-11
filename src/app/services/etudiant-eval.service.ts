import { Injectable } from '@angular/core';
import {EtudiantEval}from'../models/etudiant-eval.model';

@Injectable({
  providedIn: 'root'
})
export class EtudiantEvalService {
  

  etudiants:EtudiantEval[]=[
    new EtudiantEval(0,'ahmed','gt tst','brillant',6,new Date(2021,5,7)),
    new EtudiantEval(1,'ali','gt tst','brillant',2,new Date(2021,5,8))

  ];
  getAllEtudiantEval():EtudiantEval[]{
    return this.etudiants;
  }

  findEtudiantEvalById(EtEvId:number):EtudiantEval{
    const EtEv=this.etudiants.find(element=>element.id===EtEvId);
    if(EtEv){
      return EtEv;}
    else{
      throw new Error('Not found!');
    }

    }

  addBonusEtudiantEval(EtEvId:number):void{
      const EtEv=this.findEtudiantEvalById(EtEvId);
      if(EtEv){
        EtEv.bonus++;
      }
      else{
        throw new Error('Not found!');
      }

    }

    modifBonusEtudiantEval(EtEvId:number,action:number):void{
      const EtEv=this.findEtudiantEvalById(EtEvId);
      if(EtEv){
        if(action===1)
          EtEv.bonus++;
        else
        EtEv.bonus--;
      }else
        throw new Error('Not found!');
    }
  }


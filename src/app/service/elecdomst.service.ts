import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Electro } from '../domain/elecdomes';


@Injectable({
  providedIn: 'root'
})
export class ElecdomstService {

  constructor(public afs: AngularFirestore) { }


  save(electro:Electro){
    const refElectros = this.afs.collection("electrod"); 
    if (electro.eid == null){
      electro.eid = this.afs.createId(); 
    }

    refElectros.doc(electro.eid).set(Object.assign({}, electro));
  }

  getElectros():Observable<any[]>{
    return this.afs.collection("electrod").valueChanges();
  }


  
  getBusqueda(buscar:string): Observable<any[]>{
    return this.afs.collection("electrod",
        ref=> ref.where("nombre", ">=",buscar)).valueChanges();
  }


}

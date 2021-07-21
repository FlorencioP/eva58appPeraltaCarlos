import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ElecdomstService } from '../service/elecdomst.service';
import { AngularFirestore } from '@angular/fire/firestore';


@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
})
export class ListaPage implements OnInit {

  constructor(private router: Router,
              private electroService: ElecdomstService,
              public afs: AngularFirestore) { }

  electro: any;



  ngOnInit() {
    this.electro =  this.electroService.getElectros();
  }

  busca(){
    console.log(this.electro)
    this.electroService.save(this.electro)
  }

}

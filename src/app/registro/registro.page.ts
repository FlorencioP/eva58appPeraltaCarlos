import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Electro } from '../domain/elecdomes';
import { ElecdomstService } from '../service/elecdomst.service';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  electro: Electro = new Electro();

  constructor(private router: Router,
              private contactoService: ElecdomstService) { }

  ngOnInit() {
  }


  guardar(){
    console.log(this.electro)
    this.contactoService.save(this.electro)
  }

}

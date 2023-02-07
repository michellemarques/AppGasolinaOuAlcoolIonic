import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() { }

  public resultado: String = "Resultado";
  precoAlcool!: Number;
  precoGasolina!: Number;


  calcular() {


    // validação de preenchimento de campos
    if (this.precoAlcool && this.precoGasolina) {

      let pAlcool = Number(this.precoAlcool);
      let pGasolina = Number(this.precoGasolina);

      let res = pAlcool / pGasolina;
      if(res >= 0.7) {
        this.resultado ="Melhor utilizar Gasolina";
      }else {
        this.resultado ="Melhor utilizar Álcool";
      }

    } else {
      this.resultado = "Preencha corretamente os campos";
      
    }
  }

}

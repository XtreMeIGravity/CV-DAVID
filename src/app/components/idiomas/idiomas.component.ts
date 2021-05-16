import { DdrSpinnerService } from 'ddr-spinner';
import { DdrConfigurationService } from 'ddr-configuration';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-idiomas',
  templateUrl: './idiomas.component.html',
  styleUrls: ['./idiomas.component.css']
})
export class IdiomasComponent implements OnInit {

  public idiomas: any[];
  public load = false;

  constructor(
    private router: Router,
    private ddrConfigurationService: DdrConfigurationService,
    private ddrSpinnerService: DdrSpinnerService
  ) { }

  ngOnInit() {


    this.ddrSpinnerService.showSpinner();
    const config = this.ddrConfigurationService.getData("config");

    if (!config.showSkills) {
      this.router.navigate(['/inicio']);
    }

    const data = this.ddrConfigurationService.getData("data");
    this.idiomas = data.idiomas;

    for (let idioma of this.idiomas) {
      idioma.class_color = this.chooseColor(idioma);
    }

    this.ddrSpinnerService.hideSpinner();

  }

  chooseColor(idioma: any) {

    let class_color = { "color": '', "class_progress": '' };
    if (idioma.valor >= 80 && idioma.valor <= 100) {
      class_color.color = "green";
      class_color.class_progress = "bg-success";
    } else if (idioma.valor >= 60 && idioma.valor < 80) {
      class_color.color = "blue";
      class_color.class_progress = "bg-info";
    } else if (idioma.valor >= 40 && idioma.valor < 60) {
      class_color.color = "yellow";
      class_color.class_progress = "bg-warning";
    } else {
      class_color.color = "red";
      class_color.class_progress = "bg-danger";
    }

    return class_color;
  }

}

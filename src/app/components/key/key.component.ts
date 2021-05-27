import { DdrSpinnerService } from "ddr-spinner";
import { DdrConfigurationService } from "ddr-configuration";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-key",
  templateUrl: "./key.component.html",
  styleUrls: ["./key.component.css"],
})
export class KeyComponent implements OnInit {
  public Keys: any[];
  constructor(
    private ddrConfigurationService: DdrConfigurationService,
    private ddrSpinnerService: DdrSpinnerService
  ) {}

  ngOnInit() {
    this.ddrSpinnerService.showSpinner();
    const data = this.ddrConfigurationService.getData("data");
    this.Keys = data.Keys;

    this.ddrSpinnerService.hideSpinner();
  }
}

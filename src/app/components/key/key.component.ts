import { DdrSpinnerService } from "ddr-spinner";
import { DdrConfigurationService } from "ddr-configuration";
import { Component, OnInit } from "@angular/core";
import { saveAs as importedSaveAs } from "file-saver";
import { DataService } from './../../services/data.service';

@Component({
  selector: "app-key",
  templateUrl: "./key.component.html",
  styleUrls: ["./key.component.css"],
})
export class KeyComponent implements OnInit {
  public Keys: any[];
  constructor(
    private ddrConfigurationService: DdrConfigurationService,
    private ddrSpinnerService: DdrSpinnerService,
    private dataService: DataService
  ) {}

  ngOnInit() {
    this.ddrSpinnerService.showSpinner();
    const data = this.ddrConfigurationService.getData("data");
    this.Keys = data.Keys;

    this.ddrSpinnerService.hideSpinner();
  }

  downloadFile(FileName) {

    this.dataService.downloadFile(`assets/pdf/${FileName}`).subscribe(blob => {
      importedSaveAs(blob, `${FileName}`);
    });
  }

}

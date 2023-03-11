import { Component, OnInit } from '@angular/core';
import { Transferencia } from './../models/transferencia.model';
import { TransferenciaService } from './../services/transferencia.service';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss'],
})
export class ExtratoComponent implements OnInit {
  public transferencias: Array<Transferencia>;

  constructor(private _service: TransferenciaService) {}

  public ngOnInit(): void {
    this._service.todas().subscribe((transferencias) => {
      this.transferencias = transferencias;
    });
  }
}

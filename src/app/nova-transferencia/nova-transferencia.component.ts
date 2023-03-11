import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Transferencia } from './../models/transferencia.model';
import { TransferenciaService } from './../services/transferencia.service';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent {
  public transferencia: Transferencia = {};

  constructor(
    private _service: TransferenciaService,
    private _router: Router
  ) {}

  public transferir() {
    this._service
      .transferir({ ...this.transferencia, data: new Date() })
      .subscribe(
        () => this._router.navigate(['extrato']),
        (error) => console.error(error)
      );
  }
}

import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { Profesional } from '../../models/profesional.model';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  lista_Estudiantes!: Profesional[];
  constructor(private apiSVC: ApiService) { }

  ngOnInit(): void {
    this.apiSVC.getData().pipe(
      tap((Estudiantes: Profesional[])=> this.lista_Estudiantes=Estudiantes)
    )
    .subscribe();
  }

}

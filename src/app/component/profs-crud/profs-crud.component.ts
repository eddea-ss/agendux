import { Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { ApiService } from 'src/app/services/api.service';
import { Profesional } from 'src/app/models/profesional.model';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogProfsComponent } from './dialog-profs/dialog-profs.component';
import { RouterLink, RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-profs-crud',
  templateUrl: './profs-crud.component.html',
  styleUrls: ['./profs-crud.component.scss']
})

export class ProfsCrudComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nombre', 'dateJoinn','profesionalArchivo','acciones'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private apiSVC: ApiService,private dialog: MatDialog) {
  }
  ngOnInit(): void {
    this.getProfs();
  }

  /**
   *  Obtiene todos los Estudiantes y prepara sorting and paginator de la tabla 
   **/
  getProfs(){
    this.apiSVC.getData()
    .subscribe({
      next:(res)=>{
        this.dataSource= new MatTableDataSource(res);
        this.dataSource.paginator= this.paginator;
        this.dataSource.sort=this.sort;
        
      }
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  addDialog(){
    this.dialog.open(DialogProfsComponent,{
      width:'500px'
    })
    this.getProfs();
  }

  editDialog(row:any){
    this.dialog.open(DialogProfsComponent,{
      width: '500px',
      data: row
    })
  }

  deleteDialog(row:any){
    this.apiSVC.deleteData(row.id);
    this.getProfs();
  }
}



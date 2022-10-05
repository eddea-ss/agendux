import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup , FormBuilder, Validators, FormControl} from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-profs',
  templateUrl: './dialog-profs.component.html',
  styleUrls: ['./dialog-profs.component.scss']
})
export class DialogProfsComponent implements OnInit {

  protected profesionalForm!: FormGroup;
  date = new FormControl(new Date());
  protected label:string= 'Agregar';

  constructor(private formBuilder: FormBuilder,
    private apiSVC: ApiService,
    @Inject(MAT_DIALOG_DATA) public editData : any,
    private dialogRef: MatDialogRef<DialogProfsComponent>) {}

  ngOnInit(): void {
    this.profesionalForm=this.formBuilder.group({
      id: ['',Validators.nullValidator],
      nombre: ['',Validators.required],
      dateJoinn: [this.date.value,Validators.nullValidator],
      profesionalArchivo: ['',Validators.nullValidator]

    });
    if(this.editData){
      this.label= "Editar";
      this.profesionalForm=this.formBuilder.group({
        id: [this.editData.id,Validators.nullValidator],
        nombre: [this.editData.nombre,Validators.required],
        dateJoinn: [this.editData.dateJoinn,Validators.nullValidator],
        profesionalArchivo: [this.editData.profesionalArchivo,Validators.nullValidator]
      });
    }
  }

  /**
   * Envia los datos del formbuilder con el apiSVC.
   * Se cambia el tipo de datos antes de enviar.
   */
  onClickSubmit() {
    if (!this.editData){
      const profesional:any ={nombre:this.profesionalForm.value.nombre,dateJoinn: this.profesionalForm.value.dateJoinn};
      this.apiSVC.addData(profesional,'profesional').subscribe();
      return;
    }
    const profesional:any={id: this.profesionalForm.value.id,nombre:this.profesionalForm.value.nombre,dateJoinn: this.profesionalForm.value.dateJoinn, profesionalArchivo: this.profesionalForm.value.profesionalArchivo};
    this.apiSVC.editData(profesional);
    return;
  }
 
}

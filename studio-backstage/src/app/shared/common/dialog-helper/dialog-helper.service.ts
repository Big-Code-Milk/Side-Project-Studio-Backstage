import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef, MatDialogConfig } from '@angular/material/dialog';
import { DialogComponent } from '../../../components/layout/dialog/dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DialogHelperService {

  constructor(public dialog: MatDialog) {

  }

  ShowMessage<T>(DialogConfig: MatDialogConfig<T>): MatDialogRef<DialogComponent, any> {
    DialogConfig.height = DialogConfig.height ?? "30vh";
    DialogConfig.width = DialogConfig.width ?? "30vw";
    console.log(DialogConfig.data);
    return this.dialog.open(DialogComponent);
  }
}

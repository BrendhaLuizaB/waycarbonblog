import { Component, Input } from '@angular/core';
import { ReportComponent } from '../report/report.component';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-modal-report',
  standalone: true,
  imports: [ReportComponent],
  templateUrl: './modal-report.component.html',
  styleUrl: './modal-report.component.css',
})
export class ModalReportComponent {
  @Input() isOpen = true;
  constructor(private dialogRef: MatDialog, private _snackBar: MatSnackBar) {}

  openSnackBarAndCloseModal(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 3000,
    });

      this.dialogRef.closeAll();
  }
}

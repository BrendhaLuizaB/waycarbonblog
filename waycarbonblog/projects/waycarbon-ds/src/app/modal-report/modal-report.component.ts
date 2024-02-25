import { Component, Input } from '@angular/core';
import { ReportComponent } from '../report/report.component';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-modal-report',
  standalone: true,
  imports: [ReportComponent, MatButtonModule],
  templateUrl: './modal-report.component.html',
  styleUrl: './modal-report.component.css',
})
export class ModalReportComponent {
  constructor(private dialogRef: MatDialog, private _snackBar: MatSnackBar) {}
  @Input() isOpen = true;
  

  openSnackBarAndCloseModal(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 3000,
    });

      this.dialogRef.closeAll();
  }

  fecharModal() {
  }
}

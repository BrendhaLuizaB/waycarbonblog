import { Component, Input } from '@angular/core';
import {
  MatDialog,
} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ModalReportComponent } from '../modal-report/modal-report.component';

@Component({
  selector: 'app-report',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule, ModalReportComponent],
  templateUrl: './report.component.html',
  styleUrl: './report.component.css'
})

export class ReportComponent {
  @Input() isOpen = false;
  constructor(private dialogRef : MatDialog){}
  
  openDialog(){
    this.dialogRef.open(ModalReportComponent);
}
}
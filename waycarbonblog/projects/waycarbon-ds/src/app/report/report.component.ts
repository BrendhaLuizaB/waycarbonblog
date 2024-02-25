import { Component, Input } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { ModalReportComponent } from '../modal-report/modal-report.component';

@Component({
  selector: 'app-report',
  standalone: true,
  imports: [ModalReportComponent],
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

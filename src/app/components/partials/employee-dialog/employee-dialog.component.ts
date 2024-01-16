import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.Service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-employee-dialog',
  templateUrl: './employee-dialog.component.html',
  styleUrls: ['./employee-dialog.component.css'],
  providers: [EmployeeService],
})
export class EmployeeDialogComponent {
  constructor(
    private employeeService: EmployeeService,
    private router: Router,
    public dialogRef: MatDialogRef<EmployeeDialogComponent>,
    private dialog: MatDialog
  ) {}

  addEmployee(employeeData: any) {
    this.employeeService.saveEmployee(employeeData).subscribe(
      (result: any) => {
        console.warn(result);

        // Überprüfe, ob die ID im result-Objekt vorhanden ist
        if (result && result.id) {
          const newEmployeeId = result.id;

          // Schließe den Dialog
          this.dialogRef.close(newEmployeeId);

          // Navigiere zur Detailseite des neuen Mitarbeiters
          this.router.navigate(['/employee', newEmployeeId]);
        }
      },
      (error) => {
        console.error('Fehler beim Hinzufügen des Mitarbeiters:', error);
      }
    );
  }

  abbrechen() {
    this.dialogRef.close();
  }
}

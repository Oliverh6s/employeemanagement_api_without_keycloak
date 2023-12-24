import {Component, Inject} from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle
} from "@angular/material/dialog";
import {Employees} from "../../../shared/models/employees";
import {EmployeeService} from "../../../services/employee.Service";
import {catchError, throwError} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-employee-delete-dialog',
  standalone: true,
  imports: [
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions
  ],
  templateUrl: './employee-delete-dialog.component.html',
  styleUrl: './employee-delete-dialog.component.css'
})
export class EmployeeDeleteDialogComponent {
  employeeData: Employees

  constructor(
    public dialogRef: MatDialogRef<EmployeeDeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private employeeService: EmployeeService,
    private router: Router,
  ) {
    this.employeeData = data.employee
  }

  handleClose() {
    this.dialogRef.close()
  }
  handleDeleteEmployee(){
    const employeeId: number = this.employeeData.id
    this.employeeService.deleteEmployeeById(employeeId).pipe(
      catchError((error) => {
        console.error("Fehler beim Löschen des Employees:", error)
        return throwError(() => new Error(error))
      })
    ).subscribe((response) => {
      console.log("Employee erfolgreich gelöscht:", response)
      this.handleClose()
      this.router.navigate(["/"])
    })
  }
}

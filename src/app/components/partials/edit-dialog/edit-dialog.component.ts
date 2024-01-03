// edit-dialog.component.ts
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Employees } from '../../../shared/models/employees';
import { EmployeeService } from '../../../services/employee.Service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.css'],
  providers: [EmployeeService],
})
export class EditDialogComponent implements OnInit {
  employeeData: any;
  tempFirstName: string | undefined;
  tempLastName: string | undefined;
  tempPhone: string | undefined;
  tempStreet: string | undefined;
  tempCity: string | undefined;
  tempPostcode: string | undefined;

  constructor(
    public dialogRef: MatDialogRef<EditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private employeeService: EmployeeService,
    private router: Router
  ) {
    this.employeeData = data.employee;
  }

  ngOnInit(): void {
    // Lade bereits vorhandene Daten beim Initialisieren des Dialogs
    this.tempFirstName = this.employeeData.firstName;
    this.tempLastName = this.employeeData.lastName;
    this.tempPhone = this.employeeData.phone;
    this.tempStreet = this.employeeData.street;
    this.tempCity = this.employeeData.city;
    this.tempPostcode = this.employeeData.postcode;
  }

  updateEmployee() {
    // Übernehme die Änderungen nur, wenn der Button gedrückt wird
    this.employeeData.firstName = this.tempFirstName;
    this.employeeData.lastName = this.tempLastName;
    this.employeeData.phone = this.tempPhone;
    this.employeeData.street = this.tempStreet;
    this.employeeData.city = this.tempCity;
    this.employeeData.postcode = this.tempPostcode;

    this.employeeService
      .updateEmployee(this.employeeData.id, this.employeeData)
      .subscribe(
        (response) => {
          console.log('Mitarbeiter erfolgreich aktualisiert:', response);
          // Hier könntest du eine Erfolgsmeldung anzeigen oder den Benutzer umleiten, wenn gewünscht.
        },
        (error) => {
          console.error('Fehler beim Aktualisieren des Mitarbeiters:', error);
          // Hier könntest du eine Fehlermeldung anzeigen oder andere Maßnahmen ergreifen.
        }
      );
  }
}

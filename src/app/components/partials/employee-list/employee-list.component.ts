import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmployeeService } from 'src/app/services/employee.Service';
import { Employees } from 'src/app/shared/models/employees';
import { ActivatedRoute, Router } from '@angular/router';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { MatDialog } from '@angular/material/dialog';
import { EmployeeDialogComponent } from '../employee-dialog/employee-dialog.component';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
  animations: [
    trigger('fade', [
      state('void', style({ opacity: 0 })),
      transition(':enter, :leave', [animate('120ms ease-in-out')]),
    ]),
  ],
})
export class EmployeeListComponent implements OnInit {
  employees: Employees[] = [];
  filteredEmployees: Employees[] = [];
  searchForm: FormGroup;
  isAscendingSort = true;

  @ViewChild('searchInput') searchInput: ElementRef | undefined;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private employeeService: EmployeeService,
    private activatedRoute: ActivatedRoute,
    private dialog: MatDialog
  ) {
    this.searchForm = this.fb.group({
      searchTerm: [''],
    });

    this.searchForm.get('searchTerm')?.valueChanges.subscribe((searchTerm) => {
      this.filterEmployees(searchTerm);
    });
  }

  selectedEmployeeIndex: number | null = null;

  selectEmployee(index: number) {
    this.selectedEmployeeIndex = index;
  }

  ngOnInit() {
    this.loadAndSortEmployees();
  }

  loadAndSortEmployees() {
    this.employeeService.getAll().subscribe((data) => {
      this.employees = data;
      this.filterEmployees(this.searchForm.get('searchTerm')?.value);
    });
  }

  filterEmployees(searchTerm: string) {
    searchTerm = searchTerm.toLowerCase();
    this.filteredEmployees = this.employees.filter(
      (employee) =>
        employee.firstName.toLowerCase().includes(searchTerm) ||
        employee.lastName.toLowerCase().includes(searchTerm)
    );
    this.applySort();
  }

  toggleSort() {
    this.isAscendingSort = !this.isAscendingSort;
    this.applySort();
  }

  applySort() {
    this.filteredEmployees = [...this.filteredEmployees];
    this.filteredEmployees.sort((a, b) => {
      const nameA = `${a.lastName} ${a.firstName}`.toLowerCase();
      const nameB = `${b.lastName} ${b.firstName}`.toLowerCase();
      return this.isAscendingSort
        ? nameA.localeCompare(nameB)
        : nameB.localeCompare(nameA);
    });
  }

  navigateToDetail(employeeId: number) {
    this.router.navigate(['/employee', employeeId]);
  }

  openAddEmployeeDialog() {
    const dialogRef = this.dialog.open(EmployeeDialogComponent, {
      // You can add dialog configuration options here
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
      this.loadAndSortEmployees();
    });
  }

  clearSearch() {
    this.searchForm.get('searchTerm')?.setValue('');
    this.filterEmployees('');

    if (this.searchInput) {
      this.searchInput.nativeElement.focus();
    }
  }
}

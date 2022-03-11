import { Component, OnInit } from '@angular/core';
import { EmployeesDataService } from '../services/employees-data.service';

@Component({
  selector: 'app-master-view',
  templateUrl: './master-view.component.html',
  styleUrls: ['./master-view.component.scss']
})
export class MasterViewComponent implements OnInit {
  public employeesDataEmployees: any = null;

  constructor(
    private employeesDataService: EmployeesDataService,
  ) {}

  ngOnInit() {
    // depending on implementation, data subscriptions might need to be unsubbed later
    this.employeesDataService.getEmployees().subscribe(data => this.employeesDataEmployees = data);
  }
}

import { Component, OnInit, ViewChild } from '@angular/core';
import { NoviMember } from 'app/model/NoviMember';
import { NoviService } from 'app/service/novi.service';
import {FormControl, Validators} from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { rowsAnimation } from 'app/animation/table.animations';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss'],
  animations: [rowsAnimation]
})
export class MembersComponent implements OnInit {

  public dataSource: MatTableDataSource<NoviMember> = new MatTableDataSource();
  public displayedColumns: string[] = [
    'Name',
    'MemberStatus',
    'FirstName',
    'LastName',
    'CustomerType',
    'Email',
    'Phone',
    'Mobile'
  ];
  public isLoading = false;
  public nameFilter = new FormControl('', [Validators.required]);



  constructor(private noviService: NoviService) { }

  ngOnInit() {
    this.getMemberList();
  }

  public applyFilter(event: KeyboardEvent) {
    let nameInput = event.target as HTMLInputElement;
    let filterValue = nameInput.value.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  private getMemberList() {
    this.isLoading = true;
    this.noviService.requestMemberList()
    .subscribe({
      next: data => {
        this.setGridDisplay(data?.Results)
        this.isLoading = false;
      }
    });
  }

  private setGridDisplay(data: NoviMember[]) {
    this.dataSource = new MatTableDataSource(data);
    console.log("data");
    for( let i = 0; i < data.length; i++) {
      console.log(data[i].Active);
    }
    this.setGridFilterPredicate();
  }

  private setGridFilterPredicate() {
    this.dataSource.filterPredicate = function(data: NoviMember, filter: string): boolean {
      console.log(filter);
      return data.Name.toLowerCase().includes(filter);
    };
  }
}

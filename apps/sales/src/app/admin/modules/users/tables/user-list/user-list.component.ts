import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig,  MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';

import { AngularFirestore } from '@angular/fire/firestore';
import { MatTableDataSource } from '@angular/material/table';

import { AddUserComponent } from '../../modals/add-user/add-user.component';
import { EditUserComponent } from '../../modals/edit-user/edit-user.component';
import { UserService } from './../../../../../core/services/user.service';
import { ConfirmDeleteService } from '../../../../../shared/services/confirm-delete.service';

@Component({
  selector: 'admin-user-list',
  templateUrl: './user-list.component.html',
})
export class UserListComponent implements OnInit {
  users: MatTableDataSource<any>;
  displayedColumns = [
    'displayName',
    'tenant',
    'role',
    'email',
    'uid',
    'edit',
    'delete',
  ];
  @ViewChild(MatSort, { static: false }) sort: MatSort;

  constructor(private afs: AngularFirestore, public dialog: MatDialog, public service: UserService, public confirmDeleteService: ConfirmDeleteService) { }

  addUser(data): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.maxHeight = "95vh";
    dialogConfig.autoFocus = true;
    dialogConfig.data = data;
    const dialogRef = this.dialog.open(AddUserComponent, dialogConfig);
  }

  editUser(data): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.maxHeight = "95vh";
    dialogConfig.autoFocus = true;
    dialogConfig.data = data;
    const dialogRef = this.dialog.open(EditUserComponent, dialogConfig);
  }
  deleteUser(data): void {
    const deleteRef = this.confirmDeleteService.confirmDelete();
  }

  ngOnInit() {
    this.afs
      .collection<any>('users')
      // 1c: Request an Observable with valueChanges()
      .valueChanges()
      // 1d: Subscribe to that Observable...
      .subscribe(data => {
        // 1e: ...and Pass that Data to the Material Data Table
        this.users = new MatTableDataSource(data);
        this.users.sort = this.sort;
      });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.users.filter = filterValue;
  }

  trackByUid(index, item) {
    return item.uid
  }
}
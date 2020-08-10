import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { AngularFirestore } from '@angular/fire/firestore';
import { ConfirmDeleteService } from '../../../../../../../../shared/services/confirm-delete.service';
import { NewItemComponent } from '../../modals/new-item/new-item.component';
import { EditItemComponent } from '../../modals/edit-item/edit-item.component';

@Component({
  selector: 'team-manage-items',
  templateUrl: './manage-items.component.html',
})
export class ManageItemsComponent {


  @ViewChild(MatSort, { static: false }) sort: MatSort;

  constructor(public dialog: MatDialog, public confirmDeleteService: ConfirmDeleteService) {}

  addItem(): void {
    const dialogRef = this.dialog.open(NewItemComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  
  editItem(): void {
    const dialogRef = this.dialog.open(EditItemComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  deleteItem(): void {
    const deleteRef = this.confirmDeleteService.confirmDelete();
  }

}
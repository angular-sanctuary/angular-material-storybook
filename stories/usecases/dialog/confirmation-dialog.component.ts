import {Component, ViewEncapsulation} from "@angular/core";
import {MatDialog, MatDialogModule} from "@angular/material/dialog";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";

@Component({
  template: `
    <section>
      <button mat-stroked-button (click)="openDialog()">OPEN DIALOG</button>
    </section>
  `,
  styles: [
    'section {display: flex; justify-content: center; align-items: center; height: 100%}',
    '.dialog-border mat-dialog-container {border-radius: 20px; border: 5px solid green} '
  ],
  standalone: true,
  imports: [
    MatDialogModule,
    MatButtonModule
  ],
  encapsulation: ViewEncapsulation.None
})
export class ConfirmationDialogComponent {
  constructor(private readonly dialog: MatDialog) {}

  openDialog(): void {
    this.dialog.open(ConfirmationDialogDialogComponent, {
      width: '250px',
      autoFocus: false,
      panelClass: 'dialog-border'
    });
  }
}

@Component({
  template: `
    <mat-icon>check_circle</mat-icon>
    <h3>Your order has been created successfully!</h3>
    <button mat-stroked-button mat-dialog-close>TRACK MY ORDER</button>
  `,
  styles: [
    ':host  {display: flex; justify-content: center; align-items: center; flex-direction: column}',
    'mat-icon {color: green; height: 6rem; width: 6rem; font-size: 6rem}'
  ],
  standalone: true,
  imports: [
    MatIconModule,
    MatButtonModule,
    MatDialogModule
  ]
})
class ConfirmationDialogDialogComponent {

}

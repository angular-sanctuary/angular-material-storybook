import {Component} from "@angular/core";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";

@Component({
  template: `
    <form class="form-container">
      <h3 class="change-password__title">CHANGE PASSWORD</h3>
      <mat-form-field appearance="fill">
        <mat-label>Current password</mat-label>
        <input type="text" matInput autocomplete="off">
      </mat-form-field>

      <mat-form-field appearance="fill">
        <mat-label>New password</mat-label>
        <input type="password" matInput autocomplete="off">
        <button mat-icon-button matSuffix>
          <mat-icon>visibility_off</mat-icon>
        </button>
      </mat-form-field>

      <mat-form-field appearance="fill">
        <mat-label>Confirm new password</mat-label>
        <input type="password" matInput autocomplete="off">
        <button mat-icon-button matSuffix>
          <mat-icon>visibility_off</mat-icon>
        </button>
      </mat-form-field>

      <button class="change-password__save-button" mat-raised-button color="primary" type="submit">UPDATE PASSWORD</button>
      <button class="change-password__cancel-button" mat-stroked-button color="warn" type="button">CANCEL</button>
    </form>
  `,
  styles: [
    ':host {display: flex; justify-content: center; height: 100%; width: 100%}',
    '.form-container {display: flex; flex-direction: column; justify-content: center;}',
    '.change-password__save-button {margin-block-start: 1rem; margin-block-end: 1rem}',
    '.change-password__cancel-button {margin-block-end: 1rem}',
    '.change-password__title {margin-block-end: 3rem}'
  ],
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
  ]
})
export class ChangePasswordComponent {
  constructor() {
  }
}

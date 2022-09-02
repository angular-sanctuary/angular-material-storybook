import {Component} from "@angular/core";
import {MatDividerModule} from "@angular/material/divider";
import {MatRadioModule} from "@angular/material/radio";
import {MatIconModule} from "@angular/material/icon";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {CommonModule} from "@angular/common";
import {MatButtonModule} from "@angular/material/button";
import {FormsModule} from "@angular/forms";
import {MatToolbarModule} from "@angular/material/toolbar";

@Component({
  template: `
    <mat-toolbar color="primary">
      <mat-icon class="settings-header__icon">settings</mat-icon>
      SETTINGS
    </mat-toolbar>
    <main class="settings__main-container">
      <h3>DIRECT MESSAGES</h3>
      <mat-radio-group class="settings__messages-group" [ngModel]="'all'" color="primary">
        <mat-radio-button class="settings__messages-field" value="all">
          from all users
        </mat-radio-button>
        <mat-radio-button class="settings__messages-field" value="friends">
          from my friends
        </mat-radio-button>
        <mat-radio-button class="settings__messages-field" value="noone">
          no direct messages
        </mat-radio-button>
      </mat-radio-group>
      <br>
      <mat-divider></mat-divider>
      <h3>PREFERENCES</h3>
      <ul class="settings__preferences-list">
        <li class="settings__prefences-item">
          <div class="settings__prefences-item-title">
            <mat-icon>notifications</mat-icon>
            NOTIFICATIONS
          </div>
          <mat-slide-toggle color="primary" [ngModel]="true"></mat-slide-toggle>
        </li>
        <li class="settings__prefences-item">
          <div class="settings__prefences-item-title">
            <mat-icon>dark_mode</mat-icon>
            DARK MODE
          </div>
          <mat-slide-toggle color="primary"></mat-slide-toggle>
        </li>
      </ul>
      <br>
      <mat-divider></mat-divider>
      <h3>SECURITY</h3>
      <button mat-stroked-button color="warn">CHANGE PASSWORD</button>
    </main>
  `,
  styles: [
    `
      :host {
        display: flex;
        flex-direction: column;
      }
      .settings-header__icon {
        margin-inline-end: 1rem;
      }

      .settings__main-container {
        display: flex;
        flex-direction: column;
        padding: 1rem;
      }


      .settings__messages-group {
        display: flex;
        flex-direction: column;
      }

      .settings__messages-field + .settings__messages-field {
        margin-block-start: 0.5rem;
      }

      .settings__preferences-list {
        list-style-type: none;
        margin: 0;
        padding: 0;
      }

      .settings__prefences-item {
        display: flex;
        justify-content: space-between;
      }

      .settings__prefences-item + .settings__prefences-item {
        margin-block-start: 0.5rem;
      }

      .settings__prefences-item-title {
        display: flex;
        align-items: center;
      }

      @media (min-width: 800px) {
        :host {
          align-items: center;
        }
        .settings__main-container {
          max-width: 400px;
          width: calc(100% - 2rem);
        }
      }
    `
  ],
  standalone: true,
  imports: [
    CommonModule,
    MatDividerModule,
    MatSlideToggleModule,
    MatIconModule,
    MatRadioModule,
    FormsModule,
    MatToolbarModule,
    MatButtonModule
  ]
})
export class GenericSettingsComponent {
  constructor() {
  }
}

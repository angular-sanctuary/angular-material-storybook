import {Component} from "@angular/core";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatListModule} from "@angular/material/list";
import {MatDividerModule} from "@angular/material/divider";
import {MatButtonModule} from "@angular/material/button";

@Component({
  template: `
    <mat-toolbar>
      <mat-icon class="wifi-header__back-button">arrow_back</mat-icon>
      <span>Wi-Fi</span>
    </mat-toolbar>
    <mat-toolbar class="wifi-toolbar__activate" color="primary">
      <span>Activate Wi-Fi</span>
      <mat-slide-toggle color="primary"></mat-slide-toggle>
    </mat-toolbar>
    <main>
      <mat-action-list>
        <button mat-list-item>
          <mat-icon mat-list-icon>wifi</mat-icon>
          <div mat-line>yui23g</div>
          <div class="wifi__activated" mat-line><strong>Activated</strong></div>
          <button mat-icon-button>
            <mat-icon>settings</mat-icon>
          </button>
        </button>
      </mat-action-list>
      <mat-divider></mat-divider>
      <mat-action-list>
        <button mat-list-item>
          <mat-icon mat-list-icon>signal_wifi_4_bar</mat-icon>
          <div mat-line>7D7ZIOH3</div>
          <div mat-line>very fast</div>
        </button>
      </mat-action-list>
      <mat-action-list>
        <button mat-list-item>
          <mat-icon mat-list-icon>network_wifi_2_bar</mat-icon>
          <div mat-line>ez89u321j</div>
          <div mat-line>slow</div>
        </button>
      </mat-action-list>
      <mat-action-list>
        <button mat-list-item>
          <mat-icon mat-list-icon>network_wifi_3_bar</mat-icon>
          <div mat-line>huhuHI89Zza</div>
          <div mat-line>fast</div>
        </button>
      </mat-action-list>
    </main>
  `,
  styles: [
    `
      .wifi-header__back-button {
        margin-inline-end: 1rem;
      }

      .wifi-toolbar__activate {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }

      .wifi__activated {
        color: green;
      }
    `
  ],
  standalone: true,
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatSlideToggleModule,
    MatListModule,
    MatDividerModule,
    MatButtonModule
  ]
})
export class WifiSettingsComponent {
  constructor() {
  }
}

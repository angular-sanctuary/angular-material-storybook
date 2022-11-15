import {Component} from "@angular/core";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {OverlayModule} from "@angular/cdk/overlay";

@Component({
  selector: 'app-fab-icon-menu',
  template: `
    <button class="fab-menu-btn" mat-fab color="primary" aria-label="menu" cdkOverlayOrigin #trigger="cdkOverlayOrigin"
            (click)="isOpen = !isOpen">
      <mat-icon>menu</mat-icon>
    </button>
    <ng-template
      cdkConnectedOverlay
      [cdkConnectedOverlayOrigin]="trigger"
      [cdkConnectedOverlayOpen]="isOpen"
    >
      <ul class="fab-menu-list">
        <li>
          <button mat-fab>
            <mat-icon>person_search</mat-icon>
          </button>
        </li>
        <li>
          <button mat-fab>
            <mat-icon>domain_verification</mat-icon>
          </button>
        </li>
        <li>
          <button mat-fab>
            <mat-icon>preview</mat-icon>
          </button>
        </li>
        <li>
          <button mat-fab>
            <mat-icon>exit_to_app</mat-icon>
          </button>
        </li>
      </ul>
    </ng-template>
    ,
  `,
  styles: [
    ':host {height: 100vh; margin: 0;}',
    '.fab-menu-btn {position: absolute;right: 1rem; bottom: 1rem;}',
    '.fab-menu-list {list-style-type: none; padding:0; margin: 0;}',
    '.fab-menu-list li {margin-block-end: 0.5rem;}',
    '.fab-menu-list li button {background: white;}',
  ],
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    OverlayModule
  ]
})
export class FabIconMenuComponent {
  isOpen = false;
}

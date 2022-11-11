import {Component} from "@angular/core";
import {MatIconModule} from "@angular/material/icon";
import {MatListModule} from "@angular/material/list";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatBadgeModule} from "@angular/material/badge";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@Component({
  selector: 'app-fab-bottom-navigation',
  template: `
    <mat-drawer-container>
      <mat-drawer mode="side" opened>
        <mat-nav-list>
          <mat-list-item>
            <mat-icon matListIcon>account_circle</mat-icon>
            <a matLine href="#">Profile</a>
          </mat-list-item>
          <mat-list-item>
            <mat-icon matListIcon [matBadge]="3">notifications</mat-icon>
            <a matLine href="#">Notifications</a>
          </mat-list-item>
          <mat-list-item>
            <mat-icon matListIcon>home</mat-icon>
            <a matLine href="#">Dashboard</a>
          </mat-list-item>
          <mat-list-item>
            <mat-icon matListIcon>shopping_cart</mat-icon>
            <a matLine href="#">Cart</a>
          </mat-list-item>
          <mat-list-item>
            <mat-icon matListIcon>stars</mat-icon>
            <a matLine href="#">Wish list</a>
          </mat-list-item>
          <mat-list-item>
            <mat-icon matListIcon>settings</mat-icon>
            <a matLine href="#">Settings</a>
          </mat-list-item>
        </mat-nav-list>
      </mat-drawer>
      <mat-drawer-content>Main content</mat-drawer-content>
    </mat-drawer-container>`,
  styles:[
    'mat-drawer-container {height: 100%; width: 100%;}',
    'a[matLine] {max-width: 0;transition-property: max-width;transition-duration: 0.3s;}',
    'mat-nav-list:hover a[matLine] {max-width: 1000px;}',
    '::ng-deep .mat-list-text {padding-left: 0 !important;transition-property: padding-left;transition-duration: 0.4s;}',
    'mat-nav-list:hover ::ng-deep .mat-list-text {padding-left: 16px !important;}'
  ],
  standalone: true,
  imports: [
    BrowserAnimationsModule,
    MatListModule,
    MatSidenavModule,
    MatIconModule,
    MatBadgeModule,
  ]
})
export class CollapsibleVerticalNavigationComponent {
}

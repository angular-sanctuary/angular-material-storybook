import {Component} from "@angular/core";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'app-fab-bottom-navigation',
  template: `
    <mat-toolbar>
      <section>
        <a mat-icon-button color="primary">
          <mat-icon>home</mat-icon>
        </a>
        <a mat-icon-button>
          <mat-icon>favorite_outline</mat-icon>
        </a>
      </section>
      <section>
        <a mat-icon-button>
          <mat-icon fontSet="material-icons-outlined">login</mat-icon>
        </a>
        <a mat-icon-button>
          <mat-icon fontSet="material-icons-outlined">settings</mat-icon>
        </a>
      </section>
      <button mat-fab color="primary">
        <mat-icon>add</mat-icon>
      </button>
    </mat-toolbar>`,
  styles:[
    ':host {height: 100vh; margin: 0;}',
    'mat-toolbar {position: absolute;bottom: 0;display: flex;justify-content: space-between;}',
    'section {width: 40%;display: flex;justify-content: space-around;}',
    'a[mat-icon-button]:not([color]) {color: darkslategrey;}',
    'button[mat-fab] {position: absolute;margin-left: auto;margin-right: auto;left: 0;right: 0;text-align: center;bottom: 30px;}'
  ],
  standalone: true,
  imports: [MatToolbarModule, MatIconModule, MatButtonModule]
})
export class FabBottomNavigationComponent {
}

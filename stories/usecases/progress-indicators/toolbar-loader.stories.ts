import {Meta, moduleMetadata, Story} from "@storybook/angular";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {progressBarArgtypes} from "../../components/progress-bar/progress-bar.argtype";

export default {
  title: 'usecases/Progress indicators',
  decorators: [
    moduleMetadata({
      imports: [MatToolbarModule, MatProgressBarModule, MatButtonModule, MatIconModule]
    })
  ],
  argTypes: progressBarArgtypes,
  parameters: {
    layout: 'fullscreen',
    controls: {
      expanded: true
    }
  }
} as Meta;

export const Toolbar: Story = args => ({
  props: args,
  template: `
  <mat-toolbar role="heading">
      <button mat-icon-button>
        <mat-icon>menu</mat-icon>
      </button>
    </mat-toolbar>
    <mat-progress-bar [bufferValue]="bufferValue" [color]="color" [mode]="mode" [value]="value"></mat-progress-bar>`
});
Toolbar.storyName = 'toolbar';


export const Fullscreen: Story = args => ({
  props: args,
  template: `
    <style>
    :host {
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    section {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 15rem;
    }
</style>
    <section>
        <p>Getting your files</p>
        <mat-progress-bar [bufferValue]="bufferValue" [color]="color" [mode]="mode" [value]="value"></mat-progress-bar>
    </section>
`
});
Fullscreen.storyName = 'fullscreen';

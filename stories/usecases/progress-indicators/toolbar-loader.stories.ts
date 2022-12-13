import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { progressBarArgtypes } from '../../components/progress-bar/progress-bar.argtype';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { progressSpinnerArgtypes } from '../../components/progress-spinner/progress-spinner.argtype';
import { MatBadgeModule } from '@angular/material/badge';
import { defaultUsecasesParameters } from '../../../.storybook/utils';

export default {
  title: 'usecases/Progress indicators',
  decorators: [
    moduleMetadata({
      imports: [
        MatToolbarModule,
        MatProgressBarModule,
        MatProgressSpinnerModule,
        MatButtonModule,
        MatIconModule,
        MatBadgeModule,
      ],
    }),
  ],
  argTypes: progressBarArgtypes,
  parameters: {
    ...defaultUsecasesParameters,
  },
} as Meta;

export const Toolbar: StoryObj = {
  render: (args) => ({
    props: args,
    template: `
    <style>
        mat-toolbar {
            display: flex;
            justify-content: space-between;
        }
    </style>
  <mat-toolbar role="heading">
      <button mat-icon-button>
        <mat-icon>menu</mat-icon>
      </button>
      <button mat-icon-button>
        <mat-icon matBadge="2" matBadgeColor="accent">notifications</mat-icon>
      </button>
    </mat-toolbar>
    <mat-progress-bar [bufferValue]="bufferValue" [color]="color" [mode]="mode" [value]="value"></mat-progress-bar>`,
  }),
  name: 'toolbar',
};

export const Fullscreen: StoryObj = {
  render: (args) => ({
    props: args,
    template: `
    <style>
    article {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100%;
    }
    section {
        display: flex;
        flex-direction: column;
        align-items: center;
        max-width: 15rem;
    }
    section:not(:last-child) {
        margin-block-end: 5rem;
    }
</style>
    <article>
    <section>
        <mat-progress-spinner [color]="color" [mode]="mode" [value]="value" [diameter]="diameter" [strokeWidth]="strokeWidth"></mat-progress-spinner>
        <p>Getting your files</p>
    </section>
    <section>
        <mat-progress-bar [bufferValue]="bufferValue" [color]="color" [mode]="mode" [value]="value"></mat-progress-bar>
        <p>Getting your files</p>
    </section>
    </article>
`,
  }),
  name: 'fullscreen',
  argTypes: {
    ...progressSpinnerArgtypes,
    ...progressBarArgtypes,
  },
};

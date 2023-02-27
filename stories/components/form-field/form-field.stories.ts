import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { formFieldArgtypes } from './form-field-argtype';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { userEvent, within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

export default {
  title: 'components/Form field',
  tags: ['docsPage'],
  decorators: [
    moduleMetadata({
      imports: [
        BrowserAnimationsModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatIconModule,
        MatButtonModule,
        ReactiveFormsModule,
        FormsModule,
      ],
    }),
  ],
  parameters: {
    controls: {
      expanded: true,
    },
  },
  argTypes: formFieldArgtypes,
} as Meta;

export const AAWithBasicUsage: StoryObj = {
  render: (args) => ({
    props: args,
    template: `
      <mat-form-field [appearance]="appearance" [color]="color" [floatLabel]="floatLabel" [hideRequiredMarker]="hideRequiredMarker" [hintLabel]="hintLabel">
          <mat-label>Password</mat-label>
          <input type="text" matInput>
      </mat-form-field>
    `,
  }),
  // Added an example of how to use the play function
  // For more information, see https://storybook.js.org/docs/angular/writing-tests/interaction-testing
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.type(canvas.getByLabelText('Password'), 'email@provider.com');
    await expect(canvas.getByLabelText('Password')).toHaveValue('email@provider.com');
  },
  name: 'basic usage',
  parameters: {
    controls: {
      exclude: ['alignHint'],
    },
  },
};

export const WithStateFilled: StoryObj = {
  render: (args) => ({
    props: args,
    template: `
      <mat-form-field [appearance]="appearance" [color]="color" [floatLabel]="floatLabel" [hideRequiredMarker]="hideRequiredMarker" [hintLabel]="hintLabel">
          <mat-label>Password</mat-label>
          <input type="text" matInput [ngModel]="'admin'">
      </mat-form-field>
    `,
  }),
  name: 'with state (filled)',
  parameters: {
    controls: {
      exclude: ['alignHint'],
    },
  },
};

export const WithStateDisabled: StoryObj = {
  render: (args) => ({
    props: args,
    template: `
      <mat-form-field [appearance]="appearance" [color]="color" [floatLabel]="floatLabel" [hideRequiredMarker]="hideRequiredMarker" [hintLabel]="hintLabel">
          <mat-label>Password</mat-label>
          <input type="text" matInput disabled>
      </mat-form-field>
    `,
  }),
  name: 'with state (disabled)',
  parameters: {
    controls: {
      exclude: ['alignHint'],
    },
  },
};

export const WithStateFocused: StoryObj = {
  render: (args) => ({
    props: args,
    template: `
      <mat-form-field class="mat-focused" [appearance]="appearance" [color]="color" [floatLabel]="floatLabel" [hideRequiredMarker]="hideRequiredMarker" [hintLabel]="hintLabel">
          <mat-label>Password 1</mat-label>
          <input type="text" matInput [ngModel]="'admin'">
      </mat-form-field>
    `,
  }),
  name: 'with state (focused)',
  parameters: {
    controls: {
      exclude: ['alignHint'],
    },
  },
};

export const WithStateHover: StoryObj = {
  render: (args) => ({
    props: args,
    template: `
      <mat-form-field class="mat-focused" [appearance]="appearance" [color]="color" [floatLabel]="floatLabel" [hideRequiredMarker]="hideRequiredMarker" [hintLabel]="hintLabel">
          <mat-label>Password</mat-label>
          <input type="text" matInput>
      </mat-form-field>
    `,
  }),
  name: 'with state (hover)',
  parameters: {
    controls: {
      exclude: ['alignHint'],
    },
    pseudo: {
      hover: true,
    },
  },
};

export const WithAppearanceLegacy: StoryObj = {
  render: (args) => ({
    props: {
      ...args,
      appearance: 'legacy',
    },
    template: `
      <mat-form-field [appearance]="appearance" [color]="color" [floatLabel]="floatLabel" [hideRequiredMarker]="hideRequiredMarker" [hintLabel]="hintLabel">
          <mat-label>Password</mat-label>
          <input type="text" matInput>
      </mat-form-field>
    `,
  }),
  name: 'with appearance (legacy)',
  parameters: {
    controls: {
      exclude: ['alignHint'],
    },
  },
};

export const WithAppearanceStandard: StoryObj = {
  render: (args) => ({
    props: {
      ...args,
      appearance: 'standard',
    },
    template: `
      <mat-form-field [appearance]="appearance" [color]="color" [floatLabel]="floatLabel" [hideRequiredMarker]="hideRequiredMarker" [hintLabel]="hintLabel">
          <mat-label>Password</mat-label>
          <input type="text" matInput>
      </mat-form-field>
    `,
  }),
  name: 'with appearance (standard)',
  parameters: {
    controls: {
      exclude: ['alignHint'],
    },
  },
};

export const WithAppearanceFill: StoryObj = {
  render: (args) => ({
    props: {
      ...args,
      appearance: 'fill',
    },
    template: `
      <mat-form-field [appearance]="appearance" [color]="color" [floatLabel]="floatLabel" [hideRequiredMarker]="hideRequiredMarker" [hintLabel]="hintLabel">
          <mat-label>Password</mat-label>
          <input type="text" matInput>
      </mat-form-field>
    `,
  }),
  name: 'with appearance (fill)',
  parameters: {
    controls: {
      exclude: ['alignHint'],
    },
  },
};

export const WithAppearanceOutline: StoryObj = {
  render: (args) => ({
    props: {
      ...args,
      appearance: 'outline',
    },
    template: `
      <mat-form-field [appearance]="appearance" [color]="color" [floatLabel]="floatLabel" [hideRequiredMarker]="hideRequiredMarker" [hintLabel]="hintLabel">
          <mat-label>Password</mat-label>
          <input type="text" matInput>
      </mat-form-field>
    `,
  }),
  name: 'with appearance (outline)',
  parameters: {
    controls: {
      exclude: ['alignHint'],
    },
  },
};

export const WithStartHint: StoryObj = {
  render: (args) => ({
    props: args,
    template: `
      <mat-form-field [appearance]="appearance" [color]="color" [floatLabel]="floatLabel" [hideRequiredMarker]="hideRequiredMarker" [hintLabel]="hintLabel">
          <mat-label>Password</mat-label>
          <input type="text" matInput>
          <mat-hint align="start">at least 8 characters</mat-hint>
      </mat-form-field>
    `,
  }),
  name: 'with hint (start)',
};

export const WithEndHint: StoryObj = {
  render: (args) => ({
    props: args,
    template: `
      <mat-form-field [appearance]="appearance" [color]="color" [floatLabel]="floatLabel" [hideRequiredMarker]="hideRequiredMarker" [hintLabel]="hintLabel">
          <mat-label>Contributions</mat-label>
          <mat-select>
              <mat-option>Components</mat-option>
              <mat-option>Use cases</mat-option>
          </mat-select>
          <mat-hint align="end">Choose an option ^</mat-hint>
      </mat-form-field>
    `,
  }),
  name: 'with hint (end)',
};

export const WithDoubleHints: StoryObj = {
  render: (args) => ({
    props: args,
    template: `
      <mat-form-field [appearance]="appearance" [color]="color" [floatLabel]="floatLabel" [hideRequiredMarker]="hideRequiredMarker" [hintLabel]="hintLabel">
          <mat-label>Username</mat-label>
          <input type="text" matInput #input [attr.maxlength]="10">
          <mat-hint align="start">Max 10 characters</mat-hint>
          <mat-hint align="end">{{input.value.length || 0}}/10</mat-hint>
      </mat-form-field>
    `,
  }),
  name: 'with hint (double)',
};

export const WithPrefix: StoryObj = {
  render: (args) => ({
    props: {
      ...args,
      hide: true,
    },
    template: `
      <mat-form-field [appearance]="appearance" [color]="color" [floatLabel]="floatLabel" [hideRequiredMarker]="hideRequiredMarker" [hintLabel]="hintLabel">
          <mat-label>Password</mat-label>
          <input matInput [type]="hide ? 'password' : 'text'">
          <mat-icon matPrefix>key</mat-icon>
      </mat-form-field>
    `,
  }),
  name: 'with prefix',
  parameters: {
    controls: {
      exclude: ['alignHint'],
    },
  },
};

export const WithSuffix: StoryObj = {
  render: (args) => ({
    props: {
      ...args,
      hide: true,
    },
    template: `
      <mat-form-field [appearance]="appearance" [color]="color" [floatLabel]="floatLabel" [hideRequiredMarker]="hideRequiredMarker" [hintLabel]="hintLabel">
          <mat-label>Password</mat-label>
          <input matInput [type]="hide ? 'password' : 'text'">
          <button mat-icon-button matSuffix (click)="hide = !hide" [attr.aria-label]="'Hide password'" [attr.aria-pressed]="hide">
              <mat-icon>{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>
          </button>
      </mat-form-field>
    `,
  }),
  name: 'with suffix',
  parameters: {
    controls: {
      exclude: ['alignHint'],
    },
  },
};

export const WithPrefixAndSuffix: StoryObj = {
  render: (args) => ({
    props: {
      ...args,
      hide: true,
    },
    template: `
      <style>
      .example-right-align {
          text-align: right;
      }

      input.example-right-align::-webkit-outer-spin-button,
      input.example-right-align::-webkit-inner-spin-button {
          display: none;
      }

      input.example-right-align {
          -moz-appearance: textfield;
      }
      </style>
      <mat-form-field [appearance]="appearance" [color]="color" [floatLabel]="floatLabel" [hideRequiredMarker]="hideRequiredMarker" [hintLabel]="hintLabel">
          <mat-label>Amount</mat-label>
          <input matInput type="number" class="example-right-align" placeholder="0">
          <span matPrefix>$&nbsp;</span>
          <span matSuffix>.00</span>
    </mat-form-field>
    `,
  }),
  name: 'with prefix and suffix',
  parameters: {
    controls: {
      exclude: ['alignHint'],
    },
  },
};

const control = new FormControl('', Validators.required);
control.markAsTouched();

export const WithErrorMessage: StoryObj = {
  render: (args) => ({
    props: {
      ...args,
      control: control,
    },
    template: `
       <mat-form-field [appearance]="appearance" [color]="color" [floatLabel]="floatLabel" [hideRequiredMarker]="hideRequiredMarker" [hintLabel]="hintLabel">
          <mat-label>Password</mat-label>
          <input type="text" matInput [formControl]="control">
          <mat-error *ngIf="control.hasError('required')">This field is required</mat-error>
      </mat-form-field>
      `,
  }),
  name: 'with error message',
  parameters: {
    controls: {
      exclude: ['alignHint'],
    },
  },
};
